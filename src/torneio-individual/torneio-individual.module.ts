import { Module } from '@nestjs/common';
import { TorneioIndividualService } from './torneio-individual.service';
import { TorneioIndividualController } from './torneio-individual.controller';
import { PartidaJogador } from 'src/partida-jogador/entities/partida-jogador.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TorneioIndividual } from './entities/torneio-individual.entity';
import { Organizacao } from 'src/organizacao/entities/organizacao.entity';
import { Jogo } from 'src/jogo/entities/jogo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TorneioIndividual]), PartidaJogador, Organizacao, Jogo],
  controllers: [TorneioIndividualController],
  providers: [TorneioIndividualService],
  exports: [TypeOrmModule] 
})
export class TorneioIndividualModule {}
