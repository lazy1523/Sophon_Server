// player.entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  Unique,
} from 'typeorm';

@Entity('player')
@Unique('address_delete_at', ['address', 'deleted_at'])
export class Player {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({ type: 'timestamp', precision: 6 })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp', precision: 6 })
  updated_at: Date;

  @DeleteDateColumn({ type: 'timestamp', precision: 6, nullable: true })
  deleted_at: Date;

  @Column({ type: 'varchar', length: 128 })
  address: string;

  @Column({ type: 'varchar', length: 64 })
  nick_name: string;

  @Column({ type: 'varchar', length: 256 })
  avatar_model_address: string;

  @Column({ type: 'varchar', length: 256, nullable: true })
  avatar_address: string;

  @Column({ type: 'int', default: 0 })
  energy: number;

  @Column({ type: 'int', default: 0 })
  level: number;

  @Column({ type: 'int', default: 0 })
  exp: number;

  @Column({ type: 'bigint', nullable: true })
  role_id: number;

  @Column({ type: 'bigint', nullable: true })
  nft_id: number;

  @Column({ type: 'varchar', length: 64, default: '' })
  email: string;

  @Column({ type: 'varchar', length: 64, nullable: true })
  password: string;
}
