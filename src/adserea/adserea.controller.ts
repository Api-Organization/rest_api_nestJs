import { AccessTokenGuard } from '@/common/guards/accessToken.guard';
import { PermissionGuard } from '@/common/guards/permission.guard';
import { Controller, Post, Query, Req, UseGuards } from '@nestjs/common';
import { AdsereaService } from './adserea.service';

@Controller('adserea')
export class AdsereaController {
  constructor(private readonly adsereaService: AdsereaService) {}

  @UseGuards(AccessTokenGuard, PermissionGuard(['get_adserea']))
  @Post()
  async getAdserea(@Query() query: { [key: string]: string }, @Req() req: any) {
    return this.adsereaService.getPage(req._parsedUrl.query);
  }
}
