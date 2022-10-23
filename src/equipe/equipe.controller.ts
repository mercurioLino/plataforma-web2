import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { EquipeService } from './equipe.service';
import { CreateEquipeDto } from './dto/create-equipe.dto';
import { UpdateEquipeDto } from './dto/update-equipe.dto';
import { RelationEntityDto } from 'src/shared/dto/relation-entity.dto';

@Controller('equipe')
export class EquipeController {
  constructor(private readonly equipeService: EquipeService) {}

  @Post()
  create(@Body() createEquipeDto: CreateEquipeDto) {
    return this.equipeService.create(createEquipeDto);
  }

  @Get()
  findAll() {
    return this.equipeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.equipeService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateEquipeDto: UpdateEquipeDto) {
    return this.equipeService.update(id, updateEquipeDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.equipeService.remove(id);
  }

  @Post(':id/add-funcionario')
  addJogador(@Param('id', ParseIntPipe) id: number, @Body() relationEntityDto: RelationEntityDto){
    return this.equipeService.addJogador(id, relationEntityDto)
  }
}
