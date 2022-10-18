import { RecordNotFoundException } from '@exceptions';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAtendimentoPlataformaJogadorDto } from './dto/create-atendimento-plataforma-jogador.dto';
import { UpdateAtendimentoPlataformaJogadorDto } from './dto/update-atendimento-plataforma-jogador.dto';
import { AtendimentoPlataformaJogador } from './entities/atendimento-plataforma-jogador.entity';

@Injectable()
export class AtendimentoPlataformaJogadorService {
  constructor(@InjectRepository(AtendimentoPlataformaJogador) private repository: Repository<AtendimentoPlataformaJogador>) {}

  create(createAtendimentoPlataformaJogadorDto: CreateAtendimentoPlataformaJogadorDto) : Promise<AtendimentoPlataformaJogador> {
    const atendimento: AtendimentoPlataformaJogador = new AtendimentoPlataformaJogador();
    atendimento.descricao = createAtendimentoPlataformaJogadorDto.descricao;
    atendimento.feedback = createAtendimentoPlataformaJogadorDto.feedback;
    atendimento.status = "Em aberto";

    return this.repository.save(atendimento);
  }

  async findAll() {
    const atendimento: Array<AtendimentoPlataformaJogador> = await this.repository.find(); 

    if (atendimento.length == 0) {
      return 'Não existem atendimentos de plataforma para jogador cadastrados';
    }
        
    return atendimento;
  }

  async findOne(id: number) : Promise<AtendimentoPlataformaJogador> {
    const atendimento = await this.repository.findOneBy({id});

    if(!atendimento){
      throw new RecordNotFoundException;
    }
        
    return atendimento;
  }

  async update(id: number, updateAtendimentoPlataformaJogadorDto: UpdateAtendimentoPlataformaJogadorDto) : Promise<AtendimentoPlataformaJogador>{
    await this.repository.update(id, updateAtendimentoPlataformaJogadorDto);
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
  
    return 'Atendimento de plataforma para jogador removido com sucesso'
  }
}
