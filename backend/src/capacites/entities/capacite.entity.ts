import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Capacite {
    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column({nullable: false})
    nom:string

    @Column({nullable: false})
    description:string
}