import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class AtendimentoOrganizacaoJogador {
    
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    descricao: string;

    @Column()
    status: string;

    @Column()
    feedback: number;
}
