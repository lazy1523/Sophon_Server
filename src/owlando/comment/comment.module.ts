import { Module } from '@nestjs/common';
import { CommentService } from './service/comment.service';
import { CommentController } from './controller/comment.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Comment } from './entity/comment.entity';
import { IsExist } from 'src/utils/validators/is-exists.validator';
import { IsNotExist } from 'src/utils/validators/is-not-exists.validator';
import { Comments } from './entity/comments.entity';
import { CommentsLike } from './entity/commentLike.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Comment, Comments,CommentsLike])],
  controllers: [CommentController],
  providers: [IsExist, IsNotExist, CommentService],
  exports: [CommentService],
})
export class CommentModule {}
