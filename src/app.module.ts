import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';
import { Presensi } from './entities/presensi.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { datasourceOption } from 'db/data-source';

@Module({
  imports: [TypeOrmModule.forRoot(datasourceOption), ConfigModule.forRoot(), HttpModule, TypeOrmModule.forFeature([Presensi])],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
