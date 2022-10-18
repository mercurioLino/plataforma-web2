import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class PartidaEquipe {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    data: string;

    @Column()
    hora: string;
}
