import { Type } from "class-transformer";
import { IsDateString, IsDefined, IsNotEmptyObject, IsObject, ValidateNested } from "class-validator";
import { CreateJogadorDto } from "src/jogador/dto/create-jogador.dto";
import { Jogador } from "src/jogador/entities/jogador.entity";
import { RelationEntityDto } from "src/shared/dto/relation-entity.dto";
import { TorneioIndividual } from "src/torneio/entities/torneio-individual.entity";

export class CreatePartidaJogadorDto {
    @IsDateString()
    data: string;

    @IsDateString()
    hora: string;

    @ValidateNested()
    @Type(() => RelationEntityDto)
    @IsObject()
    @IsDefined()
    @IsNotEmptyObject()
    torneio: TorneioIndividual;

    @ValidateNested()
    @Type(() => CreateJogadorDto)
    @IsObject()
    @IsDefined()
    @IsNotEmptyObject()
    jogadores: Jogador[];
}
