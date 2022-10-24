import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, DefaultValuePipe, Query, UseGuards } from '@nestjs/common';
import { EquipeService } from './equipe.service';
import { CreateEquipeDto } from './dto/create-equipe.dto';
import { UpdateEquipeDto } from './dto/update-equipe.dto';
import { RelationEntityDto } from 'src/shared/dto/relation-entity.dto';
import { ApiTags } from '@nestjs/swagger';
import { RolesGuard } from 'src/guards/role.guard';
import { IsPublic } from 'src/shared/dto/decorator';
import { Roles } from 'src/shared/dto/decorator/roles.decorator';
import { Role } from 'src/enums/role.enum';

@ApiTags('Equipe')
@Controller('equipe')
@UseGuards(RolesGuard)
export class EquipeController {
  constructor(private readonly equipeService: EquipeService) {}

  @Post()
  @IsPublic()
  create(@Body() createEquipeDto: CreateEquipeDto) {
    return this.equipeService.create(createEquipeDto);
  }

  @Get()
  @IsPublic()
  findAll(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page = 1,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit = 10,
    @Query('search') search: string,
  ) {
    return this.equipeService.findAll({ page, limit }, search);
  }

  @Get(':id')
  @IsPublic()
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.equipeService.findOne(id);
  }

  @Patch(':id')
  @IsPublic()
  update(@Param('id', ParseIntPipe) id: number, @Body() updateEquipeDto: UpdateEquipeDto) {
    return this.equipeService.update(id, updateEquipeDto);
  }

  @Delete(':id')
  @Roles(Role.Admin)
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.equipeService.remove(id);
  }

  @Post(':id/add-jogador')
  @Roles(Role.Admin, Role.Organizacao, Role.Funcionario)
  addJogador(@Param('id', ParseIntPipe) id: number, @Body() relationEntityDto: RelationEntityDto){
    return this.equipeService.addJogador(id, relationEntityDto)
  }
}
