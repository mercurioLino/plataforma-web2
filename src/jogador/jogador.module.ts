import { Module } from '@nestjs/common';
import { JogadorService } from './jogador.service';
import { JogadorController } from './jogador.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Jogador } from './entities/jogador.entity';
import { Equipe } from 'src/equipe/entities/equipe.entity';
import { JogadorPerfilJogo } from 'src/jogador-perfil-jogo/entities/jogador-perfil-jogo.entity';
import { PartidaJogador } from 'src/partida-jogador/entities/partida-jogador.entity';
import { Atendimento } from 'src/atendimento/entities/atendimento.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Jogador]), Equipe, JogadorPerfilJogo, PartidaJogador, Atendimento],
  controllers: [JogadorController],
  providers: [JogadorService],
  exports: [TypeOrmModule]
})
export class JogadorModule {}
