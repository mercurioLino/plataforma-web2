import { TorneioIndividual } from 'src/torneio/entities/torneio-individual.entity';

import { Atendimento } from "src/atendimento/entities/atendimento.entity";
import { Equipe } from "src/equipe/entities/equipe.entity";
import { JogadorPerfilJogo } from "src/jogador-perfil-jogo/entities/jogador-perfil-jogo.entity";
import { PartidaIndividual } from "src/partida/entities/partida-individual.entity";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, ManyToMany, JoinTable } from "typeorm";

@Entity() 
export class Jogador {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column()
    email: string;

    @Column()
    nickname: string;

    @Column()
    pontuacao: number;

    @ManyToOne(() => Equipe, (equipe) => equipe.jogadores)
    equipe: Equipe;

    @OneToMany(() => JogadorPerfilJogo, (perfil) => perfil.jogador, {
        cascade: true,
        eager: true,
    })
    perfis: JogadorPerfilJogo[];

    @OneToMany(() => Atendimento, (atendimento) => atendimento.jogador, {
        cascade: true,
        eager: true,
    })
    atendimentos: Atendimento[];

    @ManyToMany(() => PartidaIndividual, (partida) => partida.jogadores, {
        cascade: true,
    })
    @JoinTable({name: 'jogadores_por_partida'})
    partidas: PartidaIndividual[]

}
