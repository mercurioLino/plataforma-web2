import { Equipe } from "src/equipe/entities/equipe.entity";
import { ChildEntity, Entity, JoinTable, ManyToMany, ManyToOne } from "typeorm";
import { Partida } from "./partida.entity";

@ChildEntity()
export class PartidaEquipe extends Partida{
    @ManyToMany(() => Equipe, (equipe) => equipe.partidas)
    @JoinTable({name: 'equipes_por_partida'})
    equipes: Equipe[]
}
