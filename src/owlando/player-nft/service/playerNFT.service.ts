import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import { PlayerNFT } from '../entity/playerNFT.entity';

@Injectable()
export class PlayerNFTService {
  constructor(
    @InjectRepository(PlayerNFT)
    private playerNFTRepository: Repository<PlayerNFT>,
  ) {}

  async create(playerNFT: PlayerNFT): Promise<PlayerNFT> {
    return await this.playerNFTRepository.save(playerNFT);
  }
  
  async findAll(skip = 0, take = 10): Promise<PlayerNFT[]> {
    return await this.playerNFTRepository.find({ skip, take });
  }

  async findOne(id: number): Promise<PlayerNFT> {
    const options: FindOneOptions<PlayerNFT> = { where: { id } };

    return await this.playerNFTRepository.findOne(options);
  }

  async update(id: number, playerNFT: PlayerNFT): Promise<void> {
    await this.playerNFTRepository.update(id, playerNFT);
  }

  async remove(id: number): Promise<void> {
    await this.playerNFTRepository.delete(id);
  }
}
