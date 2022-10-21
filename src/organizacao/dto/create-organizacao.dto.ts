import { Type } from "class-transformer";
import { IsArray, IsDefined, IsEmail, IsNumberString, IsOptional, IsString, MaxLength, MinLength, ValidateNested } from "class-validator";
import { Funcionario } from "src/funcionario/entities/funcionario.entity";
import { RelationEntityDto } from "src/shared/dto/relation-entity.dto";
import { TorneioIndividual } from "src/torneio/entities/torneio-individual.entity";
import { Torneio } from "src/torneio/entities/torneio.entity";

export class CreateOrganizacaoDto {
    @IsNumberString()
    @MinLength(14)
    @MaxLength(14)
    cnpj: string;

    @IsString()
    razaoSocial: string;

    @IsEmail()
    email: string;

    @IsString()
    password: string;

    @IsString()
    @IsOptional()
    nomeFantasia: string;

    @ValidateNested()
    @Type(() => RelationEntityDto)
    @IsArray()
    @IsDefined()
    torneios: Torneio[]

    @ValidateNested()
    @Type(() => RelationEntityDto)
    @IsArray()
    @IsDefined()
    funcionarios: Funcionario[]
}
