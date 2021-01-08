import { Body, Controller, Get, Post, Delete, Param } from '@nestjs/common';
import { DetailEntity } from '../../../database/entities/detail.entity';
import { DetailsService } from '../services/details.service';

@Controller('api/details')
export class DetailsController {
  constructor(private detailsService: DetailsService) {}

  @Get()
  getDetails() {
    return this.detailsService.getDetails();
  }
  @Post('seed')
  seedDetails() {
    return this.detailsService.seedDetails();
  }

  @Post()
  addDetail(@Body() detail: DetailEntity) {
    return this.detailsService.addDetail(detail);
  }
  @Delete(':id')
  deleteDetail(@Param('id') id: string) {
    return this.detailsService.deleteDetail(id);
  }
}
