import { RecordNotFoundException } from '@exceptions';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTorneioEquipeDto } from './dto/create-torneio-equipe.dto';
import { UpdateTorneioEquipeDto } from './dto/update-torneio-equipe.dto';
import { TorneioEquipe } from './entities/torneio-equipe.entity';

@Injectable()
export class TorneioEquipeService {
  
  constructor(@InjectRepository(TorneioEquipe) private repository: Repository<TorneioEquipe>) {}

  create(createTorneioEquipeDto: CreateTorneioEquipeDto) {
    const torneioEquipe: TorneioEquipe = this.repository.create(createTorneioEquipeDto);
    return this.repository.save(torneioEquipe);
  }

  async update(id: number, updateTorneioDto: UpdateTorneioEquipeDto ): Promise<TorneioEquipe> {
    await this.repository.update(id, updateTorneioDto);
    const torneio = await this.repository.findOneBy({id});

    if(!torneio){
      throw new RecordNotFoundException();
    }

    return torneio;
  }

}
