import { PartialType } from '@nestjs/mapped-types';
import { CreateAtendimentoOrganizacaoJogadorDto } from './create-atendimento-organizacao-jogador.dto';

export class UpdateAtendimentoOrganizacaoJogadorDto extends PartialType(CreateAtendimentoOrganizacaoJogadorDto) {}
