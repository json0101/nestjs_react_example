import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeeModule } from './human-resources/employee/employee.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DeparmentModule } from './human-resources/deparment/deparment.module';
import { CommonModule } from './common/common.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres', // type of our database
      url: process.env.DATABASE_URL,
      autoLoadEntities: true, // models will be loaded automatically 
      synchronize: true,
  }),
  EmployeeModule,
  DeparmentModule,
  CommonModule
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
