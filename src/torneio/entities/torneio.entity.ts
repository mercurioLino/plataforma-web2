import { Jogo } from "src/jogo/entities/jogo.entity";
import { Organizacao } from "src/organizacao/entities/organizacao.entity";
import { Partida } from "src/partida/entities/partida.entity";
import { Entity, TableInheritance, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm";

@Entity()
@TableInheritance({column: {type: "varchar", name: "tipo"}})
export class Torneio{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    data: string;

    @Column()
    hora: string;

    @Column()
    qtdParticipantes: number;

    @OneToMany(() => Partida, (partida) => partida.torneio, {
        cascade: true,
        eager: true,
    })
    partidas: Partida[];
    
    @ManyToOne(() => Organizacao, (organizacao) => organizacao.torneios)
    organizacao: Organizacao;

    @ManyToOne(() => Jogo, (jogo) => jogo.torneios)
    jogo: Jogo;
}