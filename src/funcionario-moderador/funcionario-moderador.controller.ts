import { Controller, Get, Post, Body, Patch, ParseIntPipe, Param, Delete } from '@nestjs/common';
import { FuncionarioModeradorService } from './funcionario-moderador.service';
import { CreateFuncionarioModeradorDto } from './dto/create-funcionario-moderador.dto';
import { UpdateFuncionarioModeradorDto } from './dto/update-funcionario-moderador.dto';

@Controller('funcionario-moderador')
export class FuncionarioModeradorController {
  constructor(private readonly funcionarioModeradorService: FuncionarioModeradorService) {}

  @Post()
  create(@Body() createFuncionarioModeradorDto: CreateFuncionarioModeradorDto) {
    return this.funcionarioModeradorService.create(createFuncionarioModeradorDto);
  }

  @Get()
  findAll() {
    return this.funcionarioModeradorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.funcionarioModeradorService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateFuncionarioModeradorDto: UpdateFuncionarioModeradorDto) {
    return this.funcionarioModeradorService.update(id, updateFuncionarioModeradorDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.funcionarioModeradorService.remove(id);
  }
}
