import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Animation } from './entity/animation.entity';
import {
  CreateAnimationDto,
} from './dto/create-animation.dto';
import { Frame } from "../frames/entity/frame.entity";

@Injectable()
export class AnimationService {
  constructor(
    @InjectRepository(Animation)
    private readonly animationRepository: Repository<Animation>,
    @InjectRepository(Frame)
    private readonly frameRepository: Repository<Frame>,
  ) {}

  findAll() {
    return this.animationRepository.find({
      relations: {
        frames: true,
      }
    });
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

  async create(createAnimationDto: CreateAnimationDto) {
    const frames = await Promise.all(
    createAnimationDto.frames.map(frame => this.preloadFrameById(frame.id)),
    );

    const animation = this.animationRepository.create({
      ...createAnimationDto,
      frames,
    });
    return this.animationRepository.save(animation);
  }

  async remove(id: string) {
    const animation = await this.findOne(id);
    return this.animationRepository.remove(animation);
  }

  private async preloadFrameById(id: number): Promise<Frame> {
    const existingFrame = await this.frameRepository.findOne({ where: {id: id} });
    if (existingFrame) {
      return existingFrame;
    }
    return this.frameRepository.create({ id });
  }
}
