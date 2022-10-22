import { IsNumber } from "class-validator";

export class AddEquipeTorneioDto{
    @IsNumber()
    id: number;
}