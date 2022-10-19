import { Type } from "class-transformer";
import { IsArray, IsDate, IsDateString, IsDefined, IsNumber, IsObject, IsOptional, IsPositive, IsString, ValidateNested } from "class-validator";
import { Jogo } from "src/jogo/entities/jogo.entity";
import { Organizacao } from "src/organizacao/entities/organizacao.entity";
import { PartidaEquipe } from "src/partida-equipe/entities/partida-equipe.entity";
import { RelationEntityDto } from "src/shared/dto/relation-entity.dto";

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

    @ValidateNested()
    @Type(() => RelationEntityDto)
    @IsArray()
    @IsDefined()
    partidas: PartidaEquipe[]

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
