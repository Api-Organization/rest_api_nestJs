import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  ParseFilePipe,
  UploadedFiles,
  BadRequestException,
} from '@nestjs/common';
import { FilesService } from './files.service';
import { CreateFileDto } from './dto/create-file.dto';
import { UpdateFileDto } from './dto/update-file.dto';
import { FilesInterceptor } from '@nestjs/platform-express';
import * as sftpStorage from 'multer-sftp';

@Controller('upload')
export class FilesController {
  constructor(private readonly filesService: FilesService) {}

  @Post('')
  @UseInterceptors(
    FilesInterceptor('files', 10, {
      limits: {
        fileSize: 1024 * 1024 * 5,
      },
      storage: sftpStorage({
        sftp: {
          host: '185.211.7.234',
          port: 65002,
          username: 'u207214654',
          password: '@Souumbbk1',
        },
        destination: (req, file, cb) => {
          cb(null, 'domains/adheart.com.br/public_html/uploads');
        },
        filename: function (req, file, cb) {
          if (
            file.mimetype == 'image/png' ||
            file.mimetype == 'image/jpg' ||
            file.mimetype == 'image/jpeg'
          ) {
            const fileName = file.originalname
              .toLowerCase()
              .split(' ')
              .join('-');
            const originalname = fileName.split('.');

            const nameFile = Date.now() + '.' + originalname[1];
            cb(null, nameFile);
          } else {
            cb(null, file.originalname);
            return cb(
              new BadRequestException('Something bad happened', {
                cause: new Error(),
                description: 'Some error in your upload file extension',
              }),
              '',
            );
          }
        },
      }),
    }),
  )
  uploadFile(
    @UploadedFiles(
      new ParseFilePipe({
        fileIsRequired: true,
      }),
    )
    files: Array<Express.Multer.File>,
  ) {
    return this.filesService.create(files);
  }

  @Get()
  findAll() {
    return this.filesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.filesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFileDto: UpdateFileDto) {
    return this.filesService.update(id, updateFileDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.filesService.remove(id);
  }
}
