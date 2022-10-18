import { Module } from '@nestjs/common';
import { JogoService } from './jogo.service';
import { JogoController } from './jogo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Jogo } from './entities/jogo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Jogo])],
  controllers: [JogoController],
  providers: [JogoService]
})
export class JogoModule {}
