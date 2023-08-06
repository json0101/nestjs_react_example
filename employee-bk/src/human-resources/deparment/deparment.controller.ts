import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DeparmentService } from './deparment.service';
import { CreateDeparmentDto } from './dto/create-deparment.dto';
import { UpdateDeparmentDto } from './dto/update-deparment.dto';

@Controller('deparment')
export class DeparmentController {
  constructor(private readonly deparmentService: DeparmentService) {}

  @Get()
  findAll() {
    return this.deparmentService.findAll();
  }
}
