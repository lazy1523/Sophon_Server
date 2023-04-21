import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Unique,
} from 'typeorm';

@Entity('sceneCollaborator')
@Unique('IDX_394e49598314d97dd850d02274', ['sceneCode'])
export class SceneCollaborator {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @CreateDateColumn({ type: 'timestamp', precision: 6, default: () => 'CURRENT_TIMESTAMP(6)' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp', precision: 6, default: () => 'CURRENT_TIMESTAMP(6)', onUpdate: 'CURRENT_TIMESTAMP(6)' })
  updated_at: Date;

  @Column({ type: 'timestamp', precision: 6, nullable: true })
  deleted_at: Date;

  @Column({ type: 'bigint', nullable: true })
  sceneId: number;

  @Column({ type: 'varchar', length: 128 })
  sceneCode: string;

  @Column({ type: 'varchar', length: 128 })
  wallet: string;

  @Column({ type: 'varchar', length: 128, default: '' })
  sentientLang: string;

  @Column({ type: 'bigint' })
  playerID: number;
}

