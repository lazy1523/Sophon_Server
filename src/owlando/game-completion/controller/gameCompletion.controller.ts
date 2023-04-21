// gameCompletion.controller.ts
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
  async update(
    @Param('id') id: number,
    @Body() gameCompletion: GameCompletion,
  ) {
    await this.gameCompletionService.update(id, gameCompletion);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    await this.gameCompletionService.remove(id);
  }
}
