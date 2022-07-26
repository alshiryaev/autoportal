import { Module } from '@nestjs/common';
import { DatabaseModule } from './modules/database/database.module';
import { DetailsModule } from './modules/details/details.module';
@Module({
  imports: [DatabaseModule, DetailsModule],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor() {}
}
