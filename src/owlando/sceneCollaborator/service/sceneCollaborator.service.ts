import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import { SceneCollaborator } from '../entity/sceneCollaborator.entity';

@Injectable()
export class SceneCollaboratorService {
  constructor(
    @InjectRepository(SceneCollaborator)
    private sceneCollaboratorRepository: Repository<SceneCollaborator>,
  ) {}

  async create(
    sceneCollaborator: SceneCollaborator,
  ): Promise<SceneCollaborator> {
    return await this.sceneCollaboratorRepository.save(sceneCollaborator);
  }

  async findAll(skip = 0, take = 10): Promise<SceneCollaborator[]> {
    return await this.sceneCollaboratorRepository.find({ skip, take });
  }

  async findOne(id: number): Promise<SceneCollaborator> {
    const options: FindOneOptions<SceneCollaborator> = { where: { id } };

    return await this.sceneCollaboratorRepository.findOne(options);
  }

  async update(
    id: number,
    sceneCollaborator: SceneCollaborator,
  ): Promise<void> {
    await this.sceneCollaboratorRepository.update(id, sceneCollaborator);
  }

  async remove(id: number): Promise<void> {
    await this.sceneCollaboratorRepository.delete(id);
  }
}
