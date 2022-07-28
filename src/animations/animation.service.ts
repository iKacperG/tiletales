import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Animation } from './entity/animation.entity';
import {
  CreateAnimationDto,
  UpdateAnimationDto,
} from './dto/create-animation.dto';

@Injectable()
export class AnimationService {
  constructor(
    @InjectRepository(Animation)
    private readonly animationRepository: Repository<Animation>,
  ) {}

  findAll() {
    return this.animationRepository.find();
  }

  async findOne(id: string) {
    const color = await this.animationRepository.findOne({
      where: { id: +id },
    });
    if (!color) {
      throw new NotFoundException(`Color #${id} not found`);
    }
    return color;
  }

  create(createAnimationDto: CreateAnimationDto) {
    // const animation = this.animationRepository.create(createAnimationDto);
    return this.animationRepository.save(createAnimationDto);
  }

  async remove(id: string) {
    const animation = await this.findOne(id);
    return this.animationRepository.remove(animation);
  }
}
