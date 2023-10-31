import { ApiProperty } from "@nestjs/swagger";

export class CreateEmployeeDto {
    @ApiProperty({description: "Employee's first name"})
    first_name: string;

    @ApiProperty({description: "Employee's last name"})
    last_name: string;

    @ApiProperty({description: "Employee's hire date"})
    hire_date: Date;

    @ApiProperty({description: "Employee's deparment"})
    deparment_id: number;

    @ApiProperty({description: "Employee's phone"})
    phone: string;

    @ApiProperty({description: "Employee's address"})
    address: string;
}
