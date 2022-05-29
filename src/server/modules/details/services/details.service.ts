import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DetailEntity } from '../../../database/entities/detail.entity';
import { Repository } from 'typeorm';
import { v4 } from 'uuid';
@Injectable()
export class DetailsService {
  constructor(
    @InjectRepository(DetailEntity)
    private readonly detailRepository: Repository<DetailEntity>,
  ) {}

  getDetails(): Promise<DetailEntity[]> {
    return this.detailRepository.find();
  }

  addDetail(detail: DetailEntity): Promise<DetailEntity> {
    return this.detailRepository.save(detail);
  }

  async deleteDetail(id: string) {
    const detail = await this.detailRepository.findByIds([id]);
    return this.detailRepository.remove(detail);
  }

  seedDetails(): Promise<DetailEntity[]> {
    const details = [
      {
        id: v4(),
        name: 'H4 Osram AllSeasons',
        price: 800,
      },
      {
        id: v4(),
        name: 'H1 Маяк',
        price: 400,
      },
      {
        id: v4(),
        name: 'Дворники всесезонные',
        price: 800,
      },
      {
        id: v4(),
        name: 'Дворники летние',
        price: 900,
      },
    ];
    return this.detailRepository.save(details);
  }
}
