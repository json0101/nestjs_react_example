import { ApiProperty } from "@nestjs/swagger";

export class CreateDeparmentDto {
    @ApiProperty({description: "Description of the deparment"})
    description: string;
}
