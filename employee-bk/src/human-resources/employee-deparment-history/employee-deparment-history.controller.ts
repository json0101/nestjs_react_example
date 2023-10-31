import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmployeeDeparmentHistoryService } from './employee-deparment-history.service';
import { CreateEmployeeDeparmentHistoryDto } from './dto/create-employee-deparment-history.dto';
import { ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';

@ApiTags('Employee - deparment - history')
@Controller('employee-deparment-history')
export class EmployeeDeparmentHistoryController {
  constructor(private readonly employeeDeparmentHistoryService: EmployeeDeparmentHistoryService) {}

  @ApiOperation({ summary: 'Get history of employee movement deparment' })
  @ApiParam({ name: 'employee_id', required: true, description: 'Employee id', type: 'integer'})
  @Get(':employee_id')
  findAll(@Param('employee_id') employee_id: string) {
    return this.employeeDeparmentHistoryService.findAll(+employee_id);
  }

}
