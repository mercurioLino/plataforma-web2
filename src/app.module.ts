import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Organizacao } from './organizacao/entities/organizacao.entity';
import { OrganizacaoModule } from './organizacao/organizacao.module';
import { JogadorModule } from './jogador/jogador.module';
import { Jogador } from './jogador/entities/jogador.entity';
import { FuncionarioModule } from './funcionario/funcionario.module';
import { Funcionario } from './funcionario/entities/funcionario.entity';
import { TorneioModule } from './torneio/torneio.module';
import { Torneio } from './torneio/entities/torneio.entity';
import { PartidaEquipeModule } from './partida-equipe/partida-equipe.module';
import { PartidaJogadorModule } from './partida-jogador/partida-jogador.module';
import { PartidaEquipe } from './partida-equipe/entities/partida-equipe.entity';
import { PartidaJogador } from './partida-jogador/entities/partida-jogador.entity';
import { EquipeModule } from './equipe/equipe.module';
import { JogoModule } from './jogo/jogo.module';
import { Equipe } from './equipe/entities/equipe.entity';
import { Jogo } from './jogo/entities/jogo.entity';
import { JogadorPerfilJogoModule } from './jogador-perfil-jogo/jogador-perfil-jogo.module';
import { JogadorPerfilJogo } from './jogador-perfil-jogo/entities/jogador-perfil-jogo.entity';
import { FuncionarioAdministradorModule } from './funcionario-administrador/funcionario-administrador.module';
import { FuncionarioModeradorModule } from './funcionario-moderador/funcionario-moderador.module';
import { AtendimentoPlataformaOrganizacaoModule } from './atendimento-plataforma-organizacao/atendimento-plataforma-organizacao.module';
import { AtendimentoPlataformaJogadorModule } from './atendimento-plataforma-jogador/atendimento-plataforma-jogador.module';
import { AtendimentoOrganizacaoJogadorModule } from './atendimento-organizacao-jogador/atendimento-organizacao-jogador.module';
import { AtendimentoOrganizacaoJogador } from './atendimento-organizacao-jogador/entities/atendimento-organizacao-jogador.entity';
import { AtendimentoPlataformaJogador } from './atendimento-plataforma-jogador/entities/atendimento-plataforma-jogador.entity';
import { AtendimentoPlataformaOrganizacao } from './atendimento-plataforma-organizacao/entities/atendimento-plataforma-organizacao.entity';
import { FuncionarioAdministrador } from './funcionario-administrador/entities/funcionario-administrador.entity';
import { FuncionarioModerador } from './funcionario-moderador/entities/funcionario-moderador.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database/plataforma.db',
      entities: [
        Organizacao, 
        Jogador, 
        Funcionario, 
        Torneio, 
        PartidaEquipe, 
        PartidaJogador, 
        Equipe, 
        Jogo, 
        JogadorPerfilJogo,
        FuncionarioAdministrador,
        FuncionarioModerador,
        AtendimentoPlataformaJogador,
        AtendimentoPlataformaOrganizacao,
        AtendimentoOrganizacaoJogador
      ],
      synchronize: true,
    }),
    OrganizacaoModule,
    JogadorModule,
    FuncionarioModule,
    TorneioModule,
    PartidaEquipeModule,
    PartidaJogadorModule,
    EquipeModule,
    JogoModule,
    JogadorPerfilJogoModule,
    FuncionarioAdministradorModule,
    FuncionarioModeradorModule,
    AtendimentoPlataformaOrganizacaoModule,
    AtendimentoPlataformaJogadorModule,
    AtendimentoOrganizacaoJogadorModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
