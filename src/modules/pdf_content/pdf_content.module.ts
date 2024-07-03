import { Module } from '@nestjs/common';
import { PdfContentService } from './pdf_content.service';
import { PdfContentController } from './pdf_content.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PdfContent } from './entities/pdf_content.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PdfContent])],
  exports: [TypeOrmModule, PdfContentService],
  controllers: [PdfContentController],
  providers: [PdfContentService],
})
export class PdfContentModule {}
