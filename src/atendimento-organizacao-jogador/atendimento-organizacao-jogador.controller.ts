import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { AtendimentoOrganizacaoJogadorService } from './atendimento-organizacao-jogador.service';
import { CreateAtendimentoOrganizacaoJogadorDto } from './dto/create-atendimento-organizacao-jogador.dto';
import { UpdateAtendimentoOrganizacaoJogadorDto } from './dto/update-atendimento-organizacao-jogador.dto';

@Controller('atendimento-organizacao-jogador')
export class AtendimentoOrganizacaoJogadorController {
  constructor(private readonly atendimentoOrganizacaoJogadorService: AtendimentoOrganizacaoJogadorService) {}

  @Post()
  create(@Body() createAtendimentoOrganizacaoJogadorDto: CreateAtendimentoOrganizacaoJogadorDto) {
    return this.atendimentoOrganizacaoJogadorService.create(createAtendimentoOrganizacaoJogadorDto);
  }

  @Get()
  findAll() {
    return this.atendimentoOrganizacaoJogadorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.atendimentoOrganizacaoJogadorService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateAtendimentoOrganizacaoJogadorDto: UpdateAtendimentoOrganizacaoJogadorDto) {
    return this.atendimentoOrganizacaoJogadorService.update(id, updateAtendimentoOrganizacaoJogadorDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.atendimentoOrganizacaoJogadorService.remove(id);
  }
}
