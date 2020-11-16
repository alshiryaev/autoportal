import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { DetailsController } from './modules/details/details.controller';
import { DetailsService } from './modules/details/services/details.service';

@Module({
  imports: [],
  controllers: [AppController, DetailsController],
  providers: [DetailsService],
})
export class AppModule {}
