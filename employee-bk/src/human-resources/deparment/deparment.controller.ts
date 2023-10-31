import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DeparmentService } from './deparment.service';
import { CreateDeparmentDto } from './dto/create-deparment.dto';
import { UpdateDeparmentDto } from './dto/update-deparment.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Deparment } from './entities/deparment.entity';

@ApiTags('Deparment')
@Controller('deparment')
export class DeparmentController {
  constructor(private readonly deparmentService: DeparmentService) {}

  @ApiOperation({ summary: 'Get all deparments' })
  @ApiResponse({ status: 200, description: 'Success', type: Array<Deparment> })
  @ApiResponse({ status: 500, description: 'Internal Server Error' })
  @Get()
  findAll() {
    return this.deparmentService.findAll();
  }
}
