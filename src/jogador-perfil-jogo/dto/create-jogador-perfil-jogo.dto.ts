import { Type } from "class-transformer";
import { IsDefined, IsObject, IsString, ValidateNested } from "class-validator";
import { Jogo } from "src/jogo/entities/jogo.entity";
import { RelationEntityDto } from "src/shared/dto/relation-entity.dto";
import { Jogador } from "src/usuario/entities/jogador.entity";

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
