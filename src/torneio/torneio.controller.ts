import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { TorneioService } from './torneio.service';
import { CreateTorneioDto } from './dto/create-torneio.dto';
import { UpdateTorneioDto } from './dto/update-torneio.dto';

@Controller('torneio')
export class TorneioController {
  constructor(private readonly torneioService: TorneioService) {}

  @Post()
  create(@Body() createTorneioDto: CreateTorneioDto) {
    return this.torneioService.create(createTorneioDto);
  }

  @Get()
  findAll() {
    return this.torneioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.torneioService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateTorneioDto: UpdateTorneioDto) {
    return this.torneioService.update(id, updateTorneioDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.torneioService.remove(id);
  }
}
