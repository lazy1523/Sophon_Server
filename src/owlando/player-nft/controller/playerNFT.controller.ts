// playerNFT.controller.ts
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
import { PlayerNFTService } from '../service/playerNFT.service';
import { PlayerNFT } from '../entity/playerNFT.entity';

@Controller('playerNFTs')
export class PlayerNFTController {
  constructor(private readonly playerNFTService: PlayerNFTService) {}

  @Get()
  findAll(@Query('skip') skip: number, @Query('take') take: number) {
    return this.playerNFTService.findAll(skip, take);
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<PlayerNFT> {
    return this.playerNFTService.findOne(id);
  }

  @Post()
  create(@Body() playerNFT: PlayerNFT): Promise<PlayerNFT> {
    return this.playerNFTService.create(playerNFT);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() playerNFT: PlayerNFT) {
    await this.playerNFTService.update(id, playerNFT);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    await this.playerNFTService.remove(id);
  }
}
