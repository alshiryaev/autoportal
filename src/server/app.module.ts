import { Module } from '@nestjs/common';
import { DetailsController } from './modules/details/details.controller';
import { DetailsService } from './modules/details/services/details.service';

@Module({
  imports: [],
  controllers: [DetailsController],
  providers: [DetailsService],
})
export class AppModule {}
