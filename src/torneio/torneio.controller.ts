import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { CreateTorneioIndividualDto } from './dto/create-torneio-individual.dto';
import { CreateTorneioEquipeDto } from './dto/create-torneio-equipe.dto';
import { UpdateTorneioEquipeDto } from './dto/update-torneio-equipe.dto';
import { UpdateTorneioIndividualDto } from './dto/update-torneio-individual.dto';
import { TorneioEquipeService } from './torneio-equipe.service';
import { TorneioIndividualService } from './torneio-individual.service';
import { TorneioService } from './torneio.service';
import { CreatePartidaDto } from 'src/partida/dto/create-partida.dto';
import { RelationEntityDto } from 'src/shared/dto/relation-entity.dto';
import { CreatePartidaIndividualDto } from 'src/partida/dto/create-partida-individual.dto';

@Controller('torneio')
export class TorneioController {
  constructor(
    private readonly torneioIndividualService: TorneioIndividualService, 
    private readonly torneioEquipeService: TorneioEquipeService,
    private readonly torneioService: TorneioService) {}

  @Post('equipe')
  createTorneioEquipe(@Body() createTorneioDto: CreateTorneioEquipeDto) {
    return this.torneioEquipeService.create(createTorneioDto);
  }

  @Post('individual')
  createTorneioIndividual(@Body() createTorneioDto: CreateTorneioIndividualDto ) {
    return this.torneioIndividualService.create(createTorneioDto);
  }

  @Post(':id/add-jogador')
  addJogador(@Param('id', ParseIntPipe) id: number, @Body() relationEntityDto: RelationEntityDto ) {
    return this.torneioIndividualService.addJogador(id, relationEntityDto);
  }

  @Post(':id/add-equipe')
  addEquipe(@Param('id', ParseIntPipe) id: number, @Body() relationEntityDto: RelationEntityDto ) {
    return this.torneioEquipeService.addEquipe(id, relationEntityDto);
  }

  @Get('')
  findAll() {
    return this.torneioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.torneioService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateTorneioDto: UpdateTorneioIndividualDto) {
    return this.torneioIndividualService.update(id, updateTorneioDto);
  }

  @Patch(':id')
  updateTorneioEquipe(@Param('id', ParseIntPipe) id: number, @Body() updateTorneioDto: UpdateTorneioEquipeDto) {
    return this.torneioEquipeService.update(id, updateTorneioDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.torneioService.remove(id);
  }

  @Post(':id/gerar-partidas')
  gerarPartidasIndividuais(@Param('id') id: number, @Body() createPartidaDto: CreatePartidaIndividualDto){
      return this.torneioIndividualService.gerarPartida(id, createPartidaDto);
  }
}
