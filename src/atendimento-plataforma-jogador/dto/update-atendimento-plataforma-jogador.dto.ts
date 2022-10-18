import { PartialType } from '@nestjs/mapped-types';
import { CreateAtendimentoPlataformaJogadorDto } from './create-atendimento-plataforma-jogador.dto';

export class UpdateAtendimentoPlataformaJogadorDto extends PartialType(CreateAtendimentoPlataformaJogadorDto) {}
