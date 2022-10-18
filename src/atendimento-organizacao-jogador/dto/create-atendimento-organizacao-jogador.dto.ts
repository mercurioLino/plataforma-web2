import { IsNumber, IsString, Max, Min } from "class-validator";

export class CreateAtendimentoOrganizacaoJogadorDto {
    @IsString()
    descricao: string;

    @IsNumber()
    @Max(10)
    @Min(0)
    feedback: number;

}
