import { Module } from '@nestjs/common';
import { JogadorPerfilJogoService } from './jogador-perfil-jogo.service';
import { JogadorPerfilJogoController } from './jogador-perfil-jogo.controller';
import { JogadorPerfilJogo } from './entities/jogador-perfil-jogo.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([JogadorPerfilJogo])],
  controllers: [JogadorPerfilJogoController],
  providers: [JogadorPerfilJogoService]
})
export class JogadorPerfilJogoModule {}
