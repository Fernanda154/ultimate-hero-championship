import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm';
import { HttpException, HttpStatus } from '@nestjs/common';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>){

  }
  async create(createUserDto: CreateUserDto) {
    const checkUser = await this.usersRepository.findOne({ where: [
      { cpf: createUserDto.cpf },
      { email: createUserDto.email} // Use Like para procurar um e-mail parcialmente correspondente
    ]});
   
    if(checkUser){
      throw new HttpException('Usuário já registrado com este CPF ou email.', HttpStatus.BAD_REQUEST);
    }else{
      const user = this.usersRepository.create(createUserDto);
      return await this.usersRepository.save(user);
    }
    
  }

  async findAll() {
    return await this.usersRepository.find();
  }

  async findOne(id: number) {
    const user = await this.usersRepository.findOne({where: {id}});
    if(!user){
      throw new Error("Usuário não encontrado.");
    }
    return await this.usersRepository.findOne({where: {id}});
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.usersRepository.findOne({where: {id}});
    if(!user){
      throw new Error("Usuário não encontrado.");
    }
    Object.assign(user, updateUserDto);
    return await this.usersRepository.save(user);
  }

  async remove(id: number) {
    const user = await this.usersRepository.findOne({where: {id}});
    if(!user){
      throw new Error("Usuário não encontrado.");
    }
    return await this.usersRepository.remove(user);
  }

  async inactivate(id: number){
    const user = await this.usersRepository.findOne({where: {id}});
    if(!user){
      throw new HttpException('Usuário não encontrado.', HttpStatus.BAD_REQUEST);
    }else{
      user.active = false;
      return await this.usersRepository.save(user);
    }
  }
}
