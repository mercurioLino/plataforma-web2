import { Type } from "class-transformer";
import { IsArray, IsDefined, IsString, ValidateNested } from "class-validator";
import { JogadorPerfilJogo } from "src/jogador-perfil-jogo/entities/jogador-perfil-jogo.entity";
import { RelationEntityDto } from "src/shared/dto/relation-entity.dto";
import { TorneioIndividual } from "src/torneio-individual/entities/torneio-individual.entity";
import { Torneio } from "src/torneio/entities/torneio.entity";

export class CreateJogoDto {
    @IsString()
    nome: string;
    
    @IsString()
    categoria: string;

    @IsString()
    regras: string;
    
    @ValidateNested()
    @Type(() => RelationEntityDto)
    @IsArray()
    @IsDefined()
    torneios: Torneio[]

    @ValidateNested()
    @Type(() => RelationEntityDto)
    @IsArray()
    @IsDefined()
    torneiosIndividuais: TorneioIndividual[]

    @ValidateNested()
    @Type(() => RelationEntityDto)
    @IsArray()
    @IsDefined()
    perfis: JogadorPerfilJogo[]
}
