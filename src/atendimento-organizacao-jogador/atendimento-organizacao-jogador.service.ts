import { RecordNotFoundException } from '@exceptions';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAtendimentoOrganizacaoJogadorDto } from './dto/create-atendimento-organizacao-jogador.dto';
import { UpdateAtendimentoOrganizacaoJogadorDto } from './dto/update-atendimento-organizacao-jogador.dto';
import { AtendimentoOrganizacaoJogador } from './entities/atendimento-organizacao-jogador.entity';

@Injectable()
export class AtendimentoOrganizacaoJogadorService {

  constructor(@InjectRepository(AtendimentoOrganizacaoJogador) private repository: Repository<AtendimentoOrganizacaoJogador>) {}

  create(createAtendimentoOrganizacaoJogadorDto: CreateAtendimentoOrganizacaoJogadorDto) : Promise<AtendimentoOrganizacaoJogador> {
    const atendimento: AtendimentoOrganizacaoJogador = new AtendimentoOrganizacaoJogador();
    atendimento.descricao = createAtendimentoOrganizacaoJogadorDto.descricao;
    atendimento.feedback = createAtendimentoOrganizacaoJogadorDto.feedback;
    atendimento.status = "Em aberto";

    return this.repository.save(atendimento);
  }

  async findAll() {
    const atendimento: Array<AtendimentoOrganizacaoJogador> = await this.repository.find(); 

    if (atendimento.length == 0) {
      return 'Não existem atendimentos de organização para jogador cadastrados';
    }
        
    return atendimento;
  }

  async findOne(id: number) : Promise<AtendimentoOrganizacaoJogador> {
    const atendimento = await this.repository.findOneBy({id});

    if(!atendimento){
      throw new RecordNotFoundException;
    }
        
    return atendimento;
  }

  async update(id: number, updateAtendimentoOrganizacaoJogadorDto: UpdateAtendimentoOrganizacaoJogadorDto) : Promise<AtendimentoOrganizacaoJogador>{
    await this.repository.update(id, updateAtendimentoOrganizacaoJogadorDto);
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
  
    return 'Atendimento de organização para jogador removido com sucesso'
  }
}
