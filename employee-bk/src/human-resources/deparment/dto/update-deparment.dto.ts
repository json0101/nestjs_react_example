import { PartialType } from '@nestjs/mapped-types';
import { CreateDeparmentDto } from './create-deparment.dto';

export class UpdateDeparmentDto extends PartialType(CreateDeparmentDto) {}
