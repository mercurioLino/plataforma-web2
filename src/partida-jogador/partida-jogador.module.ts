import { Module } from '@nestjs/common';
import { PartidaJogadorService } from './partida-jogador.service';
import { PartidaJogadorController } from './partida-jogador.controller';
import { PartidaJogador } from './entities/partida-jogador.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TorneioIndividual } from 'src/torneio-individual/entities/torneio-individual.entity';
import { Jogador } from 'src/jogador/entities/jogador.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PartidaJogador]), TorneioIndividual, Jogador],
  controllers: [PartidaJogadorController],
  providers: [PartidaJogadorService],
  exports: [TypeOrmModule]
})
export class PartidaJogadorModule {}
