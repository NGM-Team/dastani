import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class SubscriptionType {
  @PrimaryGeneratedColumn({ type: 'integer' })
  id: number;
  @Column({ type: 'character varying' })
  name: string;
  @Column({ type: 'double precision' })
  price: number;
}
