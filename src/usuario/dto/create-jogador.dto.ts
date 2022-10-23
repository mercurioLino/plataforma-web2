import { PartialType } from "@nestjs/mapped-types";
import { Type } from "class-transformer";
import { IsEmail, IsString, MaxLength, ValidateNested } from "class-validator";
import { Atendimento } from "src/atendimento/entities/atendimento.entity";
import { Equipe } from "src/equipe/entities/equipe.entity";
import { JogadorPerfilJogo } from "src/jogador-perfil-jogo/entities/jogador-perfil-jogo.entity";
import { PartidaIndividual } from "src/partida/entities/partida-individual.entity";
import { RelationEntityDto } from "src/shared/dto/relation-entity.dto";
import { TorneioIndividual } from "src/torneio/entities/torneio-individual.entity";
import { CreateUsuarioDto } from "./create-usuario.dto";

export class CreateJogadorDto extends CreateUsuarioDto{
    @IsString()
    @MaxLength(16)
    nickname: string;

    @IsString()
    nome: string;

    @Type(() => RelationEntityDto)
    equipe: Equipe;

    @ValidateNested()
    @Type(() => RelationEntityDto)
    perfis: JogadorPerfilJogo[]

    @ValidateNested()
    @Type(() => RelationEntityDto)
    atendimentos: Atendimento[]

    @ValidateNested()
    @Type(() => RelationEntityDto)
    partidas: PartidaIndividual[];

    @ValidateNested()
    @Type(() => RelationEntityDto)
    torneios: TorneioIndividual[];
}
