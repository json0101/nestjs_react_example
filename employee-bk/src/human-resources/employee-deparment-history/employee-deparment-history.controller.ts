import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmployeeDeparmentHistoryService } from './employee-deparment-history.service';
import { CreateEmployeeDeparmentHistoryDto } from './dto/create-employee-deparment-history.dto';
import { UpdateEmployeeDeparmentHistoryDto } from './dto/update-employee-deparment-history.dto';

@Controller('employee-deparment-history')
export class EmployeeDeparmentHistoryController {
  constructor(private readonly employeeDeparmentHistoryService: EmployeeDeparmentHistoryService) {}

  @Post()
  create(@Body() createEmployeeDeparmentHistoryDto: CreateEmployeeDeparmentHistoryDto) {
    return this.employeeDeparmentHistoryService.create(createEmployeeDeparmentHistoryDto);
  }

  @Get()
  findAll() {
    return this.employeeDeparmentHistoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.employeeDeparmentHistoryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEmployeeDeparmentHistoryDto: UpdateEmployeeDeparmentHistoryDto) {
    return this.employeeDeparmentHistoryService.update(+id, updateEmployeeDeparmentHistoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.employeeDeparmentHistoryService.remove(+id);
  }
}
