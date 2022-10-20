import { Module } from '@nestjs/common';
import { TorneioController } from './torneio.controller';
import { TorneioEquipeService } from './torneio-equipe.service';
import { TorneioIndividualService } from './torneio-individual.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TorneioEquipe } from './entities/torneio-equipe.entity';
import { TorneioIndividual } from './entities/torneio-individual.entity';
import { Torneio } from './entities/torneio.entity';
import { TorneioService } from './torneio.service';

@Module({
  imports: [TypeOrmModule.forFeature([Torneio, TorneioEquipe, TorneioIndividual])],
  controllers: [TorneioController],
  providers: [TorneioIndividualService, TorneioEquipeService, TorneioService]
})
export class TorneioModule {}
