import { PartialType } from '@nestjs/mapped-types';
import { CreateAtendimentoPlataformaOrganizacaoDto } from './create-atendimento-plataforma-organizacao.dto';

export class UpdateAtendimentoPlataformaOrganizacaoDto extends PartialType(CreateAtendimentoPlataformaOrganizacaoDto) {}
