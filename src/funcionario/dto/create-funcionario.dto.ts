import { Type } from "class-transformer";
import { IsDate, IsDefined, IsEmail, IsNumber, IsObject, IsString, MaxLength, ValidateNested } from "class-validator";
import { Atendimento } from "src/atendimento/entities/atendimento.entity";
import { Organizacao } from "src/organizacao/entities/organizacao.entity";
import { RelationEntityDto } from "src/shared/dto/relation-entity.dto";

export class CreateFuncionarioDto {

    @IsString()
    @MaxLength(16)
    cpf: string;

    @IsString()
    nome: string;

    @IsString()
    endereco: string;

    @IsDate()
    dataNascimento: Date;

    @IsString()
    @IsEmail()
    email: string;

    @IsString()
    password: string;
    
    @ValidateNested()
    @Type(() => RelationEntityDto)
    @IsObject()
    @IsDefined()
    organizacao: Organizacao;

    @ValidateNested()
    @Type(() => RelationEntityDto)
    @IsObject()
    @IsDefined()
    atendimentos: Atendimento[];
    
}
