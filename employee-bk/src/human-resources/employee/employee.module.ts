import { Module } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmployeeController } from './employee.controller';
import { InjectRepository, TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from './entities/employee.entity';
import { DeparmentModule } from '../deparment/deparment.module';
import { EmployeeDeparmentHistoryModule } from '../employee-deparment-history/employee-deparment-history.module';
import { Repository } from 'typeorm';
import { Deparment } from '../deparment/entities/deparment.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Employee, Deparment]), DeparmentModule, EmployeeDeparmentHistoryModule],
  controllers: [EmployeeController],
  providers: [EmployeeService]
})
export class EmployeeModule {
  constructor(
    @InjectRepository(Employee)
    private readonly employeeRepository: Repository<Employee>,
    @InjectRepository(Deparment)
    private readonly deparmentRepository: Repository<Deparment>,
  ) {
    this.init();
  }

  private async init() {
    await this.insertDeparments()
    await this.insertEmployees()
  }

  private async insertEmployees() {
    const employees = await this.employeeRepository.count();

    if (employees === 0) {
      this.employeeRepository.query(
        `
        insert into employees (first_name, last_name, hire_date, phone, deparment_id, address)
        values ('Jason', 'Hernandez', '20150106',  '32376666', 1, 'San Pedro Sula, colonia San Jose de Sula')
        ,('Laura', 'Aguilar', '20130516', '99011756', 2,'La Ceiba Barrio Indenpenencia')
        ,('Dianna', 'Buezo', '20200320', '98213421', 3,'Tegucigalpa Colonia Kenedy')
        `);
    }
  }

  private async insertDeparments() {
    const deparments = await this.deparmentRepository.count();

    if (deparments === 0) {
      this.deparmentRepository.query(
        `insert into deparments( description)
          values ('Finances'),
          ('IT'),
          ('Human Resource');
        `);
    } 
  }
}
