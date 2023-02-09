import { AccessTokenGuard } from '@/common/guards/accessToken.guard';
import { PermissionGuard } from '@/common/guards/permission.guard';
import {
  Controller,
  Get,
  Query,
  Req,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AdheartService } from './adheart.service';

@Controller('adheart')
export class AdheartController {
  constructor(private readonly adheartService: AdheartService) {}

  @UseGuards(AccessTokenGuard, PermissionGuard(['get_adheart']))
  @Get()
  async getAdheart(@Query() query: { [key: string]: string }, @Req() req: any) {
    return this.adheartService.getPage(req._parsedUrl.query);
  }
}
