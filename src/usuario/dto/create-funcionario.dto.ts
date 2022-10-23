import { Type } from "class-transformer";
import { IsString, MaxLength, ValidateNested, IsDateString, MinLength } from "class-validator";
import { RelationEntityDto } from "src/shared/dto/relation-entity.dto";
import { Organizacao } from "../entities/organizacao.entity";
import { CreateUsuarioDto } from "./create-usuario.dto";

export class CreateFuncionarioDto extends CreateUsuarioDto{

    @IsString()
    @MaxLength(14)
    @MinLength(11)
    cpf: string;

    @IsString()
    nome: string;

    @IsString()
    endereco: string;

    @IsDateString()
    dataNascimento: string
    
    @Type(() => RelationEntityDto)
    organizacao: Organizacao;
}
