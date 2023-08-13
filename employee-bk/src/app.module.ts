import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeeModule } from './human-resources/employee/employee.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DeparmentModule } from './human-resources/deparment/deparment.module';
import { CommonModule } from './common/common.module';
import { EmployeeDeparmentHistoryModule } from './human-resources/employee-deparment-history/employee-deparment-history.module';

@Module({
  imports: [
    CommonModule,
    TypeOrmModule.forRoot({
      type: 'postgres', // type of our database
      url: process.env.DATABASE_URL ?? 'postgres://postgres:root@localhost:5432/employees',
      autoLoadEntities: true, // models will be loaded automatically 
      synchronize: true,
  }),
  EmployeeModule,
  DeparmentModule,
  EmployeeDeparmentHistoryModule,
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
