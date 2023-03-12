import { AccessTokenGuard } from '@/common/guards/accessToken.guard';
import { PermissionGuard } from '@/common/guards/permission.guard';
import {
  Controller,
  Get,
  Post,
  Query,
  Req,
  Request,
  UseGuards,
} from '@nestjs/common';
import { Throttle } from '@nestjs/throttler';
import { AdheartService } from './adheart.service';

@Controller('adheart')
export class AdheartController {
  constructor(private readonly adheartService: AdheartService) {}

  @UseGuards(AccessTokenGuard, PermissionGuard(['get_adheart']))
  @Post()
  @Throttle(200, 60)
  async getAdheart(@Query() query: { [key: string]: string }, @Req() req: any) {
    return this.adheartService.getPage(req._parsedUrl.query);
  }
}
