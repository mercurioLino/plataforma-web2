import { EquipeModule } from 'src/equipe/equipe.module';
import { TorneioModule } from 'src/torneio/torneio.module';
import { JogadorModule } from 'src/jogador/jogador.module';
import { forwardRef, Module } from '@nestjs/common';
import { PartidaController } from './partida.controller';
import { PartidaEquipeService } from './partida-equipe.service';
import { PartidaIndividualService } from './partida-individual.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Partida } from './entities/partida.entity';
import { PartidaEquipe } from './entities/partida-equipe.entity';
import { PartidaIndividual } from './entities/partida-individual.entity';
import { PartidaService } from './partida.service';

@Module({
  imports: [TypeOrmModule.forFeature([Partida, PartidaEquipe, PartidaIndividual]), 
  forwardRef(() => TorneioModule), 
  forwardRef(() => JogadorModule), 
  forwardRef(() => EquipeModule)],
  controllers: [PartidaController],
  providers: [PartidaEquipeService, PartidaIndividualService, PartidaService],
  exports: [TypeOrmModule]
})
export class PartidaModule {}
