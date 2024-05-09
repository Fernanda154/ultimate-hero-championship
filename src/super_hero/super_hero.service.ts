import { Injectable } from '@nestjs/common';
import { CreateSuperHeroDto } from './dto/create-super_hero.dto';
import { UpdateSuperHeroDto } from './dto/update-super_hero.dto';
import { SuperHero } from './entities/super_hero.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class SuperHeroService {
  constructor(
    @InjectRepository(SuperHero)
    private readonly herosRepository: Repository<SuperHero>){

  }
  async create(createSuperHeroDto: CreateSuperHeroDto) {
    const hero = this.herosRepository.create(createSuperHeroDto);
    return await this.herosRepository.save(hero);
  }

  async findAll() {
    return await this.herosRepository.find();
  }

  async findOne(id: number) {
    const hero = await this.herosRepository.findOne({where: {id}});
    if(!hero){
      throw new Error("Herói não encontrado.");
    }
    return await this.herosRepository.findOne({where: {id}});
  }

  async update(id: number, updateSuperHeroDto: UpdateSuperHeroDto) {
    const hero = await this.herosRepository.findOne({where: {id}});
    if(!hero){
      throw new Error("Herói não encontrado.");
    }
    Object.assign(hero, updateSuperHeroDto);
    return await this.herosRepository.save(hero);
  }

  async remove(id: number) {
    const hero = await this.herosRepository.findOne({where: {id}});
    if(!hero){
      throw new Error("Herói não encontrado.");
    }
    return await this.herosRepository.remove(hero);
  }
}
