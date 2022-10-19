import { Module } from '@nestjs/common';
import { FuncionarioService } from './funcionario.service';
import { FuncionarioController } from './funcionario.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Funcionario } from './entities/funcionario.entity';
import { Atendimento } from 'src/atendimento/entities/atendimento.entity';
import { Organizacao } from 'src/organizacao/entities/organizacao.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Funcionario]), Organizacao, Atendimento],
  controllers: [FuncionarioController],
  providers: [FuncionarioService]
})
export class FuncionarioModule {}
