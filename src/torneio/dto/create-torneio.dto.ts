import { Type } from "class-transformer";
import { IsString, IsDateString, IsNumber, IsPositive, ValidateNested, IsDefined, IsObject, IsNotEmpty } from "class-validator";
import { Jogo } from "src/jogo/entities/jogo.entity";
import { CreatePartidaDto } from "src/partida/dto/create-partida.dto";
import { Partida } from "src/partida/entities/partida.entity";
import { RelationEntityDto } from "src/shared/dto/relation-entity.dto";
import { Organizacao } from "src/usuario/entities/organizacao.entity";

export class CreateTorneioDto {
    @IsString()
    @IsNotEmpty()
    nome: string;

    @IsDateString()
    data: string;

    @IsString()
    hora: string;

    @IsNumber()
    @IsPositive()
    premiacao: number;

    @IsString()
    regras: string;

    @Type(() => RelationEntityDto)
    organizacao: Organizacao;

    @Type(() => RelationEntityDto)  
    jogo: Jogo;

    @ValidateNested()
    @Type(() => CreatePartidaDto)   
    partidas: Partida[]
}