import { IsNotEmpty, IsNumber } from "class-validator";


export class UpdateEmployeeDto {
    @IsNotEmpty()
    @IsNumber()
    deparment_id: number;

    @IsNotEmpty()
    @IsNumber()
    active: boolean;
}
