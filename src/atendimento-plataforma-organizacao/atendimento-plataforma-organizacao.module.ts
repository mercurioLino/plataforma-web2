import { Module } from '@nestjs/common';
import { AtendimentoPlataformaOrganizacaoService } from './atendimento-plataforma-organizacao.service';
import { AtendimentoPlataformaOrganizacaoController } from './atendimento-plataforma-organizacao.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AtendimentoPlataformaOrganizacao } from './entities/atendimento-plataforma-organizacao.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AtendimentoPlataformaOrganizacao])],
  controllers: [AtendimentoPlataformaOrganizacaoController],
  providers: [AtendimentoPlataformaOrganizacaoService]
})
export class AtendimentoPlataformaOrganizacaoModule {}
