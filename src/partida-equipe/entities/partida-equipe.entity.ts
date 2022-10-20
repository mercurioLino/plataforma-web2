import { Equipe } from "src/equipe/entities/equipe.entity";
import { Partida } from "src/partida/partida";
import { Torneio } from "src/torneio/entities/torneio.entity";
import { ChildEntity, Entity, JoinTable, ManyToMany, ManyToOne } from "typeorm";

@Entity()
export class PartidaEquipe extends Partida{

    @ManyToOne(() => Torneio, (torneio) => torneio.partidas)
    torneio: Torneio;

    @ManyToMany(() => Equipe, (equipe) => equipe.partidas)
    @JoinTable({name: 'equipes_por_partida'})
    equipes: Equipe[]
}
