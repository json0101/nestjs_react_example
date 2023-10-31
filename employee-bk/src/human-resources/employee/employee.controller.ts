import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Employee } from './entities/employee.entity';
import EmployeeResume from './dto/employee-resume.dto';

@ApiTags('Employee')
@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @ApiOperation({ summary: 'Create employee' })
  @ApiResponse({ status: 201, description: 'Created.' })
  @ApiResponse({ status: 500, description: 'Internal Server Error' })
  @HttpCode(201)
  @Post()
  create(@Body() createEmployeeDto: CreateEmployeeDto) {
    return this.employeeService.create(createEmployeeDto);
  }

  @ApiOperation({ summary: 'Get all employees' })
  @ApiResponse({ status: 200, description: 'Success', type: Array<EmployeeResume> })
  @ApiResponse({ status: 500, description: 'Internal Server Error' })
  @Get()
  findAll() : Promise<EmployeeResume[]> {
    return this.employeeService.findAll();
  }

  @ApiOperation({ summary: 'Get employee by id' })
  @ApiParam({ name: 'id', required: true, description: 'Employee id', type: 'integer'})
  @ApiResponse({ status: 200, description: 'Success', type: EmployeeResume })
  @ApiResponse({ status: 500, description: 'Internal Server Error' })
  @Get(':id')
  findOne(@Param('id') id: string) : Promise<EmployeeResume> {
    return this.employeeService.findOne(+id);
  }

  @ApiOperation({ summary: 'Update employee' })
  @ApiParam({ name: 'id', required: true, description: 'Employee id', type: 'integer'})
  @ApiResponse({ status: 200, description: 'Success' })
  @ApiResponse({ status: 404, description: 'Not Found' })
  @ApiResponse({ status: 500, description: 'Internal Server Error' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEmployeeDto: UpdateEmployeeDto) {
    return this.employeeService.update(+id, updateEmployeeDto);
  }

  @ApiOperation({ summary: 'Delete employee' })
  @ApiParam({ name: 'id', required: true, description: 'Employee id', type: 'integer'})
  @ApiResponse({ status: 200, description: 'Success' })
  @ApiResponse({ status: 404, description: 'Not Found' })
  @ApiResponse({ status: 500, description: 'Internal Server Error' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.employeeService.remove(+id);
  }
}
