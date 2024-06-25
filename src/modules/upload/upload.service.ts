import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateUploadDto } from './dto/create-upload.dto';
import { UpdateUploadDto } from './dto/update-upload.dto';
import { Observable } from 'rxjs';
import { ConfigService } from '@nestjs/config';
import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';

@Injectable()


export class UploadService {

  private s3Client: S3Client;
  private bucketName: string;
  constructor(private readonly configService: ConfigService) {

    this.bucketName = this.configService.get<string>('BUCKET_NAME');
    this.s3Client = new S3Client({
      region: this.configService.get<string>('REGION'),
      credentials: {
        accessKeyId: this.configService.get<string>('ACCESS_KEY_ID'),
        secretAccessKey: this.configService.get<string>('SECRET_ACCESS_KEY'),
      },
    });
  }

  async uploadFile(file: Express.Multer.File): Promise<string> {
    if (!file) {
      throw new BadRequestException('No image uploaded');
    }

    const FOLDER_NAME = 'Content';
    const params = {
      Bucket: this.bucketName,
      Key: `${FOLDER_NAME}/${file.originalname}`,
      Body: file.buffer,
      ContentType: file.mimetype,
    };

    const command = new PutObjectCommand(params);
    const results = await this.s3Client.send(command);

    if (results.$metadata.httpStatusCode === 200) {
      return `https://${params.Bucket}.s3.amazonaws.com/${FOLDER_NAME}/${file.originalname}`;
    } else {
      throw new InternalServerErrorException('Failed to upload image');
    }
  }

  // intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
  //   const req = context.switchToHttp().getRequest();
  //   req.file['comment'] = req.body.comment;
  //   req.file['outletId'] = Number(req.body.outletId);
  //   return next.handle();
  // }
//   create(createUploadDto: CreateUploadDto) {
//     return 'This action adds a new upload';
//   }

//   findAll() {
//     return `This action returns all upload`;
//   }

//   findOne(id: number) {
//     return `This action returns a #${id} upload`;
//   }

//   update(id: number, updateUploadDto: UpdateUploadDto) {
//     return `This action updates a #${id} upload`;
//   }

//   remove(id: number) {
//     return `This action removes a #${id} upload`;
//   }
}
