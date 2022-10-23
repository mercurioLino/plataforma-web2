import { Type } from "class-transformer";
import { IsArray, IsDateString, IsDefined, IsNotEmptyObject, IsObject, ValidateNested } from "class-validator";
import { RelationEntityDto } from "src/shared/dto/relation-entity.dto";
import { TorneioIndividual } from "src/torneio/entities/torneio-individual.entity";
import { Jogador } from "src/usuario/entities/jogador.entity";

export class CreatePartidaIndividualDto {
    @ValidateNested()
    @Type(() => RelationEntityDto)
    jogadores: Jogador[];
}
