import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'super_hero'})
export class SuperHero {
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column({name: 'name', nullable: false})
    name: string;
}
