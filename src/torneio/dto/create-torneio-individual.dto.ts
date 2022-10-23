import { Type } from "class-transformer";
import { ValidateNested, IsObject, IsDefined } from "class-validator";
import { Jogador } from "src/jogador/entities/jogador.entity";
import { RelationEntityDto } from "src/shared/dto/relation-entity.dto";
import { CreateTorneioDto } from "./create-torneio.dto";

export class CreateTorneioIndividualDto extends CreateTorneioDto{
    @ValidateNested()
    @Type(() => RelationEntityDto)
    @IsObject()
    @IsDefined()
    jogadores: Jogador[];
}
