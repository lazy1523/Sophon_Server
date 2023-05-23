// playerFollow.controller.ts
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
import { PlayerFollowService } from '../service/playerFollow.service';
import { PlayerFollow } from '../entity/playerFollow.entity';

@Controller('playerFollows')
export class PlayerFollowController {
  constructor(private readonly playerFollowService: PlayerFollowService) {}

  @Get()
  findAll(@Query('skip') skip: number, @Query('take') take: number) {
    return this.playerFollowService.findAll(skip, take);
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<PlayerFollow> {
    return this.playerFollowService.findOne(id);
  }

  @Post()
  create(@Body() playerFollow: PlayerFollow): Promise<PlayerFollow> {
    return this.playerFollowService.create(playerFollow);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() playerFollow: PlayerFollow) {
    await this.playerFollowService.update(id, playerFollow);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    await this.playerFollowService.remove(id);
  }
}
