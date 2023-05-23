import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('reply')
export class Reply {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({
    type: 'timestamp',
    precision: 6,
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  created_at: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    precision: 6,
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  updated_at: Date;

  @Column({ type: 'timestamp', precision: 6, nullable: true })
  deleted_at: Date;

  @Column({ type: 'bigint' })
  comment_Id: number;

  @Column({ type: 'bigint', nullable: true })
  reply_id: number;

  @Column({ type: 'bigint' })
  user_id: number;

  @Column({ type: 'varchar', length: 42, default: '' })
  wallet: string;

  @Column({ type: 'varchar', length: 255 })
  content: string;
}
