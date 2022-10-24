import { Controller, Get, Post, Body, Patch, ParseIntPipe, Param, Delete, DefaultValuePipe, Query, UseGuards } from '@nestjs/common';
import { JogoService } from './jogo.service';
import { CreateJogoDto } from './dto/create-jogo.dto';
import { UpdateJogoDto } from './dto/update-jogo.dto';
import { ApiTags } from '@nestjs/swagger';
import { RolesGuard } from 'src/guards/role.guard';
import { Roles } from 'src/shared/dto/decorator/roles.decorator';
import { Role } from 'src/enums/role.enum';
import { IsPublic } from 'src/shared/dto/decorator';

@ApiTags('Jogo')
@Controller('jogo')
@UseGuards(RolesGuard)
export class JogoController {
  constructor(private readonly jogoService: JogoService) {}

  @Post()
  @Roles(Role.Admin)
  create(@Body() createJogoDto: CreateJogoDto) {
    return this.jogoService.create(createJogoDto);
  }

  @Get()
  @IsPublic()
  findAll(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page = 1,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit = 10,
    @Query('search') search: string,
  ) {
    return this.jogoService.findAll({ page, limit }, search);
  }

  @Get(':id')
  @IsPublic()
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.jogoService.findOne(id);
  }

  @Patch(':id')
  @Roles(Role.Admin)
  update(@Param('id', ParseIntPipe) id: number, @Body() updateJogoDto: UpdateJogoDto) {
    return this.jogoService.update(id, updateJogoDto);
  }

  @Delete(':id')
  @Roles(Role.Admin)
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.jogoService.remove(id);
  }
}
