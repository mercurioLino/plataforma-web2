import { Module } from '@nestjs/common';
import { JogadorPerfilJogoService } from './jogador-perfil-jogo.service';
import { JogadorPerfilJogoController } from './jogador-perfil-jogo.controller';
import { JogadorPerfilJogo } from './entities/jogador-perfil-jogo.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Jogador } from 'src/jogador/entities/jogador.entity';
import { Jogo } from 'src/jogo/entities/jogo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([JogadorPerfilJogo]), Jogador, Jogo],
  controllers: [JogadorPerfilJogoController],
  providers: [JogadorPerfilJogoService],
  exports: [TypeOrmModule]
})
export class JogadorPerfilJogoModule {}
