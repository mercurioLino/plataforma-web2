import { Module } from '@nestjs/common';
import { FuncionarioAdministradorService } from './funcionario-administrador.service';
import { FuncionarioAdministradorController } from './funcionario-administrador.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FuncionarioAdministrador } from './entities/funcionario-administrador.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FuncionarioAdministrador])],
  controllers: [FuncionarioAdministradorController],
  providers: [FuncionarioAdministradorService]
})
export class FuncionarioAdministradorModule {}
