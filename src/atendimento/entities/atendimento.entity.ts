import { Funcionario } from "src/funcionario/entities/funcionario.entity";
import { Jogador } from "src/jogador/entities/jogador.entity";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";

@Entity()
export class Atendimento {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    descricao: string;

    @Column()
    status: string;

    @Column()
    feedback: number;

    @ManyToOne(() => Jogador, (jogador) => jogador.atendimentos)
    jogador: Jogador;

    @ManyToOne(() => Funcionario, (funcionario) => funcionario.atendimentos)
    funcionario: Funcionario;
}