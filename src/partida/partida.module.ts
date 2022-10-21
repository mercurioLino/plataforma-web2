import { Module } from '@nestjs/common';
import { PartidaController } from './partida.controller';
import { PartidaEquipeService } from './partida-equipe.service';
import { PartidaIndividualService } from './partida-individual.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Partida } from './entities/partida.entity';
import { PartidaEquipe } from './entities/partida-equipe.entity';
import { PartidaIndividual } from './entities/partida-individual.entity';
import { PartidaService } from './partida.service';
import { Jogador } from 'src/jogador/entities/jogador.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Partida, PartidaEquipe, PartidaIndividual, Jogador])],
  controllers: [PartidaController],
  providers: [PartidaEquipeService, PartidaIndividualService, PartidaService]
})
export class PartidaModule {}
