import { Injectable } from '@nestjs/common';
import { Detail } from 'src/common/detail.model';
import { v4 } from 'uuid';

@Injectable()
export class DetailsService {
  getDetails(): Detail[] {
    return [
      {
        id: v4(),
        name: 'H4 Osram AllSeasons',
        price: 800,
        number: 4,
      },
      {
        id: v4(),
        name: 'H1 Маяк',
        price: 400,
        number: 2,
      },
      {
        id: v4(),
        name: 'Дворники всесезонные',
        price: 800,
        number: 4,
      },
      {
        id: v4(),
        name: 'Дворники летние',
        price: 900,
        number: 5,
      },
    ];
  }
}
