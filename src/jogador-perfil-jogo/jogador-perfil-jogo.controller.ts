import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { JogadorPerfilJogoService } from './jogador-perfil-jogo.service';
import { CreateJogadorPerfilJogoDto } from './dto/create-jogador-perfil-jogo.dto';
import { UpdateJogadorPerfilJogoDto } from './dto/update-jogador-perfil-jogo.dto';

@Controller('jogador-perfil-jogo')
export class JogadorPerfilJogoController {
  constructor(private readonly jogadorPerfilJogoService: JogadorPerfilJogoService) {}

  @Post()
  create(@Body() createJogadorPerfilJogoDto: CreateJogadorPerfilJogoDto) {
    return this.jogadorPerfilJogoService.create(createJogadorPerfilJogoDto);
  }

  @Get()
  findAll() {
    return this.jogadorPerfilJogoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.jogadorPerfilJogoService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateJogadorPerfilJogoDto: UpdateJogadorPerfilJogoDto) {
    return this.jogadorPerfilJogoService.update(id, updateJogadorPerfilJogoDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.jogadorPerfilJogoService.remove(id);
  }
}
