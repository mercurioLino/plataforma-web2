import { Jogador } from 'src/jogador/entities/jogador.entity';
import { AddJogadorTorneioDto } from './dto/add-jogador-torneio.dto';
import { RecordNotFoundException } from '@exceptions';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTorneioIndividualDto } from './dto/create-torneio-individual.dto';
import { TorneioIndividual } from './entities/torneio-individual.entity';

@Injectable()
export class TorneioIndividualService {

  constructor(@InjectRepository(TorneioIndividual) private repository: Repository<TorneioIndividual>,
  @InjectRepository(Jogador) private repositoryJogador: Repository<Jogador>) {}

  create(createTorneioIndividualDto: CreateTorneioIndividualDto) {
    const torneioIndividual: TorneioIndividual = this.repository.create(createTorneioIndividualDto);
    return this.repository.save(torneioIndividual);
  }

  async addJogador(id: number, addJogadorTorneioDto: AddJogadorTorneioDto){
    const torneio: TorneioIndividual = await this.repository.findOneBy({id});
    torneio.jogadores.push(await this.repositoryJogador.findOneBy({id: addJogadorTorneioDto.id}));
    return this.repository.save(torneio);
  }
}
