import { Module } from '@nestjs/common';
import { DeparmentService } from './deparment.service';
import { DeparmentController } from './deparment.controller';
import { InjectRepository, TypeOrmModule } from '@nestjs/typeorm';
import { Deparment } from './entities/deparment.entity';
import { Repository } from 'typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Deparment])],
  controllers: [DeparmentController],
  providers: [DeparmentService],
  exports: [DeparmentService],
})
export class DeparmentModule {}
