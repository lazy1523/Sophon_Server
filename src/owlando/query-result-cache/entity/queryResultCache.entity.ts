import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('query-result-cache')
export class QueryResultCache {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255, nullable: true })
  identifier: string;

  @Column({ type: 'bigint' })
  time: number;

  @Column({ type: 'int' })
  duration: number;

  @Column({ type: 'text' })
  query: string;

  @Column({ type: 'text' })
  result: string;
}
