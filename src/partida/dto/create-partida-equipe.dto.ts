import { Type } from "class-transformer";
import { IsDateString, IsDefined, IsNotEmptyObject, IsNumber, IsObject, ValidateNested } from "class-validator";
import { CreateEquipeDto } from "src/equipe/dto/create-equipe.dto";
import { Equipe } from "src/equipe/entities/equipe.entity";
import { RelationEntityDto } from "src/shared/dto/relation-entity.dto";
import { Torneio } from "src/torneio/entities/torneio.entity";

export class CreatePartidaEquipeDto {
    @IsDateString()
    data: string;

    @IsDateString()
    hora: string;

    @ValidateNested()
    @Type(() => RelationEntityDto)
    @IsObject()
    @IsDefined()
    @IsNotEmptyObject()
    torneio: Torneio;

    @ValidateNested()
    @Type(() => CreateEquipeDto)
    @IsObject()
    @IsDefined()
    @IsNotEmptyObject()
    equipes: Equipe[];
}