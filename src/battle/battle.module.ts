import { Module } from '@nestjs/common';
import { BattleService } from './battle.service';
import { BattleController } from './battle.controller';
import { Battle } from './entities/battle.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SuperHero } from 'src/super_hero/entities/super_hero.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Battle, SuperHero])],
  controllers: [BattleController],
  providers: [BattleService],
})
export class BattleModule {}
