import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { OrganizacaoService } from './organizacao.service';
import { CreateOrganizacaoDto } from './dto/create-organizacao.dto';
import { UpdateOrganizacaoDto } from './dto/update-organizacao.dto';

@Controller('organizacao')
export class OrganizacaoController {
  constructor(private readonly organizacaoService: OrganizacaoService) {}

  @Post()
  create(@Body() createOrganizacaoDto: CreateOrganizacaoDto) {
    return this.organizacaoService.create(createOrganizacaoDto);
  }

  @Get()
  findAll() {
    return this.organizacaoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.organizacaoService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateOrganizacaoDto: UpdateOrganizacaoDto) {
    return this.organizacaoService.update(id, updateOrganizacaoDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.organizacaoService.remove(id);
  }

}
