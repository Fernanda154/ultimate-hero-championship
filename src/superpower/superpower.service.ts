import { Injectable } from '@nestjs/common';
import { CreateSuperpowerDto } from './dto/create-superpower.dto';
import { UpdateSuperpowerDto } from './dto/update-superpower.dto';
import { Superpower } from './entities/superpower.entity';
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm';

@Injectable()
export class SuperpowerService {
  constructor(
    @InjectRepository(Superpower)
    private readonly superPowerRepository: Repository<Superpower>){
  }
  async create(createSuperpowerDto: CreateSuperpowerDto) {
    const superpower = this.superPowerRepository.create(createSuperpowerDto);
    return await this.superPowerRepository.save(superpower);
  }

  async findAll() {
    return await this.superPowerRepository.find();
  }

  async findOne(id: number) {
    const superpower = await this.superPowerRepository.findOne({where: {id}});
    if(!superpower){
      throw new Error("Poder não encontrado.");
    }
    return await this.superPowerRepository.findOne({where: {id}});
  }

  async update(id: number, updateSuperpowerDto: UpdateSuperpowerDto) {
    const superpower = await this.superPowerRepository.findOne({where: {id}});
    if(!superpower){
      throw new Error("Poder não encontrado.");
    }
    Object.assign(superpower, updateSuperpowerDto);
    return await this.superPowerRepository.save(superpower);
  }

  async remove(id: number) {
    const superpower = await this.superPowerRepository.findOne({where: {id}});
    if(!superpower){
      throw new Error("Poder não encontrado.");
    }
    return await this.superPowerRepository.remove(superpower);
  }
}
