import { IsDate, IsDateString, IsNumber, IsPositive, IsString } from "class-validator";

export class CreateTorneioDto {
    @IsString()
    nome: string;

    @IsDateString()
    data: string;

    @IsDateString()
    hora: string;

    @IsNumber()
    @IsPositive()
    premiacao: number;

    @IsString()
    regras: string;
}
