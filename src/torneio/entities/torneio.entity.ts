import { IsOptional } from "class-validator";
import { Jogo } from "src/jogo/entities/jogo.entity";
import { Organizacao } from "src/organizacao/entities/organizacao.entity";
import { PartidaEquipe } from "src/partida-equipe/entities/partida-equipe.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Torneio {
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
    partidas: PartidaEquipe[];

    @ManyToOne(() => Organizacao, (organizacao) => organizacao.torneios)
    organizacao: Organizacao;

    @ManyToOne(() => Jogo, (jogo) => jogo.torneios)
    jogo: Jogo;
}
