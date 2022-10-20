import { Jogador } from "src/jogador/entities/jogador.entity";
import { Partida } from "src/partida/partida";
import { TorneioIndividual } from "src/torneio-individual/entities/torneio-individual.entity";
import { ChildEntity, Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class PartidaJogador extends Partida{

    @ManyToOne(() => TorneioIndividual, (torneio) => torneio.partidas)
    torneio: TorneioIndividual;

    @ManyToMany(() => Jogador, (jogador) => jogador.partidas)
    @JoinTable({name: 'jogadores_por_partida'})
    jogadores: Jogador[]
}
