import { Jogo } from "src/jogo/entities/jogo.entity";
import { Organizacao } from "src/organizacao/entities/organizacao.entity";
import { PartidaEquipe } from "src/partida-equipe/entities/partida-equipe.entity";
import { PartidaJogador } from "src/partida-jogador/entities/partida-jogador.entity";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm";

@Entity()
export class TorneioIndividual {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column()
    data: string;

    @Column()
    hora: string;

    @Column()
    premiacao: number;

    @Column()
    regras: string;

    @OneToMany(() => PartidaEquipe, (partida) => partida.torneio, {
        cascade: true,
        eager: true,
    })
    partidas: PartidaJogador[];

    @ManyToOne(() => Organizacao, (organizacao) => organizacao.torneios)
    organizacao: Organizacao;

    @ManyToOne(() => Jogo, (jogo) => jogo.torneios)
    jogo: Jogo;
}
