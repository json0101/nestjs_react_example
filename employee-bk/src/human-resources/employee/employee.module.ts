import { Module } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmployeeController } from './employee.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from './entities/employee.entity';
import { DeparmentService } from '../deparment/deparment.service';
import { DeparmentModule } from '../deparment/deparment.module';
import { EmployeeDeparmentHistoryModule } from '../employee-deparment-history/employee-deparment-history.module';

@Module({
  imports: [TypeOrmModule.forFeature([Employee]), DeparmentModule, EmployeeDeparmentHistoryModule],
  controllers: [EmployeeController],
  providers: [EmployeeService]
})
export class EmployeeModule {}
