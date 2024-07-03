import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class PdfContent {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    pdf_file_name: string;

    @Column()
    pdf_file_url: string;

    @Column()
    is_trained: boolean;
}
