import { Module } from '@nestjs/common';
import { QueryResultCacheService } from './service/queryResultCache.service';
import { QueryResultCacheController } from './controller/queryResultCache.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QueryResultCache } from './entity/queryResultCache.entity';
import { IsExist } from 'src/utils/validators/is-exists.validator';
import { IsNotExist } from 'src/utils/validators/is-not-exists.validator';

@Module({
  imports: [TypeOrmModule.forFeature([QueryResultCache])],
  controllers: [QueryResultCacheController],
  providers: [IsExist, IsNotExist, QueryResultCacheService],
  exports: [QueryResultCacheService],
})
export class QueryResultCacheModule {}
