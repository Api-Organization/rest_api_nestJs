import { Injectable } from '@nestjs/common';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { PrismaService } from '@/prisma/prisma.service';

@Injectable()
export class NotesService {
  constructor(private readonly PrismaService: PrismaService) {}

  create(createNoteDto: CreateNoteDto) {
    return this.PrismaService.notes.create({
      data: createNoteDto,
    });
  }

  async findAll() {
    const notes = await this.PrismaService.notes.findMany();
    console.log(notes)
    return notes;
  }

  findOne(id: string) {
    return this.PrismaService.notes.findUnique({
      where: { id },
    });
  }

  update(id: string, updateNoteDto: UpdateNoteDto) {
    return this.PrismaService.notes.update({
      where: { id },
      data: updateNoteDto,
    });
  }

  remove(id: string) {
    return this.PrismaService.notes.delete({
      where: { id },
    });
  }
}
