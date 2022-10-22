import { JogoModule } from './../jogo/jogo.module';
import { JogadorModule } from 'src/jogador/jogador.module';
import { forwardRef, Module } from '@nestjs/common';
import { JogadorPerfilJogoService } from './jogador-perfil-jogo.service';
import { JogadorPerfilJogoController } from './jogador-perfil-jogo.controller';
import { JogadorPerfilJogo } from './entities/jogador-perfil-jogo.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([JogadorPerfilJogo]), 
  forwardRef(() => JogadorModule), 
  forwardRef(() => JogoModule)],
  controllers: [JogadorPerfilJogoController],
  providers: [JogadorPerfilJogoService],
  exports: [TypeOrmModule]
})
export class JogadorPerfilJogoModule {}
