import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
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
  @Column({ type: 'character varying' })
  password: string;
  @Column({ type: 'character varying', nullable: true })
  lang_key?: string;
  @Column({ type: 'character varying' })
  created_by: string;
  @Column({ type: 'timestamp with time zone' })
  created_date: any;
  @Column({ type: 'character varying', nullable: true })
  last_modified_by?: string;
  @Column({ type: 'timestamp with time zone', nullable: true })
  last_modified_date?: any;
  @Column({ type: 'bytea', nullable: true })
  image_url?: any;
  @Column({ type: 'integer', array: true, nullable: true })
  authorities?: string[];
  @Column({ type: 'boolean', nullable: true })
  activated?: boolean;
}
