import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { CreateJogadorDto } from '../dto/create-jogador.dto';
import { UpdateJogadorDto } from '../dto/update-jogador.dto';
import { JogadorService } from '../services/jogador.service';
import { UsuarioService } from '../services/usuario.service';

@Controller('jogador')
export class JogadorController {
  constructor(private readonly jogadorService: JogadorService,
    private readonly usuarioService: UsuarioService) {}

  @Post()
  create(@Body() createJogadorDto: CreateJogadorDto) {
    return this.jogadorService.create(createJogadorDto);
  }

  @Get()
  findAll() {
    return this.jogadorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.usuarioService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateJogadorDto: UpdateJogadorDto) {
    return this.jogadorService.update(id, updateJogadorDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.jogadorService.remove(id);
  }
}
