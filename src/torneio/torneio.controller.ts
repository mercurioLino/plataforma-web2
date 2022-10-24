import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, DefaultValuePipe, Query, UseGuards } from '@nestjs/common';
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
import { ApiTags } from '@nestjs/swagger';
import { RolesGuard } from 'src/guards/role.guard';
import { IsPublic } from 'src/shared/dto/decorator';
import { Roles } from 'src/shared/dto/decorator/roles.decorator';
import { Role } from 'src/enums/role.enum';

@ApiTags('Torneio')
@Controller('torneio')
@UseGuards(RolesGuard)
export class TorneioController {
  constructor(
    private readonly torneioIndividualService: TorneioIndividualService, 
    private readonly torneioEquipeService: TorneioEquipeService,
    private readonly torneioService: TorneioService) {}

  @Post('equipe')
  @IsPublic()
  createTorneioEquipe(@Body() createTorneioDto: CreateTorneioEquipeDto) {
    return this.torneioEquipeService.create(createTorneioDto);
  }

  @Post('individual')
  @IsPublic()
  createTorneioIndividual(@Body() createTorneioDto: CreateTorneioIndividualDto ) {
    return this.torneioIndividualService.create(createTorneioDto);
  }

  @Post(':id/add-jogador')
  @Roles(Role.Admin, Role.Funcionario, Role.Organizacao)
  addJogador(@Param('id', ParseIntPipe) id: number, @Body() relationEntityDto: RelationEntityDto ) {
    return this.torneioIndividualService.addJogador(id, relationEntityDto);
  }

  @Post(':id/add-equipe')
  @Roles(Role.Admin, Role.Funcionario, Role.Organizacao)
  addEquipe(@Param('id', ParseIntPipe) id: number, @Body() relationEntityDto: RelationEntityDto ) {
    return this.torneioEquipeService.addEquipe(id, relationEntityDto);
  }

  @Get()
  @IsPublic()
  findAllTorneios(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page = 1,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit = 10,
    @Query('search') search: string,
  ) {
    return this.torneioService.findAll({ page, limit }, search);
  }

  @Get('individual')
  @IsPublic()
  findAllTorneiosIndividuais(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page = 1,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit = 10,
    @Query('search') search: string,
  ) {
    return this.torneioIndividualService.findAll({ page, limit }, search);
  }

  @Get('equipe')
  @IsPublic()
  findAllTorneiosEquipes(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page = 1,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit = 10,
    @Query('search') search: string,
  ) {
    return this.torneioEquipeService.findAll({ page, limit }, search);
  }

  @Get(':id')
  @IsPublic()
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.torneioService.findOne(id);
  }

  @Patch(':id')
  @Roles(Role.Admin)
  update(@Param('id', ParseIntPipe) id: number, @Body() updateTorneioDto: UpdateTorneioIndividualDto | UpdateTorneioEquipeDto) {
    if(updateTorneioDto instanceof UpdateTorneioIndividualDto){
      return this.torneioIndividualService.update(id, updateTorneioDto);
    }
    return this.torneioEquipeService.update(id, updateTorneioDto);
  }

  @Delete(':id')
  @Roles(Role.Admin)
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.torneioService.remove(id);
  }

  @Post(':id/gerar-partidas')
  @Roles(Role.Admin, Role.Organizacao, Role.Funcionario)
  gerarPartidasIndividuais(@Param('id') id: number, @Body() createPartidaDto: CreatePartidaIndividualDto){
      return this.torneioIndividualService.gerarPartida(id, createPartidaDto);
  }
}
