import {
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { AnimationService } from './animation.service';
import {CreateAnimationDto} from "./dto/create-animation.dto";

@Controller('animations')
export class AnimationController {
  constructor(private readonly animationsService: AnimationService) {}

  @Get()
  findAll(@Query() paginationQuery) {
    // const { limit, offset } = paginationQuery;
    return this.animationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.animationsService.findOne(id);
  }

  @Post()
  create(@Param() createAnimationDto: CreateAnimationDto) {
    return this.animationsService.create(createAnimationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.animationsService.remove(id);
  }
}
