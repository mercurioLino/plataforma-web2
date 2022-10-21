import { Controller, Post, Body, Get, Param, Patch, Delete, ParseIntPipe } from "@nestjs/common";
import { CreatePartidaEquipeDto } from "./dto/create-partida-equipe.dto";
import { CreatePartidaIndividualDto } from "./dto/create-partida-individual.dto";
import { UpdatePartidaEquipeDto } from "./dto/update-partida-equipe.dto";
import { UpdatePartidaIndividualDto } from "./dto/update-partida-individual.dto";
import { UpdatePartidaDto } from "./dto/update-partida.dto";
import { PartidaEquipeService } from "./partida-equipe.service";
import { PartidaIndividualService } from "./partida-individual.service";
import { PartidaService } from "./partida.service";

@Controller('partida')
export class PartidaController {
  constructor(
    private readonly partidaIndividualService: PartidaIndividualService, 
    private readonly partidaEquipeService: PartidaEquipeService,
    private readonly partidaService: PartidaService) {}

  @Post('equipe')
  createPartidaEquipe(@Body() createPartidaDto: CreatePartidaEquipeDto) {
    return this.partidaEquipeService.create(createPartidaDto);
  }

  @Post('individual')
  createPartidaIndividual(@Body() createPartidaDto: CreatePartidaIndividualDto ) {
    return this.partidaIndividualService.create(createPartidaDto);
  }

  @Get()
  findAll() {
    return this.partidaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.partidaService.findOne(id);
  }

  @Patch(':id')
  updatePartidaIndividual(@Param('id', ParseIntPipe) id: number, @Body() updatePartidaDto: UpdatePartidaIndividualDto | UpdatePartidaEquipeDto) {
    if(updatePartidaDto instanceof UpdatePartidaIndividualDto){
      return this.partidaIndividualService.update(id, updatePartidaDto);
    }
    return this.partidaEquipeService.update(id, updatePartidaDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.partidaService.remove(id);
  }
}
