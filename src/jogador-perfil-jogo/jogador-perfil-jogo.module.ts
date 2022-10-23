import { JogoModule } from './../jogo/jogo.module';
import { forwardRef, Module } from '@nestjs/common';
import { JogadorPerfilJogoService } from './jogador-perfil-jogo.service';
import { JogadorPerfilJogoController } from './jogador-perfil-jogo.controller';
import { JogadorPerfilJogo } from './entities/jogador-perfil-jogo.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioModule } from 'src/usuario/usuario.module';

@Module({
  imports: [TypeOrmModule.forFeature([JogadorPerfilJogo]), 
  forwardRef(() => UsuarioModule), 
  forwardRef(() => JogoModule)],
  controllers: [JogadorPerfilJogoController],
  providers: [JogadorPerfilJogoService],
  exports: [TypeOrmModule]
})
export class JogadorPerfilJogoModule {}
