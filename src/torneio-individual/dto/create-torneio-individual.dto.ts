import { Type } from "class-transformer";
import { IsString, IsDateString, IsNumber, IsPositive, ValidateNested, IsArray, IsDefined, IsObject } from "class-validator";
import { Jogo } from "src/jogo/entities/jogo.entity";
import { Organizacao } from "src/organizacao/entities/organizacao.entity";
import { PartidaJogador } from "src/partida-jogador/entities/partida-jogador.entity";
import { RelationEntityDto } from "src/shared/dto/relation-entity.dto";

export class CreateTorneioIndividualDto {
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
    partidas: PartidaJogador[]

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
