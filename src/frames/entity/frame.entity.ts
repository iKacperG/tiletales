import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Animation } from '../../animations/entity/animation.entity';

@Entity()
export class Frame {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  order: number;

  @ManyToOne('Animation', 'frames')
  animation: number;
}

