import { Module } from '@nestjs/common';
import { OrganizacaoService } from './organizacao.service';
import { OrganizacaoController } from './organizacao.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Organizacao } from './entities/organizacao.entity';
import { Torneio } from 'src/torneio/entities/torneio.entity';
import { Funcionario } from 'src/funcionario/entities/funcionario.entity';
import { TorneioIndividual } from 'src/torneio/entities/torneio-individual.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Organizacao]), Torneio, TorneioIndividual, Funcionario],
  controllers: [OrganizacaoController],
  providers: [OrganizacaoService],
  exports: [TypeOrmModule, OrganizacaoService]
})
export class OrganizacaoModule {}
