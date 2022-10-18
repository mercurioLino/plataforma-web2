import { Module } from '@nestjs/common';
import { OrganizacaoService } from './organizacao.service';
import { OrganizacaoController } from './organizacao.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Organizacao } from './entities/organizacao.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Organizacao])],
  controllers: [OrganizacaoController],
  providers: [OrganizacaoService]
})
export class OrganizacaoModule {}
