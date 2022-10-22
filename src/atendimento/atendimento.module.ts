import { forwardRef, Module } from '@nestjs/common';
import { AtendimentoService } from './atendimento.service';
import { AtendimentoController } from './atendimento.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Atendimento } from './entities/atendimento.entity';
import { JogadorModule } from 'src/jogador/jogador.module';
import { FuncionarioModule } from 'src/funcionario/funcionario.module';

@Module({
  imports: [TypeOrmModule.forFeature([Atendimento]), 
  forwardRef(() => JogadorModule), 
  forwardRef(() => FuncionarioModule)],
  controllers: [AtendimentoController],
  providers: [AtendimentoService],
  exports: [TypeOrmModule]
})
export class AtendimentoModule {}
