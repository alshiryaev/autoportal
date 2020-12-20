import { Module } from '@nestjs/common';
import { Connection } from 'typeorm';
import { AppController } from './app.controller';
import { DatabaseModule } from './modules/database/database.module';
import { DetailsModule } from './modules/details/details.module';
@Module({
  imports: [DatabaseModule, DetailsModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
