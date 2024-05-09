import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { BattleService } from './battle.service';
import { CreateBattleDto } from './dto/create-battle.dto';
import { UpdateBattleDto } from './dto/update-battle.dto';

@Controller('battle')
export class BattleController {
  constructor(private readonly battleService: BattleService) {}

  @Post(':superHeroId1/fight/:superHeroId2')
  async associateAttribute(
    @Param('superHeroId1', ParseIntPipe) superHeroId1: number,
    @Param('superHeroId2', ParseIntPipe) superHeroId2: number,
  ) {
    return this.battleService.create(superHeroId1, superHeroId2);
  }

  @Get()
  findAll() {
    return this.battleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.battleService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBattleDto: UpdateBattleDto) {
    return this.battleService.update(+id, updateBattleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.battleService.remove(+id);
  }
}
