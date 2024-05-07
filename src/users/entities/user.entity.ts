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

  @Column({name: 'biography'})
  biography: string;

  @Column({name: 'photo'})
  photo: string;

  @Column({name: 'password'})
  password: string;

  @Column({name: 'active'})
  active: boolean;
  
}

