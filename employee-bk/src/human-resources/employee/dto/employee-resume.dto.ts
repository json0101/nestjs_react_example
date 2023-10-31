import { ApiProperty } from "@nestjs/swagger";

export default class EmployeeResume {
    @ApiProperty({description: "Employee's Id"})
    employee_id: number;
    
    @ApiProperty({description: "Employee's first name"})
    first_name: string;

    @ApiProperty({description: "Employee's last name"})
    last_name: string;

    @ApiProperty({description: "Employee's hire date"})
    hire_date: Date;

    @ApiProperty({description: "Employee's deparment id"})
    deparment_id: number;

    @ApiProperty({description: "Employee's deparment"})
    deparment: string;

    @ApiProperty({description: "Employee's phone"})
    phone: string;

    @ApiProperty({description: "Employee's address"})
    address: string;

    @ApiProperty({description: "Employee's state"})
    active: number;
}