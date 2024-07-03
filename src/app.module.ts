import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './modules/users/users.module';
import { PdfContentModule } from './modules/pdf_content/pdf_content.module';
import { DataSource } from 'typeorm';
import { User } from './modules/users/entities/user.entity';
import { UploadModule } from './modules/upload/upload.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthModule } from './modules/auth/auth.module';
import typeorm from './config/typeorm';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: '.env',
    load: [typeorm]
  }),
    TypeOrmModule.forRootAsync({
     inject: [ConfigService],
     useFactory: async (configService: ConfigService) => (configService.get('typeorm'))
    }),
    UsersModule,
    PdfContentModule,
    UploadModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}