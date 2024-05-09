import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'superpower'})
export class Superpower {
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column({name: 'name', nullable: false})
    name: string;
}
