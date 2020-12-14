import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DetailEntity } from 'src/server/database/entities/detail.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DetailsService {
  constructor(
    @InjectRepository(DetailEntity)
    private readonly detailRepository: Repository<DetailEntity>,
  ) {}

  getDetails(): Promise<[DetailEntity[], number]> {
    return this.detailRepository.findAndCount();
  }
}
