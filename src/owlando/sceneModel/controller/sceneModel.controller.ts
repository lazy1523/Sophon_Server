// sceneModel.controller.ts
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
import { SceneModelService } from '../service/sceneModel.service';
import { SceneModel } from '../entity/sceneModel.entity';

@Controller('sceneModels')
export class SceneModelController {
  constructor(private readonly sceneModelService: SceneModelService) {}

  @Get()
  findAll(@Query('skip') skip: number, @Query('take') take: number) {
    return this.sceneModelService.findAll(skip, take);
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<SceneModel> {
    return this.sceneModelService.findOne(id);
  }

  @Post()
  create(@Body() sceneModel: SceneModel): Promise<SceneModel> {
    return this.sceneModelService.create(sceneModel);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() sceneModel: SceneModel) {
    await this.sceneModelService.update(id, sceneModel);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    await this.sceneModelService.remove(id);
  }
}
