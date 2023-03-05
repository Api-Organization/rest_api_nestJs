import { Test, TestingModule } from '@nestjs/testing';
import { PipiadsService } from './pipiads.service';

describe('PipiadsService', () => {
  let service: PipiadsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PipiadsService],
    }).compile();

    service = module.get<PipiadsService>(PipiadsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
