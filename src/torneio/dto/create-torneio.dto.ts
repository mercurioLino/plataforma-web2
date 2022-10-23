import { Type } from "class-transformer";
import { IsString, IsDateString, IsNumber, IsPositive, ValidateNested, IsArray, IsDefined, IsObject, IsNotEmpty } from "class-validator";
import { Jogo } from "src/jogo/entities/jogo.entity";
import { Organizacao } from "src/organizacao/entities/organizacao.entity";
import { CreatePartidaDto } from "src/partida/dto/create-partida.dto";
import { Partida } from "src/partida/entities/partida.entity";
import { RelationEntityDto } from "src/shared/dto/relation-entity.dto";

export class CreateTorneioDto {
    @IsString()
    @IsNotEmpty()
    nome: string;

    @IsDateString()
    @IsNotEmpty()
    data: string;

    @IsDateString()
    @IsNotEmpty()
    hora: string;

    @IsNumber()
    @IsPositive()
    @IsNotEmpty()
    premiacao: number;

    @IsString()
    @IsNotEmpty()
    regras: string;

    @ValidateNested()
    @Type(() => CreatePartidaDto)
    @IsArray()
    @IsDefined()
    partidas: Partida[]

    @ValidateNested()
    @Type(() => RelationEntityDto)
    @IsObject()
    @IsDefined()
    organizacao: Organizacao;

    @ValidateNested()
    @Type(() => RelationEntityDto)
    @IsObject()
    @IsDefined()
    jogo: Jogo;
}