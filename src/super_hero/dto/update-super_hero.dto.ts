import { PartialType } from '@nestjs/mapped-types';
import { CreateSuperHeroDto } from './create-super_hero.dto';

export class UpdateSuperHeroDto extends PartialType(CreateSuperHeroDto) {}
