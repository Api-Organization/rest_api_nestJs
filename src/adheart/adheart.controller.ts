import { Controller, Get, Query } from '@nestjs/common';
import { AdheartService } from './adheart.service';

@Controller('adheart')
export class AdheartController {
  constructor(private readonly adheartService: AdheartService) {}

  @Get()
  async getAdheart(@Query() query: { [key: string]: string }) {
    return this.adheartService.getPage(query);
  }
}
