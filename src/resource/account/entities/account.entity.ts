import { Role } from 'src/resource/role/role.enum';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Account {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;
  @Column({ type: 'character varying', nullable: true })
  first_name?: string;
  @Column({ type: 'character varying', nullable: true })
  last_name: string;
  @Column({ type: 'character varying' })
  login: string;
  @Column({ type: 'character varying' })
  email: string;
  @Column({ type: 'character varying', nullable: true })
  lang_key?: string;
  @Column({ type: 'bytea', nullable: true })
  image_url?: any;
  @Column({ type: 'boolean', nullable: true })
  activated?: boolean;
  @Column({ type: 'enum', enum: Role, array: true, nullable: true })
  authorities?: Role[];
}
