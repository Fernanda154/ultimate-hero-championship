import { Module } from '@nestjs/common';
import { SuperHeroService } from './super_hero.service';
import { SuperHeroController } from './super_hero.controller';
import { SuperHero } from './entities/super_hero.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([SuperHero])],
  controllers: [SuperHeroController],
  providers: [SuperHeroService],
})
export class SuperHeroModule {}
