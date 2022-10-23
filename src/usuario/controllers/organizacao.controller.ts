import { Controller, Post, Body, Get, Query, DefaultValuePipe, ParseIntPipe, Param, Patch, Delete } from "@nestjs/common";
import { RelationEntityDto } from "src/shared/dto/relation-entity.dto";
import { CreateOrganizacaoDto } from "../dto/create-organizacao.dto";
import { UpdateOrganizacaoDto } from "../dto/update-organizacao.dto";
import { OrganizacaoService } from "../services/organizacao.service";
import { UsuarioService } from "../services/usuario.service";


@Controller('organizacao')
export class OrganizacaoController {
  constructor(private readonly organizacaoService: OrganizacaoService,
    private readonly usuarioService: UsuarioService) {}

  @Post()
  create(@Body() createOrganizacaoDto: CreateOrganizacaoDto) {
    return this.organizacaoService.create(createOrganizacaoDto);
  }

  @Get()
  findAll(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page = 1,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit = 10,
    @Query('search') search: string,
  ) {
    return this.organizacaoService.findAll({ page, limit }, search);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.usuarioService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateOrganizacaoDto: UpdateOrganizacaoDto) {
    return this.organizacaoService.update(id, updateOrganizacaoDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.organizacaoService.remove(id);
  }

  @Post(':id/add-funcionario')
  addFuncionario(@Param('id', ParseIntPipe) id: number, @Body() relationEntityDto: RelationEntityDto){
    return this.organizacaoService.addFuncionario(id, relationEntityDto)
  }

}
