import { IsOptional } from "class-validator";
import { Funcionario } from "src/funcionario/entities/funcionario.entity";
import { TorneioIndividual } from "src/torneio-individual/entities/torneio-individual.entity";
import { Torneio } from "src/torneio/entities/torneio.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Organizacao {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 14})
    cnpj: string;

    @Column()
    razaoSocial: string;

    @Column({unique: true})
    email: string;

    @Column({select: false})
    password: string;

    @IsOptional()
    nomeFantasia: string;

    @OneToMany(() => Torneio, (torneio) => torneio.organizacao, {
        cascade: true,
        eager: true,
    })
    torneios: Torneio[];

    @OneToMany(() => TorneioIndividual, (torneio) => torneio.organizacao, {
        cascade: true,
        eager: true,
    })
    torneiosIndividuais: TorneioIndividual[];

    @OneToMany(() => Funcionario, (funcionario) => funcionario.organizacao, {
        cascade: true,
        eager: true,
    })
    funcionarios: Funcionario[];

}
