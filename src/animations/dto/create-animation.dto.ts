import { Frame } from '../../frames/entity/frame.entity';

export class CreateAnimationDto {
  readonly frames: Frame[];
}

export class UpdateAnimationDto {
  readonly frames?: number;
}
