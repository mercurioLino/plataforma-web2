import { Module } from '@nestjs/common';
import { TorneioService } from './torneio.service';
import { TorneioController } from './torneio.controller';
import { Torneio } from './entities/torneio.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PartidaEquipe } from 'src/partida-equipe/entities/partida-equipe.entity';
import { Organizacao } from 'src/organizacao/entities/organizacao.entity';
import { Jogo } from 'src/jogo/entities/jogo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Torneio]), PartidaEquipe, Organizacao, Jogo],
  controllers: [TorneioController],
  providers: [TorneioService],
  exports: [TypeOrmModule] 
})
export class TorneioModule {}
