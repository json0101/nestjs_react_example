import { Injectable } from '@nestjs/common';
import { CreateEmployeeDeparmentHistoryDto } from './dto/create-employee-deparment-history.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { EmployeeDeparmentHistory } from './entities/employee-deparment-history.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EmployeeDeparmentHistoryService {

  constructor(@InjectRepository(EmployeeDeparmentHistory)
  private readonly employeeDeparmentRepository: Repository<EmployeeDeparmentHistory>,) 
  {}

  async create(createEmployeeDeparmentHistoryDto: CreateEmployeeDeparmentHistoryDto) {
    
    const employee_deparment_history = {...createEmployeeDeparmentHistoryDto} as EmployeeDeparmentHistory;
  
    return await this.employeeDeparmentRepository.save(employee_deparment_history);
  }

  findAll(employee_id: number) {
    return this.employeeDeparmentRepository.find(
      {
        where: {
          employee_id: employee_id,
        }
        ,relations: ['employee', 'deparment'],
      },
      
    );
  }
}
