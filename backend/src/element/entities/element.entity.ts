import { NomElement } from "src/type/NomElement";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Element {
    @PrimaryGeneratedColumn('uuid')
    id:string

    @Column({nullable:false, default: NomElement.EAU, type:"enum", enum: NomElement})
    nom:NomElement

    @Column({nullable:false, default:1})
    niveau:number
}