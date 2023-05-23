// game-completion.entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

@Entity('game_completion')
export class GameCompletion {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({ type: 'timestamp', precision: 6 })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp', precision: 6 })
  updated_at: Date;

  @DeleteDateColumn({ type: 'timestamp', precision: 6, nullable: true })
  deleted_at: Date;

  @Column({ type: 'varchar', length: 50 })
  player_name: string;

  @Column({ type: 'varchar', length: 128 })
  player_id: string;

  @Column({ type: 'varchar', length: 50 })
  game_scene_name: string;

  @Column({ type: 'varchar', length: 128 })
  game_scene_id: string;

  @Column({ type: 'varchar', length: 128 })
  start_time: string;

  @Column({ type: 'varchar', length: 128, default: '' })
  completion_time: string;

  @Column({ type: 'int', default: 0 })
  duration: number;

  @Column({ type: 'int', default: 0 })
  score: number;
}
