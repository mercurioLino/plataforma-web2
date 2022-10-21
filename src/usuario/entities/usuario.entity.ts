import { PrimaryGeneratedColumn, Column } from "typeorm";

export class Usuario {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({unique: true})
    email: string;

    @Column({select: false})
    password: string;
}
