import { Element } from "src/element/entities/element.entity";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Sort {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({nullable:false})
    nom: string

    @Column({nullable:false})
    description: string

    @ManyToMany(() => Element)
    @JoinTable()
    elementRequis: Element[]

    getCoutChakra(){
        let coutChakra:number = 0
        return this.elementRequis.map(elementRequis => coutChakra = (1 + elementRequis.niveau))
    }
}
