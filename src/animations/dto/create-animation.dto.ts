import { Frame } from '../../frames/entity/frame.entity';

export class CreateAnimationDto {
  frames: Frame[];
}

export class UpdateAnimationDto {
  readonly frames?: number;
}
