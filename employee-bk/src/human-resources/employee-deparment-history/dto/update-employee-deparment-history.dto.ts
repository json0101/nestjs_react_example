import { PartialType } from '@nestjs/mapped-types';
import { CreateEmployeeDeparmentHistoryDto } from './create-employee-deparment-history.dto';

export class UpdateEmployeeDeparmentHistoryDto extends PartialType(CreateEmployeeDeparmentHistoryDto) {}
