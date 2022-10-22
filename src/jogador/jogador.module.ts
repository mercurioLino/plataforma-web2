import { EquipeModule } from 'src/equipe/equipe.module';
import { forwardRef, Module } from '@nestjs/common';
import { JogadorService } from './jogador.service';
import { JogadorController } from './jogador.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Jogador } from './entities/jogador.entity';
import { JogadorPerfilJogoModule } from 'src/jogador-perfil-jogo/jogador-perfil-jogo.module';
import { PartidaModule } from 'src/partida/partida.module';
import { TorneioModule } from 'src/torneio/torneio.module';
import { AtendimentoModule } from 'src/atendimento/atendimento.module';

@Module({
  imports: [TypeOrmModule.forFeature([Jogador]), 
  forwardRef(() => EquipeModule), 
  forwardRef(() => JogadorPerfilJogoModule), 
  forwardRef(() => PartidaModule), 
  forwardRef(() => TorneioModule), 
  forwardRef(() => AtendimentoModule)],
  controllers: [JogadorController],
  providers: [JogadorService],
  exports: [TypeOrmModule]
})
export class JogadorModule {}
