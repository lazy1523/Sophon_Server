import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import { PlayerFollow } from '../entity/playerFollow.entity';

@Injectable()
export class PlayerFollowService {
  constructor(
    @InjectRepository(PlayerFollow)
    private playerFollowRepository: Repository<PlayerFollow>,
  ) {}

  async create(playerFollow: PlayerFollow): Promise<PlayerFollow> {
    return await this.playerFollowRepository.save(playerFollow);
  }
  
  async findAll(skip = 0, take = 10): Promise<PlayerFollow[]> {
    return await this.playerFollowRepository.find({ skip, take });
  }

  async findOne(id: number): Promise<PlayerFollow> {
    const options: FindOneOptions<PlayerFollow> = { where: { id } };

    return await this.playerFollowRepository.findOne(options);
  }

  async update(id: number, playerFollow: PlayerFollow): Promise<void> {
    await this.playerFollowRepository.update(id, playerFollow);
  }

  async remove(id: number): Promise<void> {
    await this.playerFollowRepository.delete(id);
  }
}
