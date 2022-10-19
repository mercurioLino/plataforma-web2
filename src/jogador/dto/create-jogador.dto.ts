import { Type } from "class-transformer";
import { IsArray, IsDefined, IsEmail, IsNotEmptyObject, IsObject, IsString, MaxLength, ValidateNested } from "class-validator";
import { Atendimento } from "src/atendimento/entities/atendimento.entity";
import { Equipe } from "src/equipe/entities/equipe.entity";
import { JogadorPerfilJogo } from "src/jogador-perfil-jogo/entities/jogador-perfil-jogo.entity";
import { CreatePartidaJogadorDto } from "src/partida-jogador/dto/create-partida-jogador.dto";
import { PartidaJogador } from "src/partida-jogador/entities/partida-jogador.entity";
import { RelationEntityDto } from "src/shared/dto/relation-entity.dto";

export class CreateJogadorDto {
    @IsString()
    @MaxLength(16)
    nickname: string;

    @IsString()
    nome: string;

    @IsString()
    @IsEmail()
    email: string;

    @ValidateNested()
    @Type(() => RelationEntityDto)
    @IsObject()
    @IsDefined()
    equipe: Equipe;

    @ValidateNested()
    @Type(() => RelationEntityDto)
    @IsArray()
    @IsDefined()
    perfis: JogadorPerfilJogo[]

    @ValidateNested()
    @Type(() => RelationEntityDto)
    @IsArray()
    @IsDefined()
    atendimentos: Atendimento[]

    @ValidateNested()
    @Type(() => CreatePartidaJogadorDto)
    @IsObject()
    @IsDefined()
    @IsNotEmptyObject()
    partidas: PartidaJogador[];
}
