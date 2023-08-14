import BaseEntity from "src/common/entities/base.entity";
import { EmployeeDeparmentHistory } from "src/human-resources/employee-deparment-history/entities/employee-deparment-history.entity";
import { Employee } from "src/human-resources/employee/entities/employee.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('deparments')
export class Deparment extends BaseEntity {

    @PrimaryGeneratedColumn()
    deparment_id: number;

    @Column({
        unique: true,
    })
    description: string;

    @Column({
        nullable: true,
    })
    prueba: string;

    @OneToMany(() => Employee, (employee) => employee.deparment)
    employees: Employee[];

    @OneToMany(() => EmployeeDeparmentHistory, (employee_deparment_history) => employee_deparment_history.deparment)
    employee_deparment_history: EmployeeDeparmentHistory[];
}
