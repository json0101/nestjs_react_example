import BaseEntity from "src/common/entities/base.entity";
import { Deparment } from "src/human-resources/deparment/entities/deparment.entity";
import { EmployeeDeparmentHistory } from "src/human-resources/employee-deparment-history/entities/employee-deparment-history.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('employees')
export class Employee extends BaseEntity {
    @PrimaryGeneratedColumn()
    employee_id: number;

    @Column()
    first_name: string;

    @Column()
    last_name: string;

    @Column()
    hire_date: Date;

    @Column()
    deparment_id: number;

    @ManyToOne(() => Deparment, (deparment) => deparment.employees)
    @JoinColumn({ name: 'deparment_id'})
    deparment: Deparment;

    @Column()
    phone: string;

    @Column()
    address: string;

    @OneToMany(() => EmployeeDeparmentHistory, (employee_deparment_history) => employee_deparment_history.employee)
    employee_deparment_history: EmployeeDeparmentHistory[];
}
