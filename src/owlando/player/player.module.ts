import { Module } from '@nestjs/common';
import { PlayerService } from './service/player.service';
import { PlayerController } from './controller/player.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Player } from './entity/player.entity';
import { IsExist } from 'src/utils/validators/is-exists.validator';
import { IsNotExist } from 'src/utils/validators/is-not-exists.validator';

@Module({
  imports: [TypeOrmModule.forFeature([Player])],
  controllers: [PlayerController],
  providers: [IsExist, IsNotExist, PlayerService],
  exports: [PlayerService],
})
export class PlayerModule {}
