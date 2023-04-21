import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import { Scene } from '../entity/scene.entity';

@Injectable()
export class SceneService {
  constructor(
    @InjectRepository(Scene)
    private sceneRepository: Repository<Scene>,
  ) {}

  async create(scene: Scene): Promise<Scene> {
    return await this.sceneRepository.save(scene);
  }
  
  async findAll(skip = 0, take = 10): Promise<Scene[]> {
    return await this.sceneRepository.find({ skip, take });
  }

  async findOne(id: number): Promise<Scene> {
    const options: FindOneOptions<Scene> = { where: { id } };

    return await this.sceneRepository.findOne(options);
  }

  async update(id: number, scene: Scene): Promise<void> {
    await this.sceneRepository.update(id, scene);
  }

  async remove(id: number): Promise<void> {
    await this.sceneRepository.delete(id);
  }
}
