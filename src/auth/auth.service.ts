import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { HttpException, HttpStatus } from '@nestjs/common';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,

    @InjectRepository(User)
    private readonly userRepository: Repository<User>,) {}

    async createToken(payload: CreateAuthDto): Promise<string> {
      const checkUser = await this.userRepository.findOne({ where: [
        { cpf: payload.cpf } ||
        { email: payload.email} 
      ]});
      if (!checkUser) {
        throw new HttpException('Credenciais inválidas -.-', HttpStatus.UNAUTHORIZED);
      }else{
        if(checkUser.password == payload.password){
          const jwt = this.jwtService.signAsync(payload);
          console.log("JWT", jwt);
          return jwt;
        }else{
          throw new HttpException('Credenciais inválidas -.-', HttpStatus.UNAUTHORIZED);
        }
      }
    }

}
