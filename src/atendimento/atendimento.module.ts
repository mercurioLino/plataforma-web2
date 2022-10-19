import { Module } from '@nestjs/common';
import { AtendimentoService } from './atendimento.service';
import { AtendimentoController } from './atendimento.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Atendimento } from './entities/atendimento.entity';
import { Jogador } from 'src/jogador/entities/jogador.entity';
import { Funcionario } from 'src/funcionario/entities/funcionario.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Atendimento]), Jogador, Funcionario],
  controllers: [AtendimentoController],
  providers: [AtendimentoService],
  exports: [TypeOrmModule]
})
export class AtendimentoModule {}
