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
import { NotesService } from './notes.service';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { PermissionGuard } from '@/common/guards/permission.guard';
import { AccessTokenGuard } from '@/common/guards/accessToken.guard';

@Controller('notes')
export class NotesController {
  constructor(private readonly notesService: NotesService) {}

  @UseGuards(AccessTokenGuard, PermissionGuard(['create_notes']))
  @Post()
  create(@Body() createNoteDto: CreateNoteDto) {
    return this.notesService.create(createNoteDto);
  }

  @UseGuards(AccessTokenGuard, PermissionGuard(['get_notes']))
  @Get()
  findAll() {
    return this.notesService.findAll();
  }

  @UseGuards(AccessTokenGuard, PermissionGuard(['get_notes']))
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.notesService.findOne(id);
  }

  @UseGuards(AccessTokenGuard, PermissionGuard(['update_notes']))
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNoteDto: UpdateNoteDto) {
    return this.notesService.update(id, updateNoteDto);
  }

  @UseGuards(AccessTokenGuard, PermissionGuard(['delete_notes']))
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.notesService.remove(id);
  }
}
