import { RecordNotFoundException } from '@exceptions';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOrganizacaoDto } from './dto/create-organizacao.dto';
import { UpdateOrganizacaoDto } from './dto/update-organizacao.dto';
import { Organizacao } from './entities/organizacao.entity';

@Injectable()
export class OrganizacaoService {

  constructor(@InjectRepository(Organizacao) private repository: Repository<Organizacao>) {}

  create(createOrganizacaoDto: CreateOrganizacaoDto): Promise<Organizacao> {
    const organizacao: Organizacao = new Organizacao()
    organizacao.cnpj = createOrganizacaoDto.cnpj;
    organizacao.razaoSocial = createOrganizacaoDto.razaoSocial;
    organizacao.nomeFantasia = createOrganizacaoDto.nomeFantasia;
    return this.repository.save(organizacao);
  }

  async findAll() {
    const organizacao: Array<Organizacao> = await this.repository.find(); 

    if (organizacao.length == 0) {
      return 'Não existem organizações cadastradas';
    }
        
    return organizacao;
  }

  async findOne(id: number): Promise<Organizacao> {
    const organizacao = await this.repository.findOneBy({id});

    if(!organizacao){
      throw new RecordNotFoundException;
    }

    return organizacao;
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
