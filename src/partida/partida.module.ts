import { Module } from '@nestjs/common';
import { PartidaService } from './partida.service';
import { PartidaController } from './partida.controller';
import { PartidaEquipeService } from './partida-equipe.service';
import { PartidaJogadorService } from './partida-jogador.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Partida } from './entities/partida.entity';
import { PartidaEquipe } from './entities/partida-equipe.entity';
import { PartidaJogador } from './entities/partida-jogador.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Partida, PartidaEquipe, PartidaJogador])],
  controllers: [PartidaController],
  providers: [PartidaEquipeService, PartidaJogadorService]
})
export class PartidaModule {}
