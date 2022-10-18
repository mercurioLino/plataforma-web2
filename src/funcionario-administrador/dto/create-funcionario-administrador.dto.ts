import { IsDate, IsEmail, IsNumber, IsString, MaxLength } from "class-validator";

export class CreateFuncionarioAdministradorDto {
    @IsString()
    @MaxLength(16)
    cpf: string;

    @IsString()
    nome: string;

    @IsString()
    endereco: string;

    @IsDate()
    dataNascimento: Date;
}
