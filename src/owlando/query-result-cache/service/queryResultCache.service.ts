import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import { QueryResultCache } from '../entity/queryResultCache.entity';

@Injectable()
export class QueryResultCacheService {
  constructor(
    @InjectRepository(QueryResultCache)
    private queryResultCacheRepository: Repository<QueryResultCache>,
  ) {}

  async create(queryResultCache: QueryResultCache): Promise<QueryResultCache> {
    return await this.queryResultCacheRepository.save(queryResultCache);
  }
  
  async findAll(skip = 0, take = 10): Promise<QueryResultCache[]> {
    return await this.queryResultCacheRepository.find({ skip, take });
  }

  async findOne(id: number): Promise<QueryResultCache> {
    const options: FindOneOptions<QueryResultCache> = { where: { id } };

    return await this.queryResultCacheRepository.findOne(options);
  }

  async update(id: number, queryResultCache: QueryResultCache): Promise<void> {
    await this.queryResultCacheRepository.update(id, queryResultCache);
  }

  async remove(id: number): Promise<void> {
    await this.queryResultCacheRepository.delete(id);
  }
}
