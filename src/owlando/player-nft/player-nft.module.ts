import { Module } from '@nestjs/common';
import { PlayerNFTService } from './service/playerNFT.service';
import { PlayerNFTController } from './controller/playerNFT.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlayerNFT } from './entity/playerNFT.entity';
import { IsExist } from 'src/utils/validators/is-exists.validator';
import { IsNotExist } from 'src/utils/validators/is-not-exists.validator';

@Module({
  imports: [TypeOrmModule.forFeature([PlayerNFT])],
  controllers: [PlayerNFTController],
  providers: [IsExist, IsNotExist, PlayerNFTService],
  exports: [PlayerNFTService],
})
export class PlayerNFTModule {}
