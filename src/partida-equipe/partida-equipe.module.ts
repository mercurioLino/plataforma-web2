import { Module } from '@nestjs/common';
import { PartidaEquipeService } from './partida-equipe.service';
import { PartidaEquipeController } from './partida-equipe.controller';
import { PartidaEquipe } from './entities/partida-equipe.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([PartidaEquipe])],
  controllers: [PartidaEquipeController],
  providers: [PartidaEquipeService]
})
export class PartidaEquipeModule {}
