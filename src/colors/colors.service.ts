import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Color } from './entity/color.entity';
import { CreateColorDto, UpdateColorDto } from './dto/add-color.dto';

@Injectable()
export class ColorsService {
  constructor(
    @InjectRepository(Color)
    private readonly colorRepository: Repository<Color>,
  ) {}

  findAll() {
    return this.colorRepository.find();
  }

  async findOne(id: string) {
    const color = await this.colorRepository.findOne({ where: { id: +id } });
    if (!color) {
      throw new NotFoundException(`Color #${id} not found`);
    }
    return color;
  }

  create(createColorDto: CreateColorDto) {
    const color = this.colorRepository.create(createColorDto);
    return this.colorRepository.save(color);
  }

  async update(id: string, updateColorDto: UpdateColorDto) {
    const color = await this.colorRepository.preload({
      id: +id,
      ...updateColorDto,
    });
    if (!color) {
      throw new NotFoundException(`Color #${id} not found`);
    }
    return this.colorRepository.save(color);
  }

  async remove(id: string) {
    const color = await this.findOne(id);
    return this.colorRepository.remove(color);
  }
}
