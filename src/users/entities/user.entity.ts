import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'users'})
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({name: 'name', nullable: false})
  name: string;

  @Column({name: 'email', nullable: false, unique: true})
  email: string;

  @Column({name: 'cpf', nullable: false, unique: true})
  cpf: string;

  @Column({name: 'biografia'})
  biografia: string;

  @Column({name: 'foto'})
  foto: string;

  @Column({name: 'password'})
  password: string;
}

