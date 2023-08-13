import { Module } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmployeeController } from './employee.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from './entities/employee.entity';
import { DeparmentService } from '../deparment/deparment.service';
import { DeparmentModule } from '../deparment/deparment.module';

@Module({
  imports: [TypeOrmModule.forFeature([Employee]), DeparmentModule],
  controllers: [EmployeeController],
  providers: [EmployeeService]
})
export class EmployeeModule {}
