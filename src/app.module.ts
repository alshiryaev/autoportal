import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DetailsController } from './details/details.controller';

@Module({
  imports: [],
  controllers: [AppController, DetailsController],
  providers: [AppService],
})
export class AppModule {}
