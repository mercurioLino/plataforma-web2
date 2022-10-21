import { Module } from '@nestjs/common';
import { TorneioController } from './torneio.controller';
import { TorneioEquipeService } from './torneio-equipe.service';
import { TorneioIndividualService } from './torneio-individual.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TorneioEquipe } from './entities/torneio-equipe.entity';
import { TorneioIndividual } from './entities/torneio-individual.entity';
import { Torneio } from './entities/torneio.entity';
import { TorneioService } from './torneio.service';
import { Jogador } from 'src/jogador/entities/jogador.entity';
import { Organizacao } from 'src/organizacao/entities/organizacao.entity';
import { Equipe } from 'src/equipe/entities/equipe.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Torneio, TorneioEquipe, TorneioIndividual, Jogador, Equipe, Organizacao])],
  controllers: [TorneioController],
  providers: [TorneioIndividualService, TorneioEquipeService, TorneioService]
})
export class TorneioModule {}
