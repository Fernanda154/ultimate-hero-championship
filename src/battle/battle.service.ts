import { Injectable } from '@nestjs/common';
import { CreateBattleDto } from './dto/create-battle.dto';
import { UpdateBattleDto } from './dto/update-battle.dto';
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm';
import { Battle } from './entities/battle.entity';
import { SuperHero } from 'src/super_hero/entities/super_hero.entity';

@Injectable()
export class BattleService {
  constructor(
    @InjectRepository(Battle)
    private readonly battleRepository: Repository<Battle>
  ){
  }
  async create(createBattleDto: CreateBattleDto) {
    
    const superpower = this.battleRepository.create(createBattleDto);
    return await this.battleRepository.save(superpower);
  }

  findAll() {
    return `This action returns all battle`;
  }

  findOne(id: number) {
    return `This action returns a #${id} battle`;
  }

  update(id: number, updateBattleDto: UpdateBattleDto) {
    return `This action updates a #${id} battle`;
  }

  remove(id: number) {
    return `This action removes a #${id} battle`;
  }
}
