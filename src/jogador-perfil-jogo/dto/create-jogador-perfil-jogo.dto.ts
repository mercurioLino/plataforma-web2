import { Type } from "class-transformer";
import { IsDefined, IsObject, IsString, ValidateNested } from "class-validator";
import { Jogador } from "src/jogador/entities/jogador.entity";
import { Jogo } from "src/jogo/entities/jogo.entity";
import { RelationEntityDto } from "src/shared/dto/relation-entity.dto";

export class CreateJogadorPerfilJogoDto {
    @IsString()
    nickname: string;

    @IsString()
    elo: string;

    @ValidateNested()
    @Type(() => RelationEntityDto)
    @IsObject()
    @IsDefined()
    jogo: Jogo;

    @ValidateNested()
    @Type(() => RelationEntityDto)
    @IsObject()
    @IsDefined()
    jogador: Jogador;
}
