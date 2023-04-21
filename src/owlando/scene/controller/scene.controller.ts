// scene.controller.ts
import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { SceneService } from '../service/scene.service';
import { Scene } from '../entity/scene.entity';

@Controller('scenes')
export class SceneController {
  constructor(private readonly sceneService: SceneService) {}

  @Get()
  findAll(@Query('skip') skip: number, @Query('take') take: number) {
    return this.sceneService.findAll(skip, take);
  }


  @Get(':id')
  findOne(@Param('id') id: number): Promise<Scene> {
    return this.sceneService.findOne(id);
  }

  @Post()
  create(@Body() scene: Scene): Promise<Scene> {
    return this.sceneService.create(scene);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() scene: Scene): void {
     this.sceneService.update(id, scene);
  }

  @Delete(':id')
  delete(@Param('id') id: number): void {
    this.sceneService.remove(id);
  }
}
