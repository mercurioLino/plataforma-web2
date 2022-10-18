import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateFuncionarioAdministradorDto } from './dto/create-funcionario-administrador.dto';
import { UpdateFuncionarioAdministradorDto } from './dto/update-funcionario-administrador.dto';
import { Repository } from 'typeorm';
import { FuncionarioAdministrador } from './entities/funcionario-administrador.entity';
import { RecordNotFoundException } from '@exceptions';

@Injectable()
export class FuncionarioAdministradorService {

  constructor(@InjectRepository(FuncionarioAdministrador) private repository: Repository<FuncionarioAdministrador>) {}

  create(createFuncionarioAdministradorDto: CreateFuncionarioAdministradorDto) {
    const funcionario: FuncionarioAdministrador = new FuncionarioAdministrador();
    funcionario.cpf = createFuncionarioAdministradorDto.cpf;
    funcionario.nome = createFuncionarioAdministradorDto.nome;
    funcionario.endereco = createFuncionarioAdministradorDto.endereco;
    funcionario.dataNascimento = createFuncionarioAdministradorDto.dataNascimento;
 
    return this.repository.save(funcionario);
  }

  async findAll() {
    const funcionario: Array<FuncionarioAdministrador> = await this.repository.find();

    if(funcionario.length == 0){
      return 'Não existem funcionarios-administradores cadastrados';
    }
    return funcionario;
  }

  async findOne(id: number): Promise<FuncionarioAdministrador> {
    const funcionario = await this.repository.findOneBy({id});

    if(!FuncionarioAdministrador){
      throw new RecordNotFoundException;
    }
    return funcionario;
  }

  async update(id: number, updateFuncionarioAdministradorDto: UpdateFuncionarioAdministradorDto): Promise<FuncionarioAdministrador> {
    await this.repository.update(id, updateFuncionarioAdministradorDto);
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
