// player.controller.ts
import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { PlayerService } from '../service/player.service';
import { Player } from '../entity/player.entity';

@Controller('players')
export class PlayerController {
  constructor(private readonly playerService: PlayerService) {}

  @Get()
  findAll(@Query('skip') skip: number, @Query('take') take: number) {
    return this.playerService.findAll(skip, take);
  }


  @Get(':id')
  findOne(@Param('id') id: number): Promise<Player> {
    return this.playerService.findOne(id);
  }

  @Post()
  create(@Body() player: Player): Promise<Player> {
    return this.playerService.create(player);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() player: Player): void {
     this.playerService.update(id, player);
  }

  @Delete(':id')
  delete(@Param('id') id: number): void {
    this.playerService.remove(id);
  }
}
