import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Unique,
} from 'typeorm';

@Entity('scene')
@Unique('IDX_e2fdcb69e5f564355936969cac', ['sceneCode'])
export class Scene {
  @PrimaryGeneratedColumn('increment')
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

  @Column({ type: 'varchar', length: 128, default: '' })
  wallet: string;

  @Column({ type: 'varchar', length: 128 })
  sceneCode: string;

  @Column({ type: 'varchar', length: 128, default: '' })
  sceneName: string;

  @Column({ type: 'varchar', length: 128, nullable: true })
  sceneScript: string;

  @Column({ type: 'varchar', length: 128, nullable: true })
  sceneThumbnail: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  releaseTime: Date;

  @Column({ type: 'tinyint', default: '0' })
  released: number;

  @Column({ type: 'tinyint', default: '0' })
  minted: number;

  @Column({ type: 'tinyint', default: '0' })
  editing: number;

  @Column({ type: 'int', nullable: true })
  tokenId: number;

  @Column({ type: 'tinyint', default: '0' })
  listing: number;

  @Column({
    type: 'enum',
    enum: ['Partner', 'Recommended', 'General'],
    default: 'General',
  })
  sceneType: string;

  @Column({ type: 'varchar', length: 128, nullable: true })
  everlandTag: string;

  @Column({ type: 'tinyint', default: '0' })
  editShared: number;

  @Column({ type: 'varchar', length: 128, default: '' })
  sceneBrief: string;

  @Column({ type: 'tinyint', default: '0' })
  deleteType: number;

  @Column({ type: 'tinyint', default: '0' })
  dirty: number;

  @Column({ type: 'varchar', length: 64, default: 'Plane' })
  worldType: string;

  @Column({ type: 'varchar', length: 128 })
  playerId: string;

  @Column({
    type: 'enum',
    enum: [
      'Ethereum',
      'Goerli',
      'Arbitrum One',
      'Arbitrum Nova',
      'Optimism',
      'BSC',
      'Polygon',
      'Heco',
      'EOS',
      'TON',
    ],
    default: 'Ethereum',
  })
  chain: string;
}
