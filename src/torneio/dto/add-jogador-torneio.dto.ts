import { IsNumber } from "class-validator";

export class AddJogadorTorneioDto{
    @IsNumber()
    id: number;
}