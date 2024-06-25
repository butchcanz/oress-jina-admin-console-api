import { Injectable } from '@nestjs/common';
import { CreatePdfContentDto } from './dto/create-pdf_content.dto';
import { UpdatePdfContentDto } from './dto/update-pdf_content.dto';

@Injectable()
export class PdfContentService {
  create(createPdfContentDto: CreatePdfContentDto) {
    return 'This action adds a new pdfContent';
  }

  findAll() {
    return `This action returns all pdfContent`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pdfContent`;
  }

  update(id: number, updatePdfContentDto: UpdatePdfContentDto) {
    return `This action updates a #${id} pdfContent`;
  }

  remove(id: number) {
    return `This action removes a #${id} pdfContent`;
  }
}
