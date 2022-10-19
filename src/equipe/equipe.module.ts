import { Module } from '@nestjs/common';
import { EquipeService } from './equipe.service';
import { EquipeController } from './equipe.controller';
import { Equipe } from './entities/equipe.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Jogador } from 'src/jogador/entities/jogador.entity';
import { PartidaEquipe } from 'src/partida-equipe/entities/partida-equipe.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Equipe]), Jogador, PartidaEquipe],
  controllers: [EquipeController],
  providers: [EquipeService],
  exports: [TypeOrmModule]
})
export class EquipeModule {}
