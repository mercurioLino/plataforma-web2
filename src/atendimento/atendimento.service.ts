import { RecordNotFoundException } from '@exceptions';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAtendimentoDto } from './dto/create-atendimento.dto';
import { UpdateAtendimentoDto } from './dto/update-atendimento.dto';
import { Atendimento } from './entities/atendimento.entity';

@Injectable()
export class AtendimentoService {
  constructor(@InjectRepository(Atendimento) private repository: Repository<Atendimento>) {}

  create(createAtendimentoDto: CreateAtendimentoDto) : Promise<Atendimento> {
    const atendimento: Atendimento = new Atendimento();
    atendimento.descricao = createAtendimentoDto.descricao;
    atendimento.feedback = createAtendimentoDto.feedback;
    atendimento.status = "Em aberto";
    atendimento.jogador = createAtendimentoDto.jogador;
    atendimento.funcionario = createAtendimentoDto.funcionario;
    return this.repository.save(atendimento);
  }

  async findAll() {
    const atendimento: Array<Atendimento> = await this.repository.find(); 

    if (atendimento.length == 0) {
      return 'Não existem atendimentos de organização para jogador cadastrados';
    }
        
    return atendimento;
  }

  async findOne(id: number) : Promise<Atendimento> {
    const atendimento = await this.repository.findOneBy({id});

    if(!atendimento){
      throw new RecordNotFoundException;
    }
        
    return atendimento;
  }

  async update(id: number, updateAtendimentoDto: UpdateAtendimentoDto) : Promise<Atendimento>{
    await this.repository.update(id, updateAtendimentoDto);
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
