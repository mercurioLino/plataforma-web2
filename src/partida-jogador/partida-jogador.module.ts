import { Module } from '@nestjs/common';
import { PartidaJogadorService } from './partida-jogador.service';
import { PartidaJogadorController } from './partida-jogador.controller';
import { PartidaJogador } from './entities/partida-jogador.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([PartidaJogador])],
  controllers: [PartidaJogadorController],
  providers: [PartidaJogadorService]
})
export class PartidaJogadorModule {}
