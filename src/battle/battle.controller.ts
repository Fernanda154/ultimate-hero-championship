import { Controller, UseGuards, Post, Param, ParseIntPipe } from '@nestjs/common';
import { BattleService } from './battle.service';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('battle')
export class BattleController {
  constructor(private readonly battleService: BattleService) {}

  @UseGuards(AuthGuard)
  @Post(':superHeroId1/fight/:superHeroId2')
  async associateAttribute(
    @Param('superHeroId1', ParseIntPipe) superHeroId1: number,
    @Param('superHeroId2', ParseIntPipe) superHeroId2: number,
  ) {
    return this.battleService.create(superHeroId1, superHeroId2);
  }

}
