import { IsDateString } from "class-validator";

export class CreatePartidaEquipeDto {
    @IsDateString()
    data: string;

    @IsDateString()
    hora: string;
}