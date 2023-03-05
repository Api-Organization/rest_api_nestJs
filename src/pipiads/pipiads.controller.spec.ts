import { Test, TestingModule } from '@nestjs/testing';
import { PipiadsController } from './pipiads.controller';
import { PipiadsService } from './pipiads.service';

describe('PipiadsController', () => {
  let controller: PipiadsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PipiadsController],
      providers: [PipiadsService],
    }).compile();

    controller = module.get<PipiadsController>(PipiadsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
