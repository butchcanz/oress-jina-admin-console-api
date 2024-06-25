import { Test, TestingModule } from '@nestjs/testing';
import { PdfContentController } from './pdf_content.controller';
import { PdfContentService } from './pdf_content.service';

describe('PdfContentController', () => {
  let controller: PdfContentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PdfContentController],
      providers: [PdfContentService],
    }).compile();

    controller = module.get<PdfContentController>(PdfContentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
