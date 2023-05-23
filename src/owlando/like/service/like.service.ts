import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import { Like } from '../entity/like.entity';

@Injectable()
export class LikeService {
  constructor(
    @InjectRepository(Like)
    private likeRepository: Repository<Like>,
  ) {}

  async create(like: Like): Promise<Like> {
    return await this.likeRepository.save(like);
  }

  async findAll(skip = 0, take = 10): Promise<Like[]> {
    return await this.likeRepository.find({ skip, take });
  }

  async findOne(id: number): Promise<Like> {
    const options: FindOneOptions<Like> = { where: { id } };

    return await this.likeRepository.findOne(options);
  }

  async update(id: number, like: Like): Promise<void> {
    await this.likeRepository.update(id, like);
  }

  async remove(id: number): Promise<void> {
    await this.likeRepository.delete(id);
  }
}
