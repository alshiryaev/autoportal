import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DetailEntity } from 'src/server/database/entities/detail.entity';
import { DetailsController } from './controllers/details.controller';
import { DetailsService } from './services/details.service';

@Module({
  controllers: [DetailsController],
  providers: [DetailsService],
  imports: [TypeOrmModule.forFeature([DetailEntity])],
})
export class DetailsModule {}
