import { Module } from '@nestjs/common';
import { DeparmentService } from './deparment.service';
import { DeparmentController } from './deparment.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Deparment } from './entities/deparment.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Deparment])],
  controllers: [DeparmentController],
  providers: [DeparmentService]
})
export class DeparmentModule {}
