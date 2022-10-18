import { PartialType } from '@nestjs/mapped-types';
import { CreateFuncionarioModeradorDto } from './create-funcionario-moderador.dto';

export class UpdateFuncionarioModeradorDto extends PartialType(CreateFuncionarioModeradorDto) {}
