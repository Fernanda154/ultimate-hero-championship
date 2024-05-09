import { Controller, Get, UseGuards, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SuperpowerService } from './superpower.service';
import { CreateSuperpowerDto } from './dto/create-superpower.dto';
import { UpdateSuperpowerDto } from './dto/update-superpower.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('superpower')
export class SuperpowerController {
  constructor(private readonly superpowerService: SuperpowerService) {}

  @UseGuards(AuthGuard)
  @Post()
  create(@Body() createSuperpowerDto: CreateSuperpowerDto) {
    return this.superpowerService.create(createSuperpowerDto);
  }

  @UseGuards(AuthGuard)
  @Get()
  findAll() {
    return this.superpowerService.findAll();
  }

  @UseGuards(AuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.superpowerService.findOne(+id);
  }

  @UseGuards(AuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSuperpowerDto: UpdateSuperpowerDto) {
    return this.superpowerService.update(+id, updateSuperpowerDto);
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.superpowerService.remove(+id);
  }
}
