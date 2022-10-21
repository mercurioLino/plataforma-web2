import { IsOptional } from "class-validator";
import { Jogador } from "src/jogador/entities/jogador.entity";
import { PartidaEquipe } from "src/partida/entities/partida-equipe.entity";
import { TorneioEquipe } from "src/torneio/entities/torneio-equipe.entity";
import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Equipe {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @IsOptional()
    pontuacao = 0;

    @OneToMany(() => Jogador, (jogador) => jogador.equipe, {
        cascade: true,
        eager: true,
    })
    jogadores: Jogador[];

    @ManyToMany(() => PartidaEquipe, (partida) => partida.equipes, {
        cascade: true,
        eager: true,
    })
    @JoinTable({name: 'equipes_por_partida'})
    partidas: PartidaEquipe[]

    @ManyToMany(() => TorneioEquipe, (torneio) => torneio.equipes, {
        cascade: true,
        eager: true,
    })
    @JoinTable({name: 'equipes_por_torneio'})
    torneios: TorneioEquipe[]
}

