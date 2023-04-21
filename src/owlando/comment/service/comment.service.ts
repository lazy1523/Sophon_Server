import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import { Comment } from '../entity/comment.entity';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(Comment)
    private commentRepository: Repository<Comment>,
  ) {}

  async create(comment: Comment): Promise<Comment> {
    return await this.commentRepository.save(comment);
  }
  
  async findAll(skip = 0, take = 10): Promise<Comment[]> {
    return await this.commentRepository.find({ skip, take });
  }

  async findOne(id: number): Promise<Comment> {
    const options: FindOneOptions<Comment> = { where: { id } };

    return await this.commentRepository.findOne(options);
  }

  async update(id: number, comment: Comment): Promise<void> {
    await this.commentRepository.update(id, comment);
  }

  async remove(id: number): Promise<void> {
    await this.commentRepository.delete(id);
  }
}
