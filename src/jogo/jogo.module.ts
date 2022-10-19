import { Module } from '@nestjs/common';
import { JogoService } from './jogo.service';
import { JogoController } from './jogo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Jogo } from './entities/jogo.entity';
import { Torneio } from 'src/torneio/entities/torneio.entity';
import { JogadorPerfilJogo } from 'src/jogador-perfil-jogo/entities/jogador-perfil-jogo.entity';
import { TorneioIndividual } from 'src/torneio-individual/entities/torneio-individual.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Jogo]), Torneio, TorneioIndividual, JogadorPerfilJogo],
  controllers: [JogoController],
  providers: [JogoService],
  exports: [TypeOrmModule]
})
export class JogoModule {}
