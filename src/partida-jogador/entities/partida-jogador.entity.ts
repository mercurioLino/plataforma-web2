import { Jogador } from "src/jogador/entities/jogador.entity";
import { TorneioIndividual } from "src/torneio-individual/entities/torneio-individual.entity";
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class PartidaJogador {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    data: string;

    @Column()
    hora: string;

    @ManyToOne(() => TorneioIndividual, (torneio) => torneio.partidas)
    torneio: TorneioIndividual;

    @ManyToMany(() => Jogador, (jogador) => jogador.partidas)
    @JoinTable({name: 'jogadores_por_partida'})
    jogadores: Jogador[]
}
