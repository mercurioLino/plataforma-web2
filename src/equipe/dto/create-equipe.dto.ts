import { Type } from "class-transformer";
import { IsArray, IsDefined, IsNotEmptyObject, IsObject, IsString, ValidateNested } from "class-validator";
import { CreateJogadorDto } from "src/jogador/dto/create-jogador.dto";
import { Jogador } from "src/jogador/entities/jogador.entity";
import { CreatePartidaEquipeDto } from "src/partida/dto/create-partida-equipe.dto";
import { PartidaEquipe } from "src/partida/entities/partida-equipe.entity";
import { RelationEntityDto } from "src/shared/dto/relation-entity.dto";
import { CreateTorneioEquipeDto } from "src/torneio/dto/create-torneio-equipe.dto";
import { TorneioEquipe } from "src/torneio/entities/torneio-equipe.entity";

export class CreateEquipeDto {
    @IsString()
    nome: string;

    @ValidateNested()
    @Type(() => CreateJogadorDto)
    @IsArray()
    @IsDefined()
    jogadores: Jogador[]

    @ValidateNested()
    @Type(() => CreatePartidaEquipeDto)
    @IsObject()
    @IsDefined()
    partidas: PartidaEquipe[];

    @ValidateNested()
    @Type(() => CreateTorneioEquipeDto)
    @IsObject()
    @IsDefined()
    torneios: TorneioEquipe[];
}
