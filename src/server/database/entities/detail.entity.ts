import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'details' })
export class DetailEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column()
  description: string;
}
