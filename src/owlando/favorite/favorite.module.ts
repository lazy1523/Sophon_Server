import { Module } from '@nestjs/common';
import { FavoriteService } from './service/favorite.service';
import { FavoriteController } from './controller/favorite.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Favorite } from './entity/favorite.entity';
import { IsExist } from 'src/utils/validators/is-exists.validator';
import { IsNotExist } from 'src/utils/validators/is-not-exists.validator';

@Module({
  imports: [TypeOrmModule.forFeature([Favorite])],
  controllers: [FavoriteController],
  providers: [IsExist, IsNotExist, FavoriteService],
  exports: [FavoriteService],
})
export class FavoriteModule {}
