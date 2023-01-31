import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ReviewersService } from './reviewers.service';
import { CreateReviewerDto } from './dto/create-reviewer.dto';
import { UpdateReviewerDto } from './dto/update-reviewer.dto';
import { PermissionGuard } from '@/common/guards/permission.guard';
import { AccessTokenGuard } from '@/common/guards/accessToken.guard';

@Controller('reviewers')
export class ReviewersController {
  constructor(private readonly reviewersService: ReviewersService) {}

  @UseGuards(AccessTokenGuard, PermissionGuard(['create_reviewers']))
  @Post()
  create(@Body() createReviewerDto: CreateReviewerDto) {
    return this.reviewersService.create(createReviewerDto);
  }

  @Get()
  findAll() {
    return this.reviewersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reviewersService.findOne(id);
  }

  @UseGuards(AccessTokenGuard, PermissionGuard(['update_reviewers']))
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateReviewerDto: UpdateReviewerDto,
  ) {
    return this.reviewersService.update(id, updateReviewerDto);
  }

  @UseGuards(AccessTokenGuard, PermissionGuard(['delete_reviewers']))
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reviewersService.remove(id);
  }
}
