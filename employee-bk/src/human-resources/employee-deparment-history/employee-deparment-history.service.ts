import { Injectable } from '@nestjs/common';
import { CreateEmployeeDeparmentHistoryDto } from './dto/create-employee-deparment-history.dto';
import { UpdateEmployeeDeparmentHistoryDto } from './dto/update-employee-deparment-history.dto';

@Injectable()
export class EmployeeDeparmentHistoryService {
  create(createEmployeeDeparmentHistoryDto: CreateEmployeeDeparmentHistoryDto) {
    return 'This action adds a new employeeDeparmentHistory';
  }

  findAll() {
    return `This action returns all employeeDeparmentHistory`;
  }

  findOne(id: number) {
    return `This action returns a #${id} employeeDeparmentHistory`;
  }

  update(id: number, updateEmployeeDeparmentHistoryDto: UpdateEmployeeDeparmentHistoryDto) {
    return `This action updates a #${id} employeeDeparmentHistory`;
  }

  remove(id: number) {
    return `This action removes a #${id} employeeDeparmentHistory`;
  }
}
