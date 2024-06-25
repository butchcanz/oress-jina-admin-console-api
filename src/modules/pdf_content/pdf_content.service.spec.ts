import { Test, TestingModule } from '@nestjs/testing';
import { PdfContentService } from './pdf_content.service';

describe('PdfContentService', () => {
  let service: PdfContentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PdfContentService],
    }).compile();

    service = module.get<PdfContentService>(PdfContentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
