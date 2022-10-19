import { IsOptional } from "class-validator";
import { Atendimento } from "src/atendimento/entities/atendimento.entity";
import { Organizacao } from "src/organizacao/entities/organizacao.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Funcionario {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    cpf: string;

    @Column()
    nome: string;

    @Column()
    endereco: string;

    @Column()
    dataNascimento: Date;

    @ManyToOne(() => Organizacao, (organizacao) => organizacao.torneios)
    organizacao: Organizacao;

    @OneToMany(() => Atendimento, (atendimento) => atendimento.funcionario, {
        cascade: true,
        eager: true,
    })
    atendimentos: Atendimento[];
    
}
