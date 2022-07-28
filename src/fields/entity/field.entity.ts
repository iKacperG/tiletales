import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Field {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  row: number;

  @Column()
  column: number;

  @Column()
  color: string;

  @ManyToOne((type) => Frame, (frame) => frame.id)
  frame: number;
}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FieldService } from '../field.service';
import { FieldController } from '../field.controller';
import { Frame } from '../../frames/entity/frame.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Field])],
  controllers: [FieldController],
  providers: [FieldService],
})
export class AnimationModule {}
