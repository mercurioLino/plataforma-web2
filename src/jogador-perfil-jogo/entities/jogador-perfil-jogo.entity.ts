import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class JogadorPerfilJogo {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    nickname: string;

    @Column()
    elo: string;
}
