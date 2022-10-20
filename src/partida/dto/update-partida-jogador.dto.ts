import { PartialType } from '@nestjs/mapped-types';
import { CreatePartidaJogadorDto } from './create-partida-jogador.dto';

export class UpdatePartidaJogadorDto extends PartialType(CreatePartidaJogadorDto) {}
