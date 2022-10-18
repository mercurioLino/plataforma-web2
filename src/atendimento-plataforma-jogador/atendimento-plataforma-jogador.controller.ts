import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { AtendimentoPlataformaJogadorService } from './atendimento-plataforma-jogador.service';
import { CreateAtendimentoPlataformaJogadorDto } from './dto/create-atendimento-plataforma-jogador.dto';
import { UpdateAtendimentoPlataformaJogadorDto } from './dto/update-atendimento-plataforma-jogador.dto';

@Controller('atendimento-plataforma-jogador')
export class AtendimentoPlataformaJogadorController {
  constructor(private readonly atendimentoPlataformaJogadorService: AtendimentoPlataformaJogadorService) {}

  @Post()
  create(@Body() createAtendimentoPlataformaJogadorDto: CreateAtendimentoPlataformaJogadorDto) {
    return this.atendimentoPlataformaJogadorService.create(createAtendimentoPlataformaJogadorDto);
  }

  @Get()
  findAll() {
    return this.atendimentoPlataformaJogadorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.atendimentoPlataformaJogadorService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateAtendimentoPlataformaJogadorDto: UpdateAtendimentoPlataformaJogadorDto) {
    return this.atendimentoPlataformaJogadorService.update(id, updateAtendimentoPlataformaJogadorDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.atendimentoPlataformaJogadorService.remove(id);
  }
}
