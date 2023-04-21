import { Controller, Get, Post, Body, Put, Param, Delete, Query } from '@nestjs/common';
import { FavoriteService } from '../service/favorite.service';
import { Favorite } from '../entity/favorite.entity';

@Controller('favorite')
export class FavoriteController {
  constructor(private readonly favoriteService: FavoriteService) {}

  @Get()
  findAll(@Query('skip') skip: number, @Query('take') take: number) {
    return this.favoriteService.findAll(skip, take);
  }


  @Get(':id')
  findOne(@Param('id') id: number): Promise<Favorite> {
    return this.favoriteService.findOne(id);
  }

  @Post()
  create(@Body() favorite: Favorite): Promise<Favorite> {
    return this.favoriteService.create(favorite);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() favorite: Favorite): void {
     this.favoriteService.update(id, favorite);
  }

  @Delete(':id')
  delete(@Param('id') id: number): void {
    this.favoriteService.remove(id);
  }
}