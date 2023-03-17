import { EntityHelper } from 'src/utils/entity-helper';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

export enum WaitListStatus {
  WAITING = 'waiting',
  NOTIFIED = 'notified',
  CANCELED = 'canceled',
}

@Entity('waitlist')
export class WaitList extends EntityHelper {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255, unique: true, nullable: false })
  email: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  @Column({
    type: 'enum',
    enum: WaitListStatus,
    default: WaitListStatus.WAITING,
  })
  status: WaitListStatus;
}
