import { Controller, Get, Post, Body, ParseIntPipe, Patch, Param, Delete } from '@nestjs/common';
import { FuncionarioAdministradorService } from './funcionario-administrador.service';
import { CreateFuncionarioAdministradorDto } from './dto/create-funcionario-administrador.dto';
import { UpdateFuncionarioAdministradorDto } from './dto/update-funcionario-administrador.dto';

@Controller('funcionario-administrador')
export class FuncionarioAdministradorController {
  constructor(private readonly funcionarioAdministradorService: FuncionarioAdministradorService) {}

  @Post()
  create(@Body() createFuncionarioAdministradorDto: CreateFuncionarioAdministradorDto) {
    return this.funcionarioAdministradorService.create(createFuncionarioAdministradorDto);
  }

  @Get()
  findAll() {
    return this.funcionarioAdministradorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.funcionarioAdministradorService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateFuncionarioAdministradorDto: UpdateFuncionarioAdministradorDto) {
    return this.funcionarioAdministradorService.update(id, updateFuncionarioAdministradorDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.funcionarioAdministradorService.remove(id);
  }
}
