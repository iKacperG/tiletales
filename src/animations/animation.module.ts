import {forwardRef, Module} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnimationController } from './animation.controller';
import { AnimationService } from './animation.service';
import { Animation } from './entity/animation.entity';
import {FieldModule} from "../fields/field.module";
import {FrameModule} from "../frames/frame.module";

@Module({
  imports: [TypeOrmModule.forFeature([Animation]), forwardRef(() => FrameModule)],
  controllers: [AnimationController],
  providers: [AnimationService],
  exports: [TypeOrmModule],
})
export class AnimationModule {}
