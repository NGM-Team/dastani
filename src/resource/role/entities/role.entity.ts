import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Role {
  @PrimaryGeneratedColumn({ type: 'integer' })
  id: number;
  @Column({ type: 'character varying' })
  name: string;
}
