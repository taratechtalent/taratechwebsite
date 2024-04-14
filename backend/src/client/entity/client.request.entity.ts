import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
  PrimaryGeneratedColumn,
  ManyToOne,
} from 'typeorm';
import { ClientRequestStatus } from '../enum/client.enum';
import { ClientEntity } from './client.entity';

@Entity({ name: 'client_request' })
export class ClientRequestEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  uuid: string;

  @ManyToOne(() => ClientEntity)
  client: ClientEntity;

  @Column({
    type: 'varchar',
    nullable: true,
    default: ClientRequestStatus.OPEN,
  })
  status: ClientRequestStatus;

  @Column({ type: 'varchar', nullable: true })
  request: string;

  @Column({ type: 'varchar', nullable: true })
  result: string;

  @Column({ type: 'timestamptz', nullable: true })
  finish_date: Date;

  @Column({ type: 'varchar', nullable: true })
  talents: string;

  @Column({ type: 'timestamptz', nullable: true })
  meeting_date: Date;

  @Column({ type: 'varchar', nullable: true })
  meeting_description: string;

  @Column({ type: 'timestamptz', nullable: true })
  meeting_date_second: Date;

  @Column({ type: 'varchar', nullable: true })
  meeting_description_second: string;

  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;
}
