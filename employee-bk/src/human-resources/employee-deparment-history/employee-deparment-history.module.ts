import { Module } from '@nestjs/common';
import { EmployeeDeparmentHistoryService } from './employee-deparment-history.service';
import { EmployeeDeparmentHistoryController } from './employee-deparment-history.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from '../employee/entities/employee.entity';
import { EmployeeDeparmentHistory } from './entities/employee-deparment-history.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EmployeeDeparmentHistory])],
  exports: [EmployeeDeparmentHistoryService],
  controllers: [EmployeeDeparmentHistoryController],
  providers: [EmployeeDeparmentHistoryService]
})
export class EmployeeDeparmentHistoryModule {}
