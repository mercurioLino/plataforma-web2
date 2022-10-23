import { TorneioModule } from './../torneio/torneio.module';
import { forwardRef, Module } from '@nestjs/common';
import { OrganizacaoService } from './organizacao.service';
import { OrganizacaoController } from './organizacao.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Organizacao } from './entities/organizacao.entity';
import { FuncionarioModule } from 'src/funcionario/funcionario.module';

@Module({
  imports: [TypeOrmModule.forFeature([Organizacao]), 
  forwardRef(() => TorneioModule), 
  forwardRef(() => FuncionarioModule)],
  controllers: [OrganizacaoController],
  providers: [OrganizacaoService],
  exports: [TypeOrmModule]
})
export class OrganizacaoModule {}
