import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import { Player } from '../entity/player.entity';

@Injectable()
export class PlayerService {
  constructor(
    @InjectRepository(Player)
    private playerRepository: Repository<Player>,
  ) {}

  async create(player: Player): Promise<Player> {
    return await this.playerRepository.save(player);
  }

  async findAll(skip = 0, take = 10): Promise<Player[]> {
    return await this.playerRepository.find({ skip, take });
  }

  async findOne(id: number): Promise<Player> {
    const options: FindOneOptions<Player> = { where: { id } };

    return await this.playerRepository.findOne(options);
  }

  async update(id: number, player: Player): Promise<void> {
    await this.playerRepository.update(id, player);
  }

  async remove(id: number): Promise<void> {
    await this.playerRepository.delete(id);
  }
}
