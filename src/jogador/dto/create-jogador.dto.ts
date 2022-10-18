import { IsEmail, IsNumber, IsString, MaxLength } from "class-validator";

export class CreateJogadorDto {
    @IsString()
    @MaxLength(16)
    nickname: string;

    @IsString()
    nome: string;

    @IsString()
    @IsEmail()
    email: string;
}
