import { RecordNotFoundException } from '@exceptions';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTorneioIndividualDto } from './dto/create-torneio-individual.dto';
import { UpdateTorneioEquipeDto } from './dto/update-torneio-equipe.dto';
import { UpdateTorneioIndividualDto } from './dto/update-torneio-individual.dto';
import { TorneioEquipe } from './entities/torneio-equipe.entity';
import { TorneioIndividual } from './entities/torneio-individual.entity';

@Injectable()
export class TorneioService {

  constructor(@InjectRepository(TorneioIndividual) private repository: Repository<TorneioIndividual>) {}

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

  async update(id: number, updateTorneioDto: UpdateTorneioIndividualDto | UpdateTorneioEquipeDto): Promise<TorneioIndividual|TorneioEquipe> {
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
