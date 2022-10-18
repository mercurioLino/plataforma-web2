import { IsString, IsNumber, Max, Min } from "class-validator";

export class CreateAtendimentoPlataformaOrganizacaoDto {
    @IsString()
    descricao: string;

    @IsNumber()
    @Max(10)
    @Min(0)
    feedback: number;
}
