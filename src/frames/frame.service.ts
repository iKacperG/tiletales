import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Frame } from './entity/frame.entity';

@Injectable()
export class FrameService {
  constructor(
    @InjectRepository(Frame)
    private readonly frameRepository: Repository<Frame>,
  ) {}

  findAll() {
    return this.frameRepository.find();
  }

  async findOne(id: string) {
    const color = await this.frameRepository.findOne({
      where: { id: +id },
    });
    if (!color) {
      throw new NotFoundException(`Color #${id} not found`);
    }
    return color;
  }

  async remove(id: string) {
    const color = await this.findOne(id);
    return this.frameRepository.remove(color);
  }
}
