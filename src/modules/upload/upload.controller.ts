import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile, ParseFilePipeBuilder } from '@nestjs/common';
import { UploadService } from './upload.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBody, ApiConsumes } from '@nestjs/swagger';

@Controller('upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}

  @Post('upload')
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    const imagePath = await this.uploadService.uploadFile(file);
    return { data: imagePath };
  }


  // @UseInterceptors(FileInterceptor('file'))
  // uploadFile(@UploadedFile() file: Express.Multer.File) {
  // console.log(file);

  // }
  // @Post()
  // create(@Body() createUploadDto: CreateUploadDto) {
  //   return this.uploadService.create(createUploadDto);
  // }

  // @Get()
  // findAll() {
  //   return this.uploadService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.uploadService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateUploadDto: UpdateUploadDto) {
  //   return this.uploadService.update(+id, updateUploadDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.uploadService.remove(+id);
  // }
}
