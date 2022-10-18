import { IsOptional } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class FuncionarioAdministrador {
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
    static cpf: string;
}