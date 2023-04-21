import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import { GameCompletion } from '../entity/gameCompletion.entity';

@Injectable()
export class GameCompletionService {
  constructor(
    @InjectRepository(GameCompletion)
    private gameCompletionRepository: Repository<GameCompletion>,
  ) {}

  async create(gameCompletion: GameCompletion): Promise<GameCompletion> {
    return await this.gameCompletionRepository.save(gameCompletion);
  }
  
  async findAll(skip = 0, take = 10): Promise<GameCompletion[]> {
    return await this.gameCompletionRepository.find({ skip, take });
  }

  async findOne(id: number): Promise<GameCompletion> {
    const options: FindOneOptions<GameCompletion> = { where: { id } };

    return await this.gameCompletionRepository.findOne(options);
  }

  async update(id: number, gameCompletion: GameCompletion): Promise<void> {
    await this.gameCompletionRepository.update(id, gameCompletion);
  }

  async remove(id: number): Promise<void> {
    await this.gameCompletionRepository.delete(id);
  }
}
