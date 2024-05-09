import { Module } from '@nestjs/common';
import { SuperHeroService } from './super_hero.service';
import { SuperHeroController } from './super_hero.controller';
import { SuperHero } from './entities/super_hero.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Attribute } from 'src/attribute/entities/attribute.entity';
import { Superpower } from 'src/superpower/entities/superpower.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SuperHero, Attribute, Superpower])],
  controllers: [SuperHeroController],
  providers: [SuperHeroService],
})
export class SuperHeroModule {}
