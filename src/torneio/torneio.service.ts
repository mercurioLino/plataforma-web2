import { RecordNotFoundException } from '@exceptions';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Torneio } from './entities/torneio.entity';

@Injectable()
export class TorneioService {

  constructor(@InjectRepository(Torneio) private repository: Repository<Torneio>) {}

  async findAll() {
    const torneio: Array<Torneio> = await this.repository.find(); 

    if (torneio.length == 0) {
      return 'Não existem torneio individuais cadastrados';
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

  
  async remove(id: number) {
    const torneio = await this.repository.delete(id);
  
    if (!torneio?.affected) {
      throw new RecordNotFoundException();
    }
  
    return 'Torneio removido com sucesso!';
  }
}
