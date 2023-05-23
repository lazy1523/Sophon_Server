// queryResultCache.controller.ts
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { QueryResultCacheService } from '../service/queryResultCache.service';
import { QueryResultCache } from '../entity/queryResultCache.entity';

@Controller('queryResultCaches')
export class QueryResultCacheController {
  constructor(
    private readonly queryResultCacheService: QueryResultCacheService,
  ) {}

  @Get()
  findAll(@Query('skip') skip: number, @Query('take') take: number) {
    return this.queryResultCacheService.findAll(skip, take);
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<QueryResultCache> {
    return this.queryResultCacheService.findOne(id);
  }

  @Post()
  create(
    @Body() queryResultCache: QueryResultCache,
  ): Promise<QueryResultCache> {
    return this.queryResultCacheService.create(queryResultCache);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() queryResultCache: QueryResultCache,
  ) {
    await this.queryResultCacheService.update(id, queryResultCache);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    await this.queryResultCacheService.remove(id);
  }
}
