// comment.controller.ts
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CommentService } from '../service/comment.service';
import { Comment } from '../entity/comment.entity';

@Controller('comments')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Get()
  findAll(@Query('skip') skip: number, @Query('take') take: number) {
    return this.commentService.findAll(skip, take);
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Comment> {
    return this.commentService.findOne(id);
  }

  @Post()
  create(@Body() comment: Comment): Promise<Comment> {
    return this.commentService.create(comment);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() comment: Comment) {
    await this.commentService.update(id, comment);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    await this.commentService.remove(id);
  }
}
