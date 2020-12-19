import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { AppController } from './app.controller';
import { DetailsModule } from './modules/details/details.module';
@Module({
  imports: [TypeOrmModule.forRoot(), DetailsModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
