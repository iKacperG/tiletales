import {forwardRef, Module} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FrameController } from './frame.controller';
import { FrameService } from './frame.service';
import { Frame } from './entity/frame.entity';
import {AnimationModule} from "../animations/animation.module";

@Module({
  imports: [TypeOrmModule.forFeature([Frame]), forwardRef(() => AnimationModule)],
  controllers: [FrameController],
  providers: [FrameService],
  exports: [TypeOrmModule],
})
export class FrameModule {}
