import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class AtendimentoPlataformaJogador {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    descricao: string;

    @Column()
    status: string;

    @Column()
    feedback: number;
}
