import {forwardRef, Module} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FrameController } from './frame.controller';
import { FrameService } from './frame.service';
import { Frame } from './entity/frame.entity';
import { FieldModule } from "../fields/field.module";

@Module({
  imports: [TypeOrmModule.forFeature([Frame]), forwardRef(() => FieldModule)],
  controllers: [FrameController],
  providers: [FrameService],
  exports: [TypeOrmModule],
})
export class FrameModule {}
