import {
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Frame } from '../../frames/entity/frame.entity';

@Entity()
export class Animation {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany('Frame', 'animation', { cascade: true })
  frames: Frame[];
}
