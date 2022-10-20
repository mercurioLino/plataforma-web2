import { Jogador } from "src/jogador/entities/jogador.entity";
import { ChildEntity, JoinTable, ManyToMany } from "typeorm";
import { Partida } from "./partida.entity";

@ChildEntity()
export class PartidaJogador extends Partida{

    @ManyToMany(() => Jogador, (jogador) => jogador.partidas)
    @JoinTable({name: 'jogadores_por_partida'})
    jogadores: Jogador[]
}
