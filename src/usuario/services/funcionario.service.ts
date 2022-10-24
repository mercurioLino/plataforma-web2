import { RecordNotFoundException } from "@exceptions";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { IPaginationOptions, Pagination, paginate } from "nestjs-typeorm-paginate";
import { FindOptionsWhere, ILike, Repository } from "typeorm";
import { CreateFuncionarioDto } from "../dto/create-funcionario.dto";
import { UpdateFuncionarioDto } from "../dto/update-funcionario.dto";
import { Funcionario } from "../entities/funcionario.entity";



@Injectable()
export class FuncionarioService{

  constructor(@InjectRepository(Funcionario) private repository: Repository<Funcionario>) {}

  async create(createFuncionarioDto: CreateFuncionarioDto): Promise<Funcionario> {
    const funcionario: Funcionario = this.repository.create(createFuncionarioDto);
    funcionario.role = "funcionario";
    return this.repository.save(funcionario);
  }

  async findOne(id: number) {
    const usuario = await this.repository.findOneBy({id});

    if(!usuario){
      throw new RecordNotFoundException;
    }

    return usuario;
  }

  async findAll(options: IPaginationOptions, search?: string): Promise<Pagination<Funcionario>> {
    const where: FindOptionsWhere<Funcionario>={}; 

    if (search) {
      where.organizacao = ILike(`%${search}%`);
    }
        
    return paginate<Funcionario>(this.repository, options, {where});
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
