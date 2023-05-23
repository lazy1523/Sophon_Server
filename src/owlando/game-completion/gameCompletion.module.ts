import { Module } from '@nestjs/common';
import { GameCompletionService } from './service/gameCompletion.service';
import { GameCompletionController } from './controller/gameCompletion.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GameCompletion } from './entity/gameCompletion.entity';
import { IsExist } from 'src/utils/validators/is-exists.validator';
import { IsNotExist } from 'src/utils/validators/is-not-exists.validator';

@Module({
  imports: [TypeOrmModule.forFeature([GameCompletion])],
  controllers: [GameCompletionController],
  providers: [IsExist, IsNotExist, GameCompletionService],
  exports: [GameCompletionService],
})
export class GameCompletionModule {}
