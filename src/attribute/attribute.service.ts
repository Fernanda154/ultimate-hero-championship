import { Injectable } from '@nestjs/common';
import { CreateAttributeDto } from './dto/create-attribute.dto';
import { UpdateAttributeDto } from './dto/update-attribute.dto';
import { Attribute } from './entities/attribute.entity';
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm';

@Injectable()
export class AttributeService {
  constructor(
    @InjectRepository(Attribute)
    private readonly attributeRepository: Repository<Attribute>){
  }

  async create(createAttributeDto: CreateAttributeDto) {
    const attribute = this.attributeRepository.create(createAttributeDto);
    return await this.attributeRepository.save(attribute);
  }

  async findAll() {
    return await this.attributeRepository.find();
  }

  async findOne(id: number) {
    const attribute = await this.attributeRepository.findOne({where: {id}});
    if(!attribute){
      throw new Error("Atributo não encontrado.");
    }
    return await this.attributeRepository.findOne({where: {id}});
  }

  async update(id: number, updateAttributeDto: UpdateAttributeDto) {
    const attribute = await this.attributeRepository.findOne({where: {id}});
    if(!attribute){
      throw new Error("Atributo não encontrado.");
    }
    Object.assign(attribute, updateAttributeDto);
    return await this.attributeRepository.save(attribute);
  }

  async remove(id: number) {
    const attribute = await this.attributeRepository.findOne({where: {id}});
    if(!attribute){
      throw new Error("Atributo não encontrado.");
    }
    return await this.attributeRepository.remove(attribute);
  }
}
