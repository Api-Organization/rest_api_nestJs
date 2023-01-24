import { PrismaService } from '@/prisma/prisma.service';
import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateFileDto } from './dto/create-file.dto';
import { UpdateFileDto } from './dto/update-file.dto';
import Client from 'ssh2-sftp-client';

@Injectable()
export class FilesService {
  constructor(private readonly PrismaService: PrismaService) {}

  create(createFileDto: CreateFileDto) {
    createFileDto.map((file) => {
      return this.PrismaService.files.create({
        data: {
          link: file.path,
        },
      });
    });
  }

  findAll() {
    return this.PrismaService.files.findMany();
  }

  findOne(id: string) {
    return this.PrismaService.files.findUnique({ where: { id } });
  }

  update(id: string, updateFileDto: UpdateFileDto) {
    return this.PrismaService.files.update({
      where: { id },
      data: {
        link: updateFileDto.link,
      },
    });
  }

  async remove(id: string) {
    const sftp = new Client();

    const photo = await this.PrismaService.files.findUnique({ where: { id } });

    const removeHttps = photo.link.replace('https://www.', '');

    const path = removeHttps.replace(
      'adheart.com.br',
      'adheart.com.br/public_html',
    );

    const connect = await sftp.connect({
      host: '185.211.7.234',
      port: 65002,
      username: 'u207214654',
      password: '@Souumbbk1',
    });

    const deleteFile = await sftp.delete(`domains/${path}`);

    if (deleteFile) {
      try {
        return this.PrismaService.files.delete({ where: { id } });
      } catch (e) {
        throw new BadRequestException('Something bad happened', {
          cause: new Error(),
          description: 'could not delete the file',
        });
      }
    }
  }
}
