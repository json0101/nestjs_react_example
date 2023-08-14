import { Deparment } from "src/human-resources/deparment/entities/deparment.entity";
import { Employee } from "../../employee/entities/employee.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import BaseEntity from "src/common/entities/base.entity";

@Entity('employee_deparment_history')
export class EmployeeDeparmentHistory extends BaseEntity {
    
    @PrimaryGeneratedColumn()
    employee_deparment_history_id: number;

    @Column()
    employee_id: number;

    @ManyToOne(() => Employee, (employee) => employee.employee_deparment_history)
    @JoinColumn({ name: 'employee_id'})
    employee: Employee;

    @Column()
    deparment_id: number;

    @ManyToOne(() => Deparment, (deparment) => deparment.employee_deparment_history)
    @JoinColumn({ name: 'deparment_id'})
    deparment: Deparment;

    @Column()
    date: Date;

}
