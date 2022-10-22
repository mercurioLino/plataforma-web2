import { Module, forwardRef } from '@nestjs/common';
import { FuncionarioService } from './funcionario.service';
import { FuncionarioController } from './funcionario.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Funcionario } from './entities/funcionario.entity';
import { OrganizacaoModule } from 'src/organizacao/organizacao.module';
import { AtendimentoModule } from 'src/atendimento/atendimento.module';

@Module({
  imports: [TypeOrmModule.forFeature([Funcionario]), 
  forwardRef(() => OrganizacaoModule), 
  forwardRef(() => AtendimentoModule)],
  controllers: [FuncionarioController],
  providers: [FuncionarioService]
})
export class FuncionarioModule {}
