import { IsNumber } from "class-validator";

export class RemoveJogadorTorneioDto{
    @IsNumber()
    id: number;
}