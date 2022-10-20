import { hashSync } from "bcrypt";
import { IsOptional } from "class-validator";
import { Funcionario } from "src/funcionario/entities/funcionario.entity";
import { TorneioIndividual } from "src/torneio/entities/torneio-individual.entity";
import { Torneio } from "src/torneio/entities/torneio.entity";
import { BeforeInsert, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

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
    
    @BeforeInsert()
    hashPassword() {
      this.password = hashSync(this.password, 10);
    }

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
