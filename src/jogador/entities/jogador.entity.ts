import { IsOptional } from "class-validator";
import { Atendimento } from "src/atendimento/entities/atendimento.entity";
import { Equipe } from "src/equipe/entities/equipe.entity";
import { JogadorPerfilJogo } from "src/jogador-perfil-jogo/entities/jogador-perfil-jogo.entity";
import { PartidaJogador } from "src/partida-jogador/entities/partida-jogador.entity";
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

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

    @IsOptional()
    pontuacao: number = 0;

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

    @ManyToMany(() => PartidaJogador, (partida) => partida.jogadores, {
        cascade: true,
        eager: true,
    })
    @JoinTable({name: 'jogadores_por_partida'})
    partidas: PartidaJogador[]
}
