import { RecordNotFoundException } from '@exceptions';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAtendimentoPlataformaOrganizacaoDto } from './dto/create-atendimento-plataforma-organizacao.dto';
import { UpdateAtendimentoPlataformaOrganizacaoDto } from './dto/update-atendimento-plataforma-organizacao.dto';
import { AtendimentoPlataformaOrganizacao } from './entities/atendimento-plataforma-organizacao.entity';

@Injectable()
export class AtendimentoPlataformaOrganizacaoService {
  constructor(@InjectRepository(AtendimentoPlataformaOrganizacao) private repository: Repository<AtendimentoPlataformaOrganizacao>) {}

  create(createAtendimentoPlataformaOrganizacaoDto: CreateAtendimentoPlataformaOrganizacaoDto) : Promise<AtendimentoPlataformaOrganizacao> {
    const atendimento: AtendimentoPlataformaOrganizacao = new AtendimentoPlataformaOrganizacao();
    atendimento.descricao = createAtendimentoPlataformaOrganizacaoDto.descricao;
    atendimento.feedback = createAtendimentoPlataformaOrganizacaoDto.feedback;
    atendimento.status = "Em aberto";

    return this.repository.save(atendimento);
  }

  async findAll() {
    const atendimento: Array<AtendimentoPlataformaOrganizacao> = await this.repository.find(); 

    if (atendimento.length == 0) {
      return 'Não existem atendimentos de plataforma para Organizacao cadastrados';
    }
        
    return atendimento;
  }

  async findOne(id: number) : Promise<AtendimentoPlataformaOrganizacao> {
    const atendimento = await this.repository.findOneBy({id});

    if(!atendimento){
      throw new RecordNotFoundException;
    }
        
    return atendimento;
  }

  async update(id: number, updateAtendimentoPlataformaOrganizacaoDto: UpdateAtendimentoPlataformaOrganizacaoDto) : Promise<AtendimentoPlataformaOrganizacao>{
    await this.repository.update(id, updateAtendimentoPlataformaOrganizacaoDto);
    const atendimento = await this.repository.findOneBy({id});
    if(!atendimento){
      throw new RecordNotFoundException();
    }
    return atendimento;
  }

  async remove(id: number) {
    const atendimento = await this.repository.delete(id);
  
    if (!atendimento?.affected) {
      throw new RecordNotFoundException();
    }
  
    return 'Atendimento de plataforma para Organizacao removido com sucesso'
  }
}
