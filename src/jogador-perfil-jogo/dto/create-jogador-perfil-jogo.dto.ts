import { IsString } from "class-validator";

export class CreateJogadorPerfilJogoDto {
    @IsString()
    nickname: string;

    @IsString()
    elo: string;
}
