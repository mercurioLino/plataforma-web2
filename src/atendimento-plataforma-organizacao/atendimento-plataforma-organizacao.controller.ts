import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { AtendimentoPlataformaOrganizacaoService } from './atendimento-plataforma-organizacao.service';
import { CreateAtendimentoPlataformaOrganizacaoDto } from './dto/create-atendimento-plataforma-organizacao.dto';
import { UpdateAtendimentoPlataformaOrganizacaoDto } from './dto/update-atendimento-plataforma-organizacao.dto';

@Controller('atendimento-plataforma-organizacao')
export class AtendimentoPlataformaOrganizacaoController {
  constructor(private readonly atendimentoPlataformaOrganizacaoService: AtendimentoPlataformaOrganizacaoService) {}

  @Post()
  create(@Body() createAtendimentoPlataformaOrganizacaoDto: CreateAtendimentoPlataformaOrganizacaoDto) {
    return this.atendimentoPlataformaOrganizacaoService.create(createAtendimentoPlataformaOrganizacaoDto);
  }

  @Get()
  findAll() {
    return this.atendimentoPlataformaOrganizacaoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.atendimentoPlataformaOrganizacaoService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateAtendimentoPlataformaOrganizacaoDto: UpdateAtendimentoPlataformaOrganizacaoDto) {
    return this.atendimentoPlataformaOrganizacaoService.update(id, updateAtendimentoPlataformaOrganizacaoDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.atendimentoPlataformaOrganizacaoService.remove(id);
  }
}
