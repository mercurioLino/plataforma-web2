import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { PartidaJogadorService } from './partida-jogador.service';
import { CreatePartidaJogadorDto } from './dto/create-partida-jogador.dto';
import { UpdatePartidaJogadorDto } from './dto/update-partida-jogador.dto';

@Controller('partida-jogador')
export class PartidaJogadorController {
  constructor(private readonly partidaJogadorService: PartidaJogadorService) {}

  @Post()
  create(@Body() createPartidaJogadorDto: CreatePartidaJogadorDto) {
    return this.partidaJogadorService.create(createPartidaJogadorDto);
  }

  @Get()
  findAll() {
    return this.partidaJogadorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.partidaJogadorService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updatePartidaJogadorDto: UpdatePartidaJogadorDto) {
    return this.partidaJogadorService.update(id, updatePartidaJogadorDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.partidaJogadorService.remove(id);
  }
}
