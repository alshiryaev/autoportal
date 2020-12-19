import { getRepository, MigrationInterface, QueryRunner } from 'typeorm';
import { DetailEntity } from '../entities/detail.entity';

export class details1607871696884 implements MigrationInterface {
  name = 'details1607871696884';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "details" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "price" integer NOT NULL, "description" character varying, CONSTRAINT "PK_02185da47c073158a934d3927dd" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "details"`);
  }
}
