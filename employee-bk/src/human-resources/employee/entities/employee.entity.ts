import BaseEntity from "src/common/entities/base.entity";
import { Deparment } from "src/human-resources/deparment/entities/deparment.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

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
}
