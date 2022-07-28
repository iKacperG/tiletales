import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FrameService } from '../frame.service';
import { FrameController } from '../frame.controller';
import { Animation } from '../../animations/entity/animation.entity';
import { Field } from '../../fields/entity/field.entity';

@Entity()
export class Frame {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  order: number;

  @ManyToOne((type) => Animation, (animation) => animation.frames)
  animation: number;

  @OneToMany((type) => Field, (field) => field.frame, { cascade: true })
  fields: Field[];
}

@Module({
  imports: [TypeOrmModule.forFeature([Frame])],
  controllers: [FrameController],
  providers: [FrameService],
})
export class FrameModule {}
