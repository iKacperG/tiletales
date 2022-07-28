import {
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Animation {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany((type) => Frame, (frame) => frame.animation, { cascade: true })
  frames: Frame[];
}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnimationService } from '../animation.service';
import { AnimationController } from '../animation.controller';
import { Frame } from '../../frames/entity/frame.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Animation])],
  controllers: [AnimationController],
  providers: [AnimationService],
})
export class AnimationModule {}
