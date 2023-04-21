import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('player_follow')
export class PlayerFollow {
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

  @Column({ type: 'varchar', length: 42, default: '' })
  followed_address: string;

  @Column({ type: 'varchar', length: 42 })
  address: string;

  @Column({ type: 'int' })
  player_id: number;

  @Column({ type: 'int', default: 0 })
  status: number;

  @Column({ type: 'int' })
  followed_user_id: number;
}
