import { Test, TestingModule } from '@nestjs/testing';
import { DeparmentController } from './deparment.controller';
import { DeparmentService } from './deparment.service';

describe('DeparmentController', () => {
  let controller: DeparmentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DeparmentController],
      providers: [DeparmentService],
    }).compile();

    controller = module.get<DeparmentController>(DeparmentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
