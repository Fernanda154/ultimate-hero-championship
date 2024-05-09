import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { Attribute } from "src/attribute/entities/attribute.entity";
import { Superpower } from "src/superpower/entities/superpower.entity";

@Entity({name: 'superhero'})
export class SuperHero {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: 'name', nullable: false})
    name: string;

    @ManyToOne(() => Attribute, { nullable: true })
    @JoinColumn({ name: 'attribute_id' }) 
    attribute: Attribute;

    @ManyToOne(() => Attribute, { nullable: true })
    @JoinColumn({ name: 'superpower_id' }) 
    superpower: Superpower;
}
