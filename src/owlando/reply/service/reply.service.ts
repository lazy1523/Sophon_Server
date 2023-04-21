import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import { Reply } from '../entity/reply.entity';

@Injectable()
export class ReplyService {
  constructor(
    @InjectRepository(Reply)
    private replyRepository: Repository<Reply>,
  ) {}

  async create(reply: Reply): Promise<Reply> {
    return await this.replyRepository.save(reply);
  }
  
  async findAll(skip = 0, take = 10): Promise<Reply[]> {
    return await this.replyRepository.find({ skip, take });
  }

  async findOne(id: number): Promise<Reply> {
    const options: FindOneOptions<Reply> = { where: { id } };

    return await this.replyRepository.findOne(options);
  }

  async update(id: number, reply: Reply): Promise<void> {
    await this.replyRepository.update(id, reply);
  }

  async remove(id: number): Promise<void> {
    await this.replyRepository.delete(id);
  }
}
