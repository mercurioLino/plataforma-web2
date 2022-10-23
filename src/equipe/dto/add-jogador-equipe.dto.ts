import { IsNumber } from "class-validator";

export class AddJogadorEquipeDto{
    @IsNumber()
    id: number;
}