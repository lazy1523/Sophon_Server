import { Module } from '@nestjs/common';
import { LikeService } from './service/like.service';
import { LikeController } from './controller/like.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Like } from './entity/like.entity';
import { IsExist } from 'src/utils/validators/is-exists.validator';
import { IsNotExist } from 'src/utils/validators/is-not-exists.validator';

@Module({
  imports: [TypeOrmModule.forFeature([Like])],
  controllers: [LikeController],
  providers: [IsExist, IsNotExist, LikeService],
  exports: [LikeService],
})
export class LikeModule {}
