import { Torneio } from "src/torneio/entities/torneio.entity";
import { PrimaryGeneratedColumn, Column, Entity, TableInheritance, ManyToOne } from "typeorm";

@Entity()
@TableInheritance({column: {type: "varchar", name: "partidas"}})
export class Partida{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    data: string;

    @Column()
    hora: string;

    @ManyToOne(() => Torneio, (torneio) => torneio.partidas)
    torneio: Torneio;
}