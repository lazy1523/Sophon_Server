import { Module } from '@nestjs/common';
import { ReplyService } from './service/reply.service';
import { ReplyController } from './controller/reply.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Reply } from './entity/reply.entity';
import { IsExist } from 'src/utils/validators/is-exists.validator';
import { IsNotExist } from 'src/utils/validators/is-not-exists.validator';

@Module({
  imports: [TypeOrmModule.forFeature([Reply])],
  controllers: [ReplyController],
  providers: [IsExist, IsNotExist, ReplyService],
  exports: [ReplyService],
})
export class ReplyModule {}
