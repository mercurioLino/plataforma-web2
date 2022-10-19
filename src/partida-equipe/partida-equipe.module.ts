import { Module } from '@nestjs/common';
import { PartidaEquipeService } from './partida-equipe.service';
import { PartidaEquipeController } from './partida-equipe.controller';
import { PartidaEquipe } from './entities/partida-equipe.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Torneio } from 'src/torneio/entities/torneio.entity';
import { Equipe } from 'src/equipe/entities/equipe.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PartidaEquipe]), Torneio, Equipe],
  controllers: [PartidaEquipeController],
  providers: [PartidaEquipeService],
  exports: [TypeOrmModule]
})
export class PartidaEquipeModule {}
