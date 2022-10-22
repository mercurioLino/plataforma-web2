import { TorneioModule } from './../torneio/torneio.module';
import { forwardRef, Module } from '@nestjs/common';
import { EquipeService } from './equipe.service';
import { EquipeController } from './equipe.controller';
import { Equipe } from './entities/equipe.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JogadorModule } from 'src/jogador/jogador.module';
import { PartidaModule } from 'src/partida/partida.module';

@Module({
  imports: [TypeOrmModule.forFeature([Equipe]), 
  forwardRef(() => TorneioModule), 
  forwardRef(() => JogadorModule), 
  forwardRef(() => PartidaModule),
],
  controllers: [EquipeController],
  providers: [EquipeService],
  exports: [TypeOrmModule]
})
export class EquipeModule {}
