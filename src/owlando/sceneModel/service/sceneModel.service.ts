import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import { SceneModel } from '../entity/sceneModel.entity';

@Injectable()
export class SceneModelService {
  constructor(
    @InjectRepository(SceneModel)
    private sceneModelRepository: Repository<SceneModel>,
  ) {}

  async create(sceneModel: SceneModel): Promise<SceneModel> {
    return await this.sceneModelRepository.save(sceneModel);
  }
  
  async findAll(skip = 0, take = 10): Promise<SceneModel[]> {
    return await this.sceneModelRepository.find({ skip, take });
  }

  async findOne(id: number): Promise<SceneModel> {
    const options: FindOneOptions<SceneModel> = { where: { id } };

    return await this.sceneModelRepository.findOne(options);
  }

  async update(id: number, sceneModel: SceneModel): Promise<void> {
    await this.sceneModelRepository.update(id, sceneModel);
  }

  async remove(id: number): Promise<void> {
    await this.sceneModelRepository.delete(id);
  }
}
