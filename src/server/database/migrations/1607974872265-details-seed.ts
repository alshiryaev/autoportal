import { getRepository, MigrationInterface, QueryRunner } from 'typeorm';
import { DetailEntity } from '../entities/detail.entity';
import { v4 } from 'uuid';

export class detailsSeed1607974872265 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
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
    // await getRepository(DetailEntity).save(details);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
