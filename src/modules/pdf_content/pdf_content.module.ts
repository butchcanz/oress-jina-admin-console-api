import { Module } from '@nestjs/common';
import { PdfContentService } from './pdf_content.service';
import { PdfContentController } from './pdf_content.controller';

@Module({
  controllers: [PdfContentController],
  providers: [PdfContentService],
})
export class PdfContentModule {}
