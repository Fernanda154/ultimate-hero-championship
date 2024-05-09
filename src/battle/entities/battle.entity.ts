import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { SuperHero } from "src/super_hero/entities/super_hero.entity";

@Entity({name: 'battle'})
export class Battle {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => SuperHero)
    winner: number;

    @ManyToOne(() => SuperHero)
    hero1: number;

    @Column()
    power1: number;

    @ManyToOne(() => SuperHero)
    hero2: number;

    @Column()
    power2: number;
}
