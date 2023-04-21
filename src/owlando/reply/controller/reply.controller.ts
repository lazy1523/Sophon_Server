// reply.controller.ts
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
import { ReplyService } from '../service/reply.service';
import { Reply } from '../entity/reply.entity';

@Controller('replys')
export class ReplyController {
  constructor(private readonly replyService: ReplyService) {}

  @Get()
  findAll(@Query('skip') skip: number, @Query('take') take: number) {
    return this.replyService.findAll(skip, take);
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Reply> {
    return this.replyService.findOne(id);
  }

  @Post()
  create(@Body() reply: Reply): Promise<Reply> {
    return this.replyService.create(reply);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() reply: Reply) {
    await this.replyService.update(id, reply);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    await this.replyService.remove(id);
  }
}
