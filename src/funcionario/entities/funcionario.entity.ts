import { IsOptional } from "class-validator";
import { Atendimento } from "src/atendimento/entities/atendimento.entity";
import { Organizacao } from "src/organizacao/entities/organizacao.entity";
import { Column, Entity, JoinTable, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Usuario} from "src/usuario/entities/usuario.entity";

@Entity()
export class Funcionario extends Usuario{    
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
