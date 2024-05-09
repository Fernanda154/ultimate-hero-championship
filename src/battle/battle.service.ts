import { Injectable } from '@nestjs/common';
import { CreateBattleDto } from './dto/create-battle.dto';
import { UpdateBattleDto } from './dto/update-battle.dto';
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm';
import { Battle } from './entities/battle.entity';
import { SuperHero } from 'src/super_hero/entities/super_hero.entity';
import { HttpException, HttpStatus } from '@nestjs/common';

@Injectable()
export class BattleService {
  constructor(
    @InjectRepository(Battle)
    private readonly battleRepository: Repository<Battle>,

    @InjectRepository(SuperHero)
    private readonly herosRepository: Repository<SuperHero>,
  ){
  }
  async create(superHeroId1: number, superHeroId2: number) {
    console.log("HEROI 01", superHeroId1);
    console.log("HEROI 02", superHeroId2);
    const hero1 = this.herosRepository.findOne({where: {id: superHeroId1}, relations: ['attribute', 'superpower']});
    const hero2 = this.herosRepository.findOne({where: {id: superHeroId2}, relations: ['attribute', 'superpower']});
    
    var attackPowerHero1 = ((await hero1).attribute?.value ? (await hero1).attribute.value : 0) + ((await hero1).superpower?.value ? (await hero1).superpower.value : 0);
    var attackPowerHero2 = ((await hero2).attribute?.value ? (await hero2).attribute.value : 0) + ((await hero2).superpower?.value ? (await hero2).superpower.value : 0);

    const createBattleDto: CreateBattleDto = {};
    createBattleDto.power1 = attackPowerHero1;
    createBattleDto.power2 = attackPowerHero2;
    createBattleDto.hero1_id = (await hero1).id;
    createBattleDto.hero2_id = (await hero2).id;

    if(attackPowerHero1 > attackPowerHero2){
      createBattleDto.winner_id = (await hero1).id;
    }else if(attackPowerHero1 == attackPowerHero2){
      throw new HttpException('Deu empate, sejam amigos.', HttpStatus.BAD_REQUEST);
    }else{
      createBattleDto.winner_id = (await hero2).id;
    }
    console.log("VENCEDOR", createBattleDto);
    const battle = this.battleRepository.create(createBattleDto);
    return await this.battleRepository.save(battle);
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
