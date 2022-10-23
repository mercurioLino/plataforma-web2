import { Atendimento } from "src/atendimento/entities/atendimento.entity";
import { Equipe } from "src/equipe/entities/equipe.entity";
import { JogadorPerfilJogo } from "src/jogador-perfil-jogo/entities/jogador-perfil-jogo.entity";
import { Entity, Column, ManyToOne, OneToMany } from "typeorm";
import { Usuario } from 'src/usuario/entities/usuario.entity';

@Entity() 
export class Jogador extends Usuario{
    @Column()
    nome: string;

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
}
