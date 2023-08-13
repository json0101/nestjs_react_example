import { Test, TestingModule } from '@nestjs/testing';
import { EmployeeDeparmentHistoryService } from './employee-deparment-history.service';

describe('EmployeeDeparmentHistoryService', () => {
  let service: EmployeeDeparmentHistoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmployeeDeparmentHistoryService],
    }).compile();

    service = module.get<EmployeeDeparmentHistoryService>(EmployeeDeparmentHistoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
