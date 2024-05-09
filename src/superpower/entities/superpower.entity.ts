import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'superpower'})
export class Superpower {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: 'name', nullable: false})
    name: string;

    @Column({name: 'value', nullable: false})
    value: number;
}
