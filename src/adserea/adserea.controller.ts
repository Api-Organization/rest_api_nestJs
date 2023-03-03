import { AccessTokenGuard } from '@/common/guards/accessToken.guard';
import { PermissionGuard } from '@/common/guards/permission.guard';
import { Controller, Param, Post, Query, Req, UseGuards } from '@nestjs/common';
import { AdsereaService } from './adserea.service';

@Controller('adserea')
export class AdsereaController {
  constructor(private readonly adsereaService: AdsereaService) {}

  @UseGuards(AccessTokenGuard)
  @Post()
  async getAdsereaHome(
    @Query() query: { [key: string]: string },
    @Req() req: any,
  ) {
    return this.adsereaService.getPageHome(req._parsedUrl.query);
  }

  @UseGuards(AccessTokenGuard)
  @Post('details/:id')
  async getAdsereaDetails(@Param('id') id: string) {
    return this.adsereaService.getPageDetails(id);
  }

  @UseGuards(AccessTokenGuard)
  @Post('live')
  async getAdsereaLive(){
    return this.adsereaService.getPageLive();
  }
}
