import { Injectable } from '@nestjs/common';
import { CreateDeparmentDto } from './dto/create-deparment.dto';
import { UpdateDeparmentDto } from './dto/update-deparment.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Deparment } from './entities/deparment.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DeparmentService {

  constructor(
    @InjectRepository(Deparment)
    private readonly deparmentRepository: Repository<Deparment>,
  ) {}

  findAll() {
    return this.deparmentRepository.find({
      select: {
        deparment_id: true,
        description: true,
      },
      where: {
        active: 1,
      }
    })
  }
}
