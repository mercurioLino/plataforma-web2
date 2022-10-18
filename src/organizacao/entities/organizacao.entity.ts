import { IsOptional } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Organizacao {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 14})
    cnpj: string;

    @Column()
    razaoSocial: string;

    @IsOptional()
    nomeFantasia: string;
}
