import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateFuncionarioDto } from './dto/create-funcionario.dto';
import { UpdateFuncionarioDto } from './dto/update-funcionario.dto';
import { Funcionario } from './entities/funcionario.entity';
import { Repository } from 'typeorm';
import { RecordNotFoundException } from '@exceptions';
import { FuncionarioController } from './funcionario.controller';
import { CreateUsuarioDto } from 'src/usuario/dto/create-usuario.dto';


@Injectable()
export class FuncionarioService{

  constructor(@InjectRepository(Funcionario) private repository: Repository<Funcionario>) {}

  async create(createFuncionarioDto: CreateFuncionarioDto): Promise<Funcionario> {
    const funcionario: Funcionario = this.repository.create(createFuncionarioDto);
    return this.repository.save(funcionario);
  }

  async findAll() {
    const funcionario: Array<Funcionario> = await this.repository.find();

    if(funcionario.length == 0){
      return 'Não existem funcionarios cadastrados';
    }
    return funcionario;
  }

  async findOne(id: number): Promise<Funcionario> {
    const funcionario = await this.repository.findOneBy({id});

    if(!Funcionario){
      throw new RecordNotFoundException;
    }
    return funcionario;
  }

  async update(id: number, updateFuncionarioDto: UpdateFuncionarioDto): Promise<Funcionario> {
    await this.repository.update(id, updateFuncionarioDto);
    const funcionario = await this.repository.findOneBy({id});
    if(!funcionario){
      throw new RecordNotFoundException();
    }
    return funcionario;
  }

  async remove(id: number) {
    const funcionario = await this.repository.delete(id);
    if(!funcionario.affected){
      throw new RecordNotFoundException();
    }
    return `Funcionario removido com sucesso!`;
  }
}
