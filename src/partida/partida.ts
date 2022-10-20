import { PrimaryGeneratedColumn, Column, Entity, TableInheritance } from "typeorm";

@Entity()
@TableInheritance({column: {type: "varchar", name: "partidas"}})
export abstract class Partida{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    data: string;

    @Column()
    hora: string;
}