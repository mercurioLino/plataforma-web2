import { Module } from '@nestjs/common';
import { JogadorService } from './jogador.service';
import { JogadorController } from './jogador.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Jogador } from './entities/jogador.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Jogador])],
  controllers: [JogadorController],
  providers: [JogadorService]
})
export class JogadorModule {}
