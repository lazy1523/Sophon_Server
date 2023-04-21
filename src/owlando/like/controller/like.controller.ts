// like.controller.ts
import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { LikeService } from '../service/like.service';
import { Like } from '../entity/like.entity';

@Controller('likes')
export class LikeController {
  constructor(private readonly likeService: LikeService) {}

  @Get()
  findAll(@Query('skip') skip: number, @Query('take') take: number) {
    return this.likeService.findAll(skip, take);
  }


  @Get(':id')
  findOne(@Param('id') id: number): Promise<Like> {
    return this.likeService.findOne(id);
  }

  @Post()
  create(@Body() like: Like): Promise<Like> {
    return this.likeService.create(like);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() like: Like): void {
     this.likeService.update(id, like);
  }

  @Delete(':id')
  delete(@Param('id') id: number): void {
    this.likeService.remove(id);
  }
}
