import { IsNumber, IsString, Max, Min } from "class-validator";

export class CreateAtendimentoPlataformaJogadorDto {
    @IsString()
    descricao: string;

    @IsNumber()
    @Max(10)
    @Min(0)
    feedback: number;
}
