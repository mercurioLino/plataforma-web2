import { RelationEntityDto } from './../../shared/dto/relation-entity.dto';
import { Type } from "class-transformer";
import { IsArray, IsDefined, IsObject, IsString, ValidateNested } from "class-validator";
import { CreatePartidaEquipeDto } from "src/partida/dto/create-partida-equipe.dto";
import { PartidaEquipe } from "src/partida/entities/partida-equipe.entity";
import { TorneioEquipe } from "src/torneio/entities/torneio-equipe.entity";
import { CreateJogadorDto } from 'src/usuario/dto/create-jogador.dto';
import { Jogador } from 'src/usuario/entities/jogador.entity';

export class CreateEquipeDto {
    @IsString()
    nome: string;

    @ValidateNested()
    @Type(() => CreateJogadorDto)
    jogadores: Jogador[]

    @ValidateNested()
    @Type(() => CreatePartidaEquipeDto)
    partidas: PartidaEquipe[];

    @ValidateNested()
    @Type(() => RelationEntityDto)
    torneios: TorneioEquipe[];
}
