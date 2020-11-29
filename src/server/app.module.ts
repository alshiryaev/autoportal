import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { DetailsModule } from './modules/details/details.module';
@Module({
  imports: [DetailsModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
