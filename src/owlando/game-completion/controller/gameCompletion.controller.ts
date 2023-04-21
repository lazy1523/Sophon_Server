// gameCompletion.controller.ts
import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { GameCompletionService } from '../service/gameCompletion.service';
import { GameCompletion } from '../entity/gameCompletion.entity';

@Controller('gameCompletions')
export class GameCompletionController {
  constructor(private readonly gameCompletionService: GameCompletionService) {}

  @Get()
  findAll(@Query('skip') skip: number, @Query('take') take: number) {
    return this.gameCompletionService.findAll(skip, take);
  }


  @Get(':id')
  findOne(@Param('id') id: number): Promise<GameCompletion> {
    return this.gameCompletionService.findOne(id);
  }

  @Post()
  create(@Body() gameCompletion: GameCompletion): Promise<GameCompletion> {
    return this.gameCompletionService.create(gameCompletion);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() gameCompletion: GameCompletion): void {
     this.gameCompletionService.update(id, gameCompletion);
  }

  @Delete(':id')
  delete(@Param('id') id: number): void {
    this.gameCompletionService.remove(id);
  }
}
