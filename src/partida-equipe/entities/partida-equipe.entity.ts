import { Equipe } from "src/equipe/entities/equipe.entity";
import { Torneio } from "src/torneio/entities/torneio.entity";
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class PartidaEquipe {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    data: string;

    @Column()
    hora: string;

    @ManyToOne(() => Torneio, (torneio) => torneio.partidas)
    torneio: Torneio;

    @ManyToMany(() => Equipe, (equipe) => equipe.partidas)
    @JoinTable({name: 'equipes_por_partida'})
    equipes: Equipe[]
}
