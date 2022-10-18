import { RecordNotFoundException } from '@exceptions';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTorneioDto } from './dto/create-torneio.dto';
import { UpdateTorneioDto } from './dto/update-torneio.dto';
import { Torneio } from './entities/torneio.entity';

@Injectable()
export class TorneioService {

  constructor(@InjectRepository(Torneio) private repository: Repository<Torneio>) {}
  
  create(createTorneioDto: CreateTorneioDto) {
    const torneio: Torneio = new Torneio();
    torneio.data = createTorneioDto.data;
    torneio.hora = createTorneioDto.hora;
    torneio.nome = createTorneioDto.nome;
    torneio.premiacao = createTorneioDto.premiacao;
    torneio.regras = createTorneioDto.regras;

    return this.repository.save(torneio);
  }

  async findAll() {
    const torneio: Array<Torneio> = await this.repository.find(); 

    if (torneio.length == 0) {
      return 'Não existem torneios cadastrados';
    }
        
    return torneio;
  }

  async findOne(id: number) {
    const torneio = await this.repository.findOneBy({id});

    if(!torneio){
      throw new RecordNotFoundException;
    }
        
    return torneio;
  }

  async update(id: number, updateTorneioDto: UpdateTorneioDto): Promise<Torneio> {
    await this.repository.update(id, updateTorneioDto);
    const torneio = await this.repository.findOneBy({id});
    if(!torneio){
      throw new RecordNotFoundException();
    }
    return torneio;
  }

  async remove(id: number) {
    const torneio = await this.repository.delete(id);
  
    if (!torneio?.affected) {
      throw new RecordNotFoundException();
    }
  
    return 'Torneio removido com sucesso!';
  }
}
