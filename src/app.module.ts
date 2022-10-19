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
import { ConfigModule } from '@nestjs/config';
import { TorneioIndividualModule } from './torneio-individual/torneio-individual.module';
import { TorneioIndividual } from './torneio-individual/entities/torneio-individual.entity';
import { AuthModule } from './auth/auth.module';
import { Atendimento } from './atendimento/entities/atendimento.entity';
import { AtendimentoModule } from './atendimento/atendimento.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
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
        Atendimento,
        TorneioIndividual
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
    AtendimentoModule,
    TorneioIndividualModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
