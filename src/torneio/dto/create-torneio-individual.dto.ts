import { Type } from "class-transformer";
import { ValidateNested, IsObject, IsDefined, IsNotEmptyObject } from "class-validator";
import { CreateJogadorDto } from "src/jogador/dto/create-jogador.dto";
import { Jogador } from "src/jogador/entities/jogador.entity";
import { CreateTorneioDto } from "./create-torneio.dto";

export class CreateTorneioIndividualDto extends CreateTorneioDto{
    @ValidateNested()
    @Type(() => CreateJogadorDto)
    @IsObject()
    @IsDefined()
    jogadores: Jogador[];
}
