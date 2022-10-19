import { RecordNotFoundException } from '@exceptions';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTorneioIndividualDto } from './dto/create-torneio-individual.dto';
import { UpdateTorneioIndividualDto } from './dto/update-torneio-individual.dto';
import { TorneioIndividual } from './entities/torneio-individual.entity';

@Injectable()
export class TorneioIndividualService {

  constructor(@InjectRepository(TorneioIndividual) private repository: Repository<TorneioIndividual>) {}

  create(createTorneioIndividualDto: CreateTorneioIndividualDto) {
    const torneioIndividual: TorneioIndividual = this.repository.create(createTorneioIndividualDto);
    torneioIndividual.data = createTorneioIndividualDto.data;
    torneioIndividual.hora = createTorneioIndividualDto.hora;
    torneioIndividual.nome = createTorneioIndividualDto.nome;
    torneioIndividual.premiacao = createTorneioIndividualDto.premiacao;
    torneioIndividual.regras = createTorneioIndividualDto.regras;
    torneioIndividual.partidas = createTorneioIndividualDto.partidas;
    torneioIndividual.organizacao = createTorneioIndividualDto.organizacao;
    torneioIndividual.jogo = createTorneioIndividualDto.jogo;
    return this.repository.save(torneioIndividual);
  }

  async findAll() {
    const torneioIndividual: Array<TorneioIndividual> = await this.repository.find(); 

    if (torneioIndividual.length == 0) {
      return 'Não existem torneio individuais cadastrados';
    }
        
    return torneioIndividual;
  }

  async findOne(id: number) {
    const torneioIndividual = await this.repository.findOneBy({id});

    if(!torneioIndividual){
      throw new RecordNotFoundException;
    }
        
    return torneioIndividual;
  }

  async update(id: number, updateTorneioIndividualDto: UpdateTorneioIndividualDto): Promise<TorneioIndividual> {
    await this.repository.update(id, updateTorneioIndividualDto);
    const torneioIndividual = await this.repository.findOneBy({id});
    if(!torneioIndividual){
      throw new RecordNotFoundException();
    }
    return torneioIndividual;
  }

  async remove(id: number) {
    const torneioIndividual = await this.repository.delete(id);
  
    if (!torneioIndividual?.affected) {
      throw new RecordNotFoundException();
    }
  
    return 'TorneioIndividual removido com sucesso!';
  }
}
