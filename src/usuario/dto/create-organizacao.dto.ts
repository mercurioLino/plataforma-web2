import { IsNumberString, IsOptional, IsString, MaxLength, MinLength } from "class-validator";
import { CreateUsuarioDto } from "./create-usuario.dto";
export class CreateOrganizacaoDto extends CreateUsuarioDto{
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
