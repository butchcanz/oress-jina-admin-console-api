import { PartialType } from '@nestjs/mapped-types';
import { CreatePdfContentDto } from './create-pdf_content.dto';

export class UpdatePdfContentDto extends PartialType(CreatePdfContentDto) {}
