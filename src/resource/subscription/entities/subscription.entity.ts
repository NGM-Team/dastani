import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Subscription {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;
  @Column({ type: 'character varying' })
  name: string;
  @Column({ type: 'integer', nullable: true })
  subscription_type?: number;
  @Column({ type: 'double precision', nullable: true })
  additional_price?: number;
  @Column({ type: 'double precision', nullable: true })
  total_price?: number;
  @Column({ type: 'boolean', nullable: true })
  is_start?: boolean;
  @Column({ type: 'timestamp with time zone', nullable: true })
  start_date?: any;
  @Column({ type: 'boolean', nullable: true })
  is_expired?: boolean;
  @Column({ type: 'timestamp with time zone', nullable: true })
  expired_date?: any;
  @Column({ type: 'bigint', nullable: true })
  user?: number;
}
