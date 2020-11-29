import { Module } from '@nestjs/common';
import { DetailsController } from './controllers/details.controller';
import { DetailsService } from './services/details.service';

@Module({
  controllers: [DetailsController],
  providers: [DetailsService],
})
export class DetailsModule {}
