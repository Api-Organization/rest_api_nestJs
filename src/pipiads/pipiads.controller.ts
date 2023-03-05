import { AccessTokenGuard } from '@/common/guards/accessToken.guard';
import { Controller, HttpCode, Post, Query, Req, UseGuards } from '@nestjs/common';
import { PipiadsService } from './pipiads.service';

@Controller('pipiads')
export class PipiadsController {
  constructor(private readonly pipiadsService: PipiadsService) {}

  @UseGuards(AccessTokenGuard)
  @Post()
  @HttpCode(200)
  async getPipiadsTiktok(
    @Query() query: { [key: string]: string },
    @Req() req: any,
  ) {
    return this.pipiadsService.getPageTiktok(req._parsedUrl.query);
  }

  @UseGuards(AccessTokenGuard)
  @Post('product')
  @HttpCode(200)
  async getPipiadsProductSearch(
    @Query() query: { [key: string]: string },
    @Req() req: any,
  ) {
    return this.pipiadsService.getPageProductSearch(req._parsedUrl.query);
  }
  @UseGuards(AccessTokenGuard)
  @Post('product/winning')
  @HttpCode(200)
  async getPipiadsProductWinning(
    @Query() query: { [key: string]: string },
    @Req() req: any,
  ) {
    return this.pipiadsService.getPageProductWinning(req._parsedUrl.query);
  }
  @UseGuards(AccessTokenGuard)
  @Post('advertiser')
  @HttpCode(200)
  async getPipiadsAdvertiser(
    @Query() query: { [key: string]: string },
    @Req() req: any,
  ) {
    return this.pipiadsService.getPageAdvertiser(req._parsedUrl.query);
  }
}
