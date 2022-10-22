import { Type } from "class-transformer";
import { IsArray, IsDefined, IsEmail, IsObject, IsString, MaxLength, ValidateNested } from "class-validator";
import { Atendimento } from "src/atendimento/entities/atendimento.entity";
import { Equipe } from "src/equipe/entities/equipe.entity";
import { JogadorPerfilJogo } from "src/jogador-perfil-jogo/entities/jogador-perfil-jogo.entity";
import { CreatePartidaIndividualDto } from "src/partida/dto/create-partida-individual.dto";
import { PartidaIndividual } from "src/partida/entities/partida-individual.entity";
import { RelationEntityDto } from "src/shared/dto/relation-entity.dto";
import { CreateTorneioIndividualDto } from "src/torneio/dto/create-torneio-individual.dto";
import { TorneioIndividual } from "src/torneio/entities/torneio-individual.entity";

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
    @Type(() => RelationEntityDto)
    @IsObject()
    @IsDefined()
    partidas: PartidaIndividual[];

    @ValidateNested()
    @Type(() => RelationEntityDto)
    @IsObject()
    @IsDefined()
    torneios: TorneioIndividual[];
}
