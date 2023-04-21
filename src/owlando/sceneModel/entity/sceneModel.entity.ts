import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Unique,
} from 'typeorm';

@Entity('sceneModel')
@Unique('IDX_a58650aa19bed502a411d85676', ['sceneCode', 'modelName'])
export class SceneModel {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @CreateDateColumn({ type: 'timestamp', precision: 6, default: () => 'CURRENT_TIMESTAMP(6)' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp', precision: 6, default: () => 'CURRENT_TIMESTAMP(6)', onUpdate: 'CURRENT_TIMESTAMP(6)' })
  updated_at: Date;

  @Column({ type: 'timestamp', precision: 6, nullable: true })
  deleted_at: Date;

  @Column({ type: 'bigint', default: '0' })
  sceneId: number;

  @Column({ type: 'varchar', length: 128, default: '' })
  sceneCode: string;

  @Column({ type: 'varchar', length: 128, default: '' })
  modelName: string;

  @Column({ type: 'varchar', length: 128, default: '' })
  wallet: string;

  @Column({ type: 'varchar', length: 128, default: '' })
  modelGroup: string;

  @Column({ type: 'varchar', length: 128, default: '' })
  physics: string;

  @Column({ type: 'varchar', length: 128, default: '' })
  effectOverlying: string;

  @Column({ type: 'varchar', length: 128, default: '' })
  addverUrl: string;

  @Column({ type: 'varchar', length: 1024, default: '' })
  modelJson: string;

  @Column({ type: 'bigint' })
  playerID: number;

  @Column({ type: 'varchar', length: 64, default: '' })
  uuid: string;
}
