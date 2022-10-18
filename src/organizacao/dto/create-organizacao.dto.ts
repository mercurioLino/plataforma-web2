import { IsNumberString, IsOptional, IsString, MaxLength, MinLength } from "class-validator";

export class CreateOrganizacaoDto {
    @IsNumberString()
    @MinLength(14)
    @MaxLength(14)
    cnpj: string;

    @IsString()
    razaoSocial: string;

    @IsString()
    @IsOptional()
    nomeFantasia: string;
}
