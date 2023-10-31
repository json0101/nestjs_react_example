import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber } from "class-validator";


export class UpdateEmployeeDto {
    @ApiProperty({description: "Employee's new deparment"})
    @IsNotEmpty()
    @IsNumber()
    deparment_id: number;

    @ApiProperty({description: "Employee's state"})
    @IsNotEmpty()
    @IsNumber()
    active: boolean;
}
