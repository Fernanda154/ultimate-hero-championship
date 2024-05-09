import { SuperHero } from "src/super_hero/entities/super_hero.entity";
export class CreateBattleDto {
    winner_id?: number;
    hero1_id?: number;
    power1?: number;
    hero2_id?: number;
    power2?: number;
}
