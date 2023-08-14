import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from './entities/employee.entity';
import { Repository } from 'typeorm';
import EmployeeResume from './dto/employee-resume.dto';
import { DeparmentService } from '../deparment/deparment.service';
import { DateTime } from 'luxon';
import { EmployeeDeparmentHistoryService } from '../employee-deparment-history/employee-deparment-history.service';
import { CreateEmployeeDeparmentHistoryDto } from '../employee-deparment-history/dto/create-employee-deparment-history.dto';

@Injectable()
export class EmployeeService {
  
  constructor(
    @InjectRepository(Employee)
    private readonly employeeRepository: Repository<Employee>,
    private readonly deparmentService: DeparmentService,
    private readonly employeeDeparmentHistoryService: EmployeeDeparmentHistoryService,
  ) { }

  async create(createEmployeeDto: CreateEmployeeDto) {
    const employee = {
      ...createEmployeeDto
    } as Employee;

    const employee_saved = await this.employeeRepository.save(employee);
    const employee_deparment_history_dto = {
      employee_id: employee_saved.employee_id,
      deparment_id: employee.deparment_id,
      date: DateTime.now(),
    } as CreateEmployeeDeparmentHistoryDto;

    await this.employeeDeparmentHistoryService.create(employee_deparment_history_dto);
    return employee_saved;
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
        'dep.deparment_id as deparment_id',
        'dep.description as deparment',
        'emp.active as active'
      ])
      .innerJoin('emp.deparment', 'dep')
      .addSelect('dep.description as deparment')
      .orderBy('emp.last_name', 'ASC')
      .getRawMany<EmployeeResume[]>();
      
    return employees;
  }

  async findOne(id: number) {
    const employees = await this.employeeRepository.createQueryBuilder('emp')
      .innerJoin('emp.deparment', 'dep')
      .andWhere('emp.employee_id = :employee_id', {employee_id: id})
      .select([
        'employee_id',
        'first_name',
        'last_name',
        'hire_date',
        'phone',
        'address',
        'dep.deparment_id as deparment_id',
        'dep.description as deparment',
        'emp.active as active'
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
    if (!employee)
      throw new NotFoundException();

    const deparment = await this.deparmentService.findOne(updateEmployeeDto.deparment_id);

    if (!deparment) {
      throw new NotFoundException("Deparment not found");
    }

    employee.deparment = deparment;
    employee.active = +updateEmployeeDto.active;

    await this.employeeRepository.save(employee);
    await this.saveDeparmentHistory(employee);

    const employee_updated_resume = {
      employee_id: employee.employee_id,
      first_name: employee.first_name,
      last_name: employee.last_name,
      hire_date: employee.hire_date,
      deparment_id: employee.deparment.deparment_id,
      deparment: employee.deparment.description,
      phone: employee.phone,
      address: employee.address,
      active: employee.active,
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

  private async saveDeparmentHistory(employee: Employee) {
    const employee_deparment_history_dto = {
      employee_id: employee.employee_id,
      deparment_id: employee.deparment_id,
      date: DateTime.now(),
    } as CreateEmployeeDeparmentHistoryDto;

    return await this.employeeDeparmentHistoryService.create(employee_deparment_history_dto);
  }
}
