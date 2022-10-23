import { Type } from "class-transformer";
import { IsDateString, ValidateNested, IsObject, IsDefined, IsNotEmptyObject } from "class-validator";
import { RelationEntityDto } from "src/shared/dto/relation-entity.dto";
import { Torneio } from "src/torneio/entities/torneio.entity";
import { JoinColumn } from "typeorm";

export class CreatePartidaDto {
    @IsDateString()
    data: string;

    @IsDateString()
    hora: string;

    @Type(() => RelationEntityDto)
    torneio: Torneio;   
}