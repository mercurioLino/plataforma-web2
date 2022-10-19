import { Jogador } from "src/jogador/entities/jogador.entity";
import { Jogo } from "src/jogo/entities/jogo.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class JogadorPerfilJogo {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    nickname: string;

    @Column()
    elo: string;

    @ManyToOne(() => Jogo, (jogo) => jogo.perfis)
    jogo: Jogo;

    @ManyToOne(() => Jogador, (jogador) => jogador.perfis)
    jogador: Jogador;
}
