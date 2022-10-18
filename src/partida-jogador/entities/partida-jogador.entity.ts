import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class PartidaJogador {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    data: string;

    @Column()
    hora: string;
}
