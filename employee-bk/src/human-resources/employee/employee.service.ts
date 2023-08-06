import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from './entities/employee.entity';
import { Repository } from 'typeorm';
import EmployeeResume from './dto/employee-resume.dto';

@Injectable()
export class EmployeeService {
  
  constructor(
    @InjectRepository(Employee)
    private readonly employeeRepository: Repository<Employee>
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

  async update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
    const employee = await this.employeeRepository.findOne({
      where: {
        employee_id: id,
      }
    });

    if (!employee)
      throw new NotFoundException();

    employee.first_name = updateEmployeeDto.first_name;
    employee.last_name = updateEmployeeDto.last_name;
    employee.hire_date = updateEmployeeDto.hire_date;
    employee.deparment_id = updateEmployeeDto.deparment_id;
    employee.phone = updateEmployeeDto.phone;
    employee.address = updateEmployeeDto.address;

    return this.employeeRepository.save(employee);
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
