import { Module } from '@nestjs/common';
import { AtendimentoPlataformaJogadorService } from './atendimento-plataforma-jogador.service';
import { AtendimentoPlataformaJogadorController } from './atendimento-plataforma-jogador.controller';
import { AtendimentoPlataformaJogador } from './entities/atendimento-plataforma-jogador.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([AtendimentoPlataformaJogador])],
  controllers: [AtendimentoPlataformaJogadorController],
  providers: [AtendimentoPlataformaJogadorService]
})
export class AtendimentoPlataformaJogadorModule {}
