import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'attribute'})
export class Attribute {
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column({name: 'name', nullable: false})
    name: string;
}
