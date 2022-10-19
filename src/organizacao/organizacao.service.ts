import { RecordNotFoundException } from '@exceptions';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IPaginationOptions, paginate, Pagination } from 'nestjs-typeorm-paginate';
import { FindOptionsWhere, ILike, Repository } from 'typeorm';
import { CreateOrganizacaoDto } from './dto/create-organizacao.dto';
import { UpdateOrganizacaoDto } from './dto/update-organizacao.dto';
import { Organizacao } from './entities/organizacao.entity';

@Injectable()
export class OrganizacaoService {

  constructor(@InjectRepository(Organizacao) private repository: Repository<Organizacao>) {}

  async create(createOrganizacaoDto: CreateOrganizacaoDto): Promise<Organizacao> {
    const organizacao: Organizacao = new Organizacao()
    organizacao.cnpj = createOrganizacaoDto.cnpj;
    organizacao.razaoSocial = createOrganizacaoDto.razaoSocial;
    organizacao.nomeFantasia = createOrganizacaoDto.nomeFantasia;
    organizacao.torneios = createOrganizacaoDto.torneios;
    organizacao.torneiosIndividuais = createOrganizacaoDto.torneiosIndividuais;
    organizacao.funcionarios = createOrganizacaoDto.funcionarios;
    organizacao.email = createOrganizacaoDto.email;
    const {password, ... result} = await this.repository.save(organizacao);
    return this.repository.save(organizacao);
  }

  async findAll(options: IPaginationOptions, search?: string): Promise<Pagination<Organizacao>> {
    const where: FindOptionsWhere<Organizacao>={}; 

    if (search) {
      where.email = ILike(`%${search}%`);
    }
        
    return paginate<Organizacao>(this.repository, options, {where});
  }

  async findOne(id: number): Promise<Organizacao> {
    const organizacao = await this.repository.findOneBy({id});

    if(!organizacao){
      throw new RecordNotFoundException;
    }

    return organizacao;
  }

  async findByEmail(email: string, includePassowrd: boolean = false): Promise<Organizacao> {
    const user = await this.repository
      .createQueryBuilder('user')
      .addSelect('user.password')
      .where('user.email = :email', { email })
      .getOne();

    if (includePassowrd) {
      return user;
    } else {
      const { password, ...result } = user;
      return result as Organizacao;
    }
  }

  async update(id: number, updateOrganizacaoDto: UpdateOrganizacaoDto): Promise<Organizacao> {
    await this.repository.update(id, updateOrganizacaoDto);
    const organizacao = await this.repository.findOneBy({ id });
    if (!organizacao) {
      throw new RecordNotFoundException();
    }
    
    return organizacao;
  }

  async remove(id: number): Promise<string> {
    const organizacao = await this.repository.delete(id);
  
    if (!organizacao?.affected) {
      throw new RecordNotFoundException();
    }
  
    return 'Organização removida com sucesso!';
  }

}
