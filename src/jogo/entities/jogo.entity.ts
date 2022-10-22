import { JogadorPerfilJogo } from "src/jogador-perfil-jogo/entities/jogador-perfil-jogo.entity";
import { TorneioIndividual } from "src/torneio/entities/torneio-individual.entity";
import { Torneio } from "src/torneio/entities/torneio.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Jogo{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    nome: string;

    @Column()
    categoria: string;

    @Column()
    regras: string;

    @OneToMany(() => Torneio, (torneio) => torneio.jogo, {
        cascade: true,
        eager: true,
    })
    torneios: Torneio[];

    @OneToMany(() => JogadorPerfilJogo, (perfil) => perfil.jogo, {
        cascade: true,
        eager: true,
    })
    perfis: JogadorPerfilJogo[];
}