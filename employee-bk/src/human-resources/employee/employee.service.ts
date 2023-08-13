import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from './entities/employee.entity';
import { Repository } from 'typeorm';
import EmployeeResume from './dto/employee-resume.dto';
import { DeparmentService } from '../deparment/deparment.service';
import { DateTime } from 'luxon';

@Injectable()
export class EmployeeService {
  
  constructor(
    @InjectRepository(Employee)
    private readonly employeeRepository: Repository<Employee>,
    private readonly deparmentService: DeparmentService,
  ) { }

  async create(createEmployeeDto: CreateEmployeeDto) {
    const employee = {
      ...createEmployeeDto
    } as Employee;

    return this.employeeRepository.save(employee);
  }

  async findAll() {
    const employees = await this.employeeRepository.createQueryBuilder('emp')
      .select([
        'employee_id',
        'first_name',
        'last_name',
        'hire_date',
        'phone',
        'address',
        'dep.description as deparment',
      ])
      .innerJoin('emp.deparment', 'dep')
      .addSelect('dep.description as deparment')
      .where('emp.active = :active', { active: 1 })
      .getRawMany<EmployeeResume[]>();
      
    return employees;
  }

  async findOne(id: number) {
    const employees = await this.employeeRepository.createQueryBuilder('emp')
      .innerJoin('emp.deparment', 'dep')
      .where('emp.active = :active', { active: 1 })
      .andWhere('emp.employee_id = :employee_id', {employee_id: id})
      .select([
        'employee_id',
        'first_name',
        'last_name',
        'hire_date',
        'phone',
        'address',
        'dep.description as deparment',
      ])
      .getRawOne<EmployeeResume>();
      
    return employees;
  }

  async update(id: number, updateEmployeeDto: UpdateEmployeeDto) : Promise<EmployeeResume | null> {
    const employee = await this.employeeRepository.findOne({
      where: {
        employee_id: id,
      },
      relations: ['deparment'],
    });

    const date = DateTime.now();
    console.log(date.toJSDate());
    if (!employee)
      throw new NotFoundException();

    const deparment = await this.deparmentService.findOne(updateEmployeeDto.deparment_id);

    if (!deparment) {
      throw new NotFoundException("Deparment not found");
    }

    employee.deparment = deparment;

    await this.employeeRepository.save(employee);
    const employee_updated_resume = {
      employee_id: employee.employee_id,
      first_name: employee.first_name,
      last_name: employee.last_name,
      hire_date: employee.hire_date,
      deparment: employee.deparment.description,
      phone: employee.phone,
      address: employee.address
    } as EmployeeResume;
    return employee_updated_resume;
    
  }

  async remove(id: number) {
    const employee = await this.employeeRepository.findOne({
      where: {
        employee_id: id,
      }
    });

    if (!employee)
      throw new NotFoundException();

    await this.employeeRepository.remove(employee);
    return;
  }
}
