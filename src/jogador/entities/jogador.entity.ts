import { IsOptional } from "class-validator";
import { Atendimento } from "src/atendimento/entities/atendimento.entity";
import { Equipe } from "src/equipe/entities/equipe.entity";
import { JogadorPerfilJogo } from "src/jogador-perfil-jogo/entities/jogador-perfil-jogo.entity";
import { PartidaIndividual } from "src/partida/entities/partida-individual.entity";
import { Partida } from "src/partida/entities/partida.entity";
import { TorneioIndividual } from "src/torneio/entities/torneio-individual.entity";
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

    @ManyToMany(() => PartidaIndividual, (partida) => partida.jogadores, {
        cascade: true,
        eager: true,
    })
    @JoinTable({name: 'jogadores_por_partida'})
    partidas: PartidaIndividual[]

    @ManyToMany(() => TorneioIndividual, (torneio) => torneio.jogadores, {
        cascade: true,
        eager: true,
    })
    @JoinTable({name: 'jogadores_por_torneio'})
    torneios: TorneioIndividual[]

    
}
