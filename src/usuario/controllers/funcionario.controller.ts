import { Controller, Get, Post, Body, Patch, ParseIntPipe, Param, Delete, UseGuards } from '@nestjs/common';
import { CreateFuncionarioDto } from '../dto/create-funcionario.dto';
import { UpdateFuncionarioDto } from '../dto/update-funcionario.dto';
import { FuncionarioService } from '../services/funcionario.service';
import { UsuarioService } from '../services/usuario.service';
import { RolesGuard } from 'src/guards/role.guard';
import { Role } from 'src/enums/role.enum';
import { Roles } from 'src/shared/dto/decorator/roles.decorator';


@Controller('funcionario')
@UseGuards(RolesGuard)
export class FuncionarioController {
  constructor(private readonly funcionarioService: FuncionarioService,
    private readonly usuarioService: UsuarioService) {}

  @Post()
  @Roles(Role.Admin)
  create(@Body() createFuncionarioDto: CreateFuncionarioDto) {
    return this.funcionarioService.create(createFuncionarioDto);
  }
 
  @Get()
  findAll() {
    return this.funcionarioService.findAll();
  }


  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.usuarioService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateFuncionarioDto: UpdateFuncionarioDto) {
    return this.funcionarioService.update(id, updateFuncionarioDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.funcionarioService.remove(id);
  }
}
