import { hashSync } from "bcrypt";
import { BeforeInsert, PrimaryGeneratedColumn, Column, Entity, TableInheritance } from "typeorm";

export abstract class Usuario {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({unique: true})
    email: string;

    @Column({select: false})
    password: string;

    @BeforeInsert()
    hashPassword() {
      this.password = hashSync(this.password, 10);
    }
}
