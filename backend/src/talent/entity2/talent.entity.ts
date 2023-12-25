import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'talent' })
export class TalentEntity {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @Column({ type: 'numeric' })
  name: number;

  @Column({ type: 'varchar' })
  email: string;

  @Column({ type: 'varchar' })
  status: string;

  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;
}
