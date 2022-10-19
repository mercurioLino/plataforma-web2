import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { TorneioIndividualService } from './torneio-individual.service';
import { CreateTorneioIndividualDto } from './dto/create-torneio-individual.dto';
import { UpdateTorneioIndividualDto } from './dto/update-torneio-individual.dto';

@Controller('torneio-individual')
export class TorneioIndividualController {
  constructor(private readonly torneioIndividualService: TorneioIndividualService) {}

  @Post()
  create(@Body() createTorneioIndividualDto: CreateTorneioIndividualDto) {
    return this.torneioIndividualService.create(createTorneioIndividualDto);
  }

  @Get()
  findAll() {
    return this.torneioIndividualService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.torneioIndividualService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateTorneioIndividualDto: UpdateTorneioIndividualDto) {
    return this.torneioIndividualService.update(id, updateTorneioIndividualDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.torneioIndividualService.remove(id);
  }
}
