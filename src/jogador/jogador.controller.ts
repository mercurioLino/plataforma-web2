import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { JogadorService } from './jogador.service';
import { CreateJogadorDto } from './dto/create-jogador.dto';
import { UpdateJogadorDto } from './dto/update-jogador.dto';

@Controller('jogador')
export class JogadorController {
  constructor(private readonly jogadorService: JogadorService) {}

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
    return this.jogadorService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateJogadorDto: UpdateJogadorDto) {
    return this.jogadorService.update(+id, updateJogadorDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.jogadorService.remove(id);
  }
}
