import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Torneio {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column()
    data: string;

    @Column()
    hora: string;

    @Column()
    premiacao: number;

    @Column()
    regras: string;

}
