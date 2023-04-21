import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('player_nft')
export class PlayerNFT {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({ type: 'timestamp', precision: 6, default: () => 'CURRENT_TIMESTAMP(6)' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp', precision: 6, default: () => 'CURRENT_TIMESTAMP(6)', onUpdate: 'CURRENT_TIMESTAMP(6)' })
  updated_at: Date;

  @Column({ type: 'timestamp', precision: 6, nullable: true })
  deleted_at: Date;

  @Column({ type: 'varchar', length: 128 })
  contract_address: string;

  @Column({ type: 'int' })
  nft_type: number;

  @Column({ type: 'int', default: 0 })
  nft_level: number;

  @Column({ type: 'int', default: 100 })
  nft_durability: number;

  @Column({ type: 'int', default: 0 })
  nft_enable: number;
}
