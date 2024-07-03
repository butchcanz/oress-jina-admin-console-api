import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePdfContentDto } from './dto/create-pdf_content.dto';
import { UpdatePdfContentDto } from './dto/update-pdf_content.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { PdfContent } from './entities/pdf_content.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PdfContentService {
  constructor(
    @InjectRepository(PdfContent)
    private pdfContentRepository: Repository<PdfContent>,
  ) {}

  async create(createPdfContentDto: CreatePdfContentDto): Promise<PdfContent> {
    const { pdf_file_name, pdf_file_url, is_trained } = createPdfContentDto;

    const pdfContent = new PdfContent();
    pdfContent.pdf_file_name = pdf_file_name;
    pdfContent.pdf_file_url = pdf_file_url;
    pdfContent.is_trained = is_trained;

    return this.pdfContentRepository.save(pdfContent);
  }
  findAll() {
    return this.pdfContentRepository.find();
  }

  findOne(id: number) {
    return this.pdfContentRepository.findOneBy({ id });
  }

  async update(id: number, updatePdfContentDto: UpdatePdfContentDto): Promise<PdfContent>{
    const pdfContent = await this.pdfContentRepository.preload({
      id: id,
      ...updatePdfContentDto,
    });
    if (!pdfContent) {
      throw new NotFoundException(`PdfContent with ID ${id} not found`);
    }
    return this.pdfContentRepository.save(pdfContent);
  }

  remove(id: number) {
    return this.pdfContentRepository.delete(id);
  }
}
