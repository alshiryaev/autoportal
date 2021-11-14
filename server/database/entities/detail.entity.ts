import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { v4 } from 'uuid';

@Entity({ name: 'details' })
export class DetailEntity {
  constructor() {
    this.id = v4();
  }

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column()
  description?: string;
}
