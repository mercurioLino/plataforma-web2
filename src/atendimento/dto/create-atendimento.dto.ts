import { Type } from "class-transformer";
import { IsString, IsNumber, Max, Min, ValidateNested, IsObject, IsDefined } from "class-validator";
import { Funcionario } from "src/funcionario/entities/funcionario.entity";
import { Jogador } from "src/jogador/entities/jogador.entity";
import { RelationEntityDto } from "src/shared/dto/relation-entity.dto";

export class CreateAtendimentoDto {
    @IsString()
    descricao: string;

    @IsNumber()
    @Max(10)
    @Min(0)
    feedback: number;

    @ValidateNested()
    @Type(() => RelationEntityDto)
    @IsObject()
    @IsDefined()
    jogador: Jogador;

    @ValidateNested()
    @Type(() => RelationEntityDto)
    @IsObject()
    @IsDefined()
    funcionario: Funcionario;
}
