import { Injectable } from '@nestjs/common';
import { CreateDeparmentDto } from './dto/create-deparment.dto';
import { UpdateDeparmentDto } from './dto/update-deparment.dto';

@Injectable()
export class DeparmentService {
  create(createDeparmentDto: CreateDeparmentDto) {
    return 'This action adds a new deparment';
  }

  findAll() {
    return `This action returns all deparment`;
  }

  findOne(id: number) {
    return `This action returns a #${id} deparment`;
  }

  update(id: number, updateDeparmentDto: UpdateDeparmentDto) {
    return `This action updates a #${id} deparment`;
  }

  remove(id: number) {
    return `This action removes a #${id} deparment`;
  }
}
