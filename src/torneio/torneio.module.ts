import { Module } from '@nestjs/common';
import { TorneioService } from './torneio.service';
import { TorneioController } from './torneio.controller';
import { Torneio } from './entities/torneio.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Torneio])],
  controllers: [TorneioController],
  providers: [TorneioService]
})
export class TorneioModule {}
