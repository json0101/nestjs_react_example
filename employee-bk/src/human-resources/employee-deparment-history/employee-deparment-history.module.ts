import { Module } from '@nestjs/common';
import { EmployeeDeparmentHistoryService } from './employee-deparment-history.service';
import { EmployeeDeparmentHistoryController } from './employee-deparment-history.controller';

@Module({
  controllers: [EmployeeDeparmentHistoryController],
  providers: [EmployeeDeparmentHistoryService]
})
export class EmployeeDeparmentHistoryModule {}
