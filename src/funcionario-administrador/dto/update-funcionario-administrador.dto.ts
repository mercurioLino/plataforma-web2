import { PartialType } from '@nestjs/mapped-types';
import { CreateFuncionarioAdministradorDto } from './create-funcionario-administrador.dto';

export class UpdateFuncionarioAdministradorDto extends PartialType(CreateFuncionarioAdministradorDto) {}
