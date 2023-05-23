// like.entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

@Entity('like')
export class Like {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({ type: 'timestamp', precision: 6 })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp', precision: 6 })
  updated_at: Date;

  @DeleteDateColumn({ type: 'timestamp', precision: 6, nullable: true })
  deleted_at: Date;

  @Column({ type: 'varchar', length: 42, default: '' })
  wallet: string;

  @Column({ type: 'bigint' })
  user_id: number;

  @Column({ type: 'tinyint', default: 1 })
  status: number;

  @Column({ type: 'bigint' })
  scene_id: number;
}
