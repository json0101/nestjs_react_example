import BaseEntity from "src/common/entities/base.entity";
import { Employee } from "src/human-resources/employee/entities/employee.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";

@Entity('deparments')
export class Deparment extends BaseEntity {

    @PrimaryColumn()
    deparment_id: number;

    @Column()
    description: string;

    @OneToMany(() => Employee, (employee) => employee.deparment)
    employees: Employee[];
}
