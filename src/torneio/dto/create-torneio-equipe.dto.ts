import { Type } from "class-transformer";
import { ValidateNested, IsObject, IsDefined } from "class-validator";
import { CreateEquipeDto } from "src/equipe/dto/create-equipe.dto";
import { Equipe } from "src/equipe/entities/equipe.entity";
import { CreateTorneioDto } from "./create-torneio.dto";

export class CreateTorneioEquipeDto extends CreateTorneioDto{
    @ValidateNested()
    @Type(() => CreateEquipeDto)
    @IsObject()
    @IsDefined()
    equipes: Equipe[];
}