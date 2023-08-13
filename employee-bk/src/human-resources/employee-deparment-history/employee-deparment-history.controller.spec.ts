import { Test, TestingModule } from '@nestjs/testing';
import { EmployeeDeparmentHistoryController } from './employee-deparment-history.controller';
import { EmployeeDeparmentHistoryService } from './employee-deparment-history.service';

describe('EmployeeDeparmentHistoryController', () => {
  let controller: EmployeeDeparmentHistoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmployeeDeparmentHistoryController],
      providers: [EmployeeDeparmentHistoryService],
    }).compile();

    controller = module.get<EmployeeDeparmentHistoryController>(EmployeeDeparmentHistoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
