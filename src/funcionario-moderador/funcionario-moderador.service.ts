import { RecordNotFoundException } from '@exceptions';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFuncionarioModeradorDto } from './dto/create-funcionario-moderador.dto';
import { UpdateFuncionarioModeradorDto } from './dto/update-funcionario-moderador.dto';
import { FuncionarioModerador } from './entities/funcionario-moderador.entity';

@Injectable()
export class FuncionarioModeradorService {
  constructor(@InjectRepository(FuncionarioModerador) private repository: Repository<FuncionarioModerador>) {}

  create(createFuncionarioModeradorDto: CreateFuncionarioModeradorDto) {
    const funcionario: FuncionarioModerador = new FuncionarioModerador();
    funcionario.cpf = createFuncionarioModeradorDto.cpf;
    funcionario.nome = createFuncionarioModeradorDto.nome;
    funcionario.endereco = createFuncionarioModeradorDto.endereco;
    funcionario.dataNascimento = createFuncionarioModeradorDto.dataNascimento;
 
    return this.repository.save(funcionario);
  }

  async findAll() {
    const funcionario: Array<FuncionarioModerador> = await this.repository.find();

    if(funcionario.length == 0){
      return 'Não existem funcionarios-Moderadores cadastrados';
    }
    return funcionario;
  }

  async findOne(id: number): Promise<FuncionarioModerador> {
    const funcionario = await this.repository.findOneBy({id});

    if(!FuncionarioModerador){
      throw new RecordNotFoundException;
    }
    return funcionario;
  }

  async update(id: number, updateFuncionarioModeradorDto: UpdateFuncionarioModeradorDto): Promise<FuncionarioModerador> {
    await this.repository.update(id, updateFuncionarioModeradorDto);
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
