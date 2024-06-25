import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PdfContentService } from './pdf_content.service';
import { CreatePdfContentDto } from './dto/create-pdf_content.dto';
import { UpdatePdfContentDto } from './dto/update-pdf_content.dto';

@Controller('pdf-content')
export class PdfContentController {
  constructor(private readonly pdfContentService: PdfContentService) {}

  @Post()
  create(@Body() createPdfContentDto: CreatePdfContentDto) {
    return this.pdfContentService.create(createPdfContentDto);
  }

  @Get()
  findAll() {
    return this.pdfContentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pdfContentService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePdfContentDto: UpdatePdfContentDto) {
    return this.pdfContentService.update(+id, updatePdfContentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pdfContentService.remove(+id);
  }
}
