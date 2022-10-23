import { IsOptional } from "class-validator";
import { Jogador } from "src/jogador/entities/jogador.entity";
import { PartidaEquipe } from "src/partida/entities/partida-equipe.entity";
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
}

