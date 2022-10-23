import { JogoModule } from './../jogo/jogo.module';
import { forwardRef, Module } from '@nestjs/common';
import { TorneioController } from './torneio.controller';
import { TorneioEquipeService } from './torneio-equipe.service';
import { TorneioIndividualService } from './torneio-individual.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TorneioIndividual } from './entities/torneio-individual.entity';
import { TorneioService } from './torneio.service';
import { PartidaModule } from 'src/partida/partida.module';
import { EquipeModule } from 'src/equipe/equipe.module';
import { TorneioEquipe } from './entities/torneio-equipe.entity';
import { Torneio } from './entities/torneio.entity';
import { UsuarioModule } from 'src/usuario/usuario.module';


@Module({
  imports: [TypeOrmModule.forFeature([Torneio, TorneioEquipe, TorneioIndividual]), 
  forwardRef(() => UsuarioModule), 
  forwardRef(() => EquipeModule),  
  forwardRef(() => JogoModule), 
  forwardRef(() => PartidaModule)],
  controllers: [TorneioController],
  providers: [TorneioIndividualService, TorneioEquipeService, TorneioService],
  exports: [TypeOrmModule]
})
export class TorneioModule {}
