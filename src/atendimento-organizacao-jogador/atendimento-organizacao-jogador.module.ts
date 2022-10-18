import { Module } from '@nestjs/common';
import { AtendimentoOrganizacaoJogadorService } from './atendimento-organizacao-jogador.service';
import { AtendimentoOrganizacaoJogadorController } from './atendimento-organizacao-jogador.controller';
import { AtendimentoOrganizacaoJogador } from './entities/atendimento-organizacao-jogador.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([AtendimentoOrganizacaoJogador])],
  controllers: [AtendimentoOrganizacaoJogadorController],
  providers: [AtendimentoOrganizacaoJogadorService]
})
export class AtendimentoOrganizacaoJogadorModule {}
