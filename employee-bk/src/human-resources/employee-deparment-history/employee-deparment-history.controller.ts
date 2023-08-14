import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmployeeDeparmentHistoryService } from './employee-deparment-history.service';
import { CreateEmployeeDeparmentHistoryDto } from './dto/create-employee-deparment-history.dto';

@Controller('employee-deparment-history')
export class EmployeeDeparmentHistoryController {
  constructor(private readonly employeeDeparmentHistoryService: EmployeeDeparmentHistoryService) {}

  @Get(':employee_id')
  findAll(@Param('employee_id') employee_id: string) {
    return this.employeeDeparmentHistoryService.findAll(+employee_id);
  }

}
