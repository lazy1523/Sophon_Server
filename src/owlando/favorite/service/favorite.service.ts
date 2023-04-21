import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import { Favorite } from '../entity/favorite.entity';

@Injectable()
export class FavoriteService {
  constructor(
    @InjectRepository(Favorite)
    private favoriteRepository: Repository<Favorite>,
  ) {}

  async create(comment: Favorite): Promise<Favorite> {
    return await this.favoriteRepository.save(comment);
  }

  async findAll(skip = 0, take = 10): Promise<Favorite[]> {
    return await this.favoriteRepository.find({ skip, take });
  }

  async findOne(id: number): Promise<Favorite> {
    const options: FindOneOptions<Favorite> = { where: { id } };

    return await this.favoriteRepository.findOne(options);
  }

  async update(id: number, comment: Favorite): Promise<void> {
    await this.favoriteRepository.update(id, comment);
  }

  async remove(id: number): Promise<void> {
    await this.favoriteRepository.delete(id);
  }
}
