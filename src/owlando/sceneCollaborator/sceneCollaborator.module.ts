import { Module } from '@nestjs/common';
import { SceneCollaboratorService } from './service/sceneCollaborator.service';
import { SceneCollaboratorController } from './controller/sceneCollaborator.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SceneCollaborator } from './entity/sceneCollaborator.entity';
import { IsExist } from 'src/utils/validators/is-exists.validator';
import { IsNotExist } from 'src/utils/validators/is-not-exists.validator';

@Module({
  imports: [TypeOrmModule.forFeature([SceneCollaborator])],
  controllers: [SceneCollaboratorController],
  providers: [IsExist, IsNotExist, SceneCollaboratorService],
  exports: [SceneCollaboratorService],
})
export class SceneCollaboratorModule {}
