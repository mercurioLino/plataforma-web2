import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { PartidaEquipeService } from './partida-equipe.service';
import { CreatePartidaEquipeDto } from './dto/create-partida-equipe.dto';
import { UpdatePartidaEquipeDto } from './dto/update-partida-equipe.dto';

@Controller('partida-equipe')
export class PartidaEquipeController {
  constructor(private readonly partidaEquipeService: PartidaEquipeService) {}

  @Post()
  create(@Body() createPartidaEquipeDto: CreatePartidaEquipeDto) {
    return this.partidaEquipeService.create(createPartidaEquipeDto);
  }

  @Get()
  findAll() {
    return this.partidaEquipeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.partidaEquipeService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updatePartidaEquipeDto: UpdatePartidaEquipeDto) {
    return this.partidaEquipeService.update(id, updatePartidaEquipeDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.partidaEquipeService.remove(id);
  }
}
