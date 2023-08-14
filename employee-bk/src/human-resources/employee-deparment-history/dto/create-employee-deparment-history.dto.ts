import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateEmployeeDeparmentHistoryDto {
    @IsNotEmpty()
    @IsNumber()
    employee_id: number;

    @IsNotEmpty()
    @IsNumber()
    deparment_id: number;
}
