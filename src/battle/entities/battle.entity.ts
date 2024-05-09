import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { SuperHero } from "src/super_hero/entities/super_hero.entity";

@Entity({name: 'battle'})
export class Battle {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => SuperHero)
    winner_id: number;

    @ManyToOne(() => SuperHero)
    hero1_id: number;

    @Column()
    power1: number;

    @ManyToOne(() => SuperHero)
    hero2_id: number;

    @Column()
    power2: number;

}
