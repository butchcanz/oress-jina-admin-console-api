import { ApiProperty } from "@nestjs/swagger";

export class CreatePdfContentDto {
    @ApiProperty()
    pdf_file_name: string;

    @ApiProperty()
    pdf_file_url: string;
    
    @ApiProperty({ default: false })
    is_trained: boolean;
}
