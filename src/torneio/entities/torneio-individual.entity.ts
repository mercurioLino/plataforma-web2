import { Jogador } from "src/jogador/entities/jogador.entity";
import { ChildEntity } from "typeorm";
import { Torneio } from "./torneio.entity";


@ChildEntity()
export class TorneioIndividual extends Torneio {
    jogadores: Jogador[]
}
