import {
  Controller,
  Delete,
  Get,
  Param,
  Query,
} from '@nestjs/common';
import { FrameService } from './frame.service';

@Controller('frames')
export class FrameController {
  constructor(private readonly framesService: FrameService) {}

  @Get()
  findAll(@Query() paginationQuery) {
    // const { limit, offset } = paginationQuery;
    return this.framesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.framesService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.framesService.remove(id);
  }
}
