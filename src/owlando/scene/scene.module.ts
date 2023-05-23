import { Module } from '@nestjs/common';
import { SceneService } from './service/scene.service';
import { SceneController } from './controller/scene.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Scene } from './entity/scene.entity';
import { IsExist } from 'src/utils/validators/is-exists.validator';
import { IsNotExist } from 'src/utils/validators/is-not-exists.validator';

@Module({
  imports: [TypeOrmModule.forFeature([Scene])],
  controllers: [SceneController],
  providers: [IsExist, IsNotExist, SceneService],
  exports: [SceneService],
})
export class SceneModule {}
