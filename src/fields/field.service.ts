import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Field } from './entity/field.entity';

@Injectable()
export class FieldService {
  constructor(
    @InjectRepository(Field)
    private readonly fieldRepository: Repository<Field>,
  ) {}

  findAll() {
    return this.fieldRepository.find();
  }

  async findOne(id: string) {
    const color = await this.fieldRepository.findOne({
      where: { id: +id },
    });
    if (!color) {
      throw new NotFoundException(`Color #${id} not found`);
    }
    return color;
  }

  async remove(id: string) {
    const color = await this.findOne(id);
    return this.fieldRepository.remove(color);
  }
}
