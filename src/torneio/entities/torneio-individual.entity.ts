import { Jogador } from "src/jogador/entities/jogador.entity";
import { ChildEntity, JoinTable, ManyToMany } from "typeorm";
import { Torneio } from "./torneio.entity";

@ChildEntity()
export class TorneioIndividual extends Torneio {
    @ManyToMany(() => Jogador, (jogador) => jogador.torneios)
    @JoinTable({name: 'jogadores_por_torneio'})
    jogadores: Jogador[]
}
