import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { SuperHeroService } from './super_hero.service';
import { CreateSuperHeroDto } from './dto/create-super_hero.dto';
import { UpdateSuperHeroDto } from './dto/update-super_hero.dto';

@Controller('superhero')
export class SuperHeroController {
  constructor(private readonly superHeroService: SuperHeroService) {}

  @Post()
  create(@Body() createSuperHeroDto: CreateSuperHeroDto) {
    return this.superHeroService.create(createSuperHeroDto);
  }

  @Get()
  findAll() {
    return this.superHeroService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.superHeroService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSuperHeroDto: UpdateSuperHeroDto) {
    return this.superHeroService.update(+id, updateSuperHeroDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.superHeroService.remove(+id);
  }

  @Post(':superHeroId/associateatt/:attributeId')
  async associateAttribute(
    @Param('superHeroId', ParseIntPipe) superHeroId: number,
    @Param('attributeId', ParseIntPipe) attributeId: number,
  ) {
    return this.superHeroService.associateAttribute(superHeroId, attributeId);
  }

  @Post(':superHeroId/associatepow/:superPowerId')
  async associateSuperPower(
    @Param('superHeroId', ParseIntPipe) superHeroId: number,
    @Param('superPowerId', ParseIntPipe) superPowerId: number,
  ) {
    return this.superHeroService.associateSuperPower(superHeroId, superPowerId);
  }
}
