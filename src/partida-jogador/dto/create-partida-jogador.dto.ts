import { IsDateString } from "class-validator";

export class CreatePartidaJogadorDto {
    @IsDateString()
    data: string;

    @IsDateString()
    hora: string;
}
