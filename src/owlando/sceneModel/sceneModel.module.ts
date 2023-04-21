import { Module } from '@nestjs/common';
import { SceneModelService } from './service/sceneModel.service';
import { SceneModelController } from './controller/sceneModel.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SceneModel } from './entity/sceneModel.entity';
import { IsExist } from 'src/utils/validators/is-exists.validator';
import { IsNotExist } from 'src/utils/validators/is-not-exists.validator';

@Module({
  imports: [TypeOrmModule.forFeature([SceneModel])],
  controllers: [SceneModelController],
  providers: [IsExist, IsNotExist, SceneModelService],
  exports: [SceneModelService],
})
export class SceneModelModule {}
