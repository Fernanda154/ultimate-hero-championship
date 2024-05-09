import { Injectable } from '@nestjs/common';
import { CreateSuperHeroDto } from './dto/create-super_hero.dto';
import { UpdateSuperHeroDto } from './dto/update-super_hero.dto';
import { SuperHero } from './entities/super_hero.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Attribute } from 'src/attribute/entities/attribute.entity';
import { Superpower } from 'src/superpower/entities/superpower.entity';

@Injectable()
export class SuperHeroService {
  constructor(
    @InjectRepository(SuperHero)
    private readonly herosRepository: Repository<SuperHero>,
    
    @InjectRepository(Attribute)
    private readonly attributeRepository: Repository<Attribute>,

    @InjectRepository(Superpower)
    private readonly superPowerRepository: Repository<Superpower>,
  ){
      
  }
  async create(createSuperHeroDto: CreateSuperHeroDto) {
    const hero = this.herosRepository.create(createSuperHeroDto);
    return await this.herosRepository.save(hero);
  }

  async findAll() {
    return await this.herosRepository.find({
      relations: ['attribute', 'superpower'], 
    });
  }

  async associateAttribute(superHeroId: number, attributeId: number): Promise<SuperHero> {
    const superHero = await this.herosRepository.findOne({where: {id: superHeroId}} );
    const attribute = await this.attributeRepository.findOne({where: {id: attributeId}});
    
    if (!superHero || !attribute) {
      throw new Error('Superhero ou Attributo não encontrados.');
    }
    
    superHero.attribute = attribute;
    return await this.herosRepository.save(superHero);
  }

  async associateSuperPower(superHeroId: number, superPowerId: number): Promise<SuperHero> {
    const superHero = await this.herosRepository.findOne({where: {id: superHeroId}} );
    const superpower = await this.superPowerRepository.findOne({where: {id: superPowerId}});
    
    if (!superHero || !superpower) {
      throw new Error('Superhero ou Super Poder não encontrados.');
    }
    
    superHero.superpower = superpower;
    return await this.herosRepository.save(superHero);
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
