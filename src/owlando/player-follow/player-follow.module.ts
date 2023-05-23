import { Module } from '@nestjs/common';
import { PlayerFollowService } from './service/playerFollow.service';
import { PlayerFollowController } from './controller/playerFollow.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlayerFollow } from './entity/playerFollow.entity';
import { IsExist } from 'src/utils/validators/is-exists.validator';
import { IsNotExist } from 'src/utils/validators/is-not-exists.validator';

@Module({
  imports: [TypeOrmModule.forFeature([PlayerFollow])],
  controllers: [PlayerFollowController],
  providers: [IsExist, IsNotExist, PlayerFollowService],
  exports: [PlayerFollowService],
})
export class PlayerFollowModule {}
