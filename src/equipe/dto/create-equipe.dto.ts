import { Type } from "class-transformer";
import { IsArray, IsDefined, IsNotEmptyObject, IsObject, IsString, ValidateNested } from "class-validator";
import { Jogador } from "src/jogador/entities/jogador.entity";
import { CreatePartidaEquipeDto } from "src/partida/dto/create-partida-equipe.dto";
import { PartidaEquipe } from "src/partida/entities/partida-equipe.entity";
import { RelationEntityDto } from "src/shared/dto/relation-entity.dto";

export class CreateEquipeDto {
    @IsString()
    nome: string;

    @ValidateNested()
    @Type(() => RelationEntityDto)
    @IsArray()
    @IsDefined()
    jogadores: Jogador[]

    @ValidateNested()
    @Type(() => CreatePartidaEquipeDto)
    @IsObject()
    @IsDefined()
    @IsNotEmptyObject()
    partidas: PartidaEquipe[];
}
