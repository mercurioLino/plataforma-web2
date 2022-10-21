import { Module } from '@nestjs/common';
import { JogadorService } from './jogador.service';
import { JogadorController } from './jogador.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Jogador } from './entities/jogador.entity';
import { Equipe } from 'src/equipe/entities/equipe.entity';
import { JogadorPerfilJogo } from 'src/jogador-perfil-jogo/entities/jogador-perfil-jogo.entity';
import { Atendimento } from 'src/atendimento/entities/atendimento.entity';
import { PartidaIndividual } from 'src/partida/entities/partida-individual.entity';
import { TorneioIndividual } from 'src/torneio/entities/torneio-individual.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Jogador, Equipe, JogadorPerfilJogo, PartidaIndividual, TorneioIndividual, Atendimento])],
  controllers: [JogadorController],
  providers: [JogadorService],
  exports: [TypeOrmModule]
})
export class JogadorModule {}
