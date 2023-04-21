// sceneCollaborator.controller.ts
import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { SceneCollaboratorService } from '../service/sceneCollaborator.service';
import { SceneCollaborator } from '../entity/sceneCollaborator.entity';

@Controller('sceneCollaborators')
export class SceneCollaboratorController {
  constructor(private readonly sceneCollaboratorService: SceneCollaboratorService) {}

  @Get()
  findAll(@Query('skip') skip: number, @Query('take') take: number) {
    return this.sceneCollaboratorService.findAll(skip, take);
  }


  @Get(':id')
  findOne(@Param('id') id: number): Promise<SceneCollaborator> {
    return this.sceneCollaboratorService.findOne(id);
  }

  @Post()
  create(@Body() sceneCollaborator: SceneCollaborator): Promise<SceneCollaborator> {
    return this.sceneCollaboratorService.create(sceneCollaborator);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() sceneCollaborator: SceneCollaborator): void {
     this.sceneCollaboratorService.update(id, sceneCollaborator);
  }

  @Delete(':id')
  delete(@Param('id') id: number): void {
    this.sceneCollaboratorService.remove(id);
  }
}
