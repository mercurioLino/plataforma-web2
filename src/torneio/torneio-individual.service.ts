import { Jogador } from 'src/jogador/entities/jogador.entity';
import { AddJogadorTorneioDto } from './dto/add-jogador-torneio.dto';
import { RecordNotFoundException } from '@exceptions';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTorneioIndividualDto } from './dto/create-torneio-individual.dto';
import { TorneioIndividual } from './entities/torneio-individual.entity';
import { UpdateTorneioIndividualDto } from './dto/update-torneio-individual.dto';

@Injectable()
export class TorneioIndividualService {

  constructor(@InjectRepository(TorneioIndividual) private repository: Repository<TorneioIndividual>,
  @InjectRepository(Jogador) private repositoryJogador: Repository<Jogador>) {}

  create(createTorneioIndividualDto: CreateTorneioIndividualDto) {
    const torneioIndividual: TorneioIndividual = this.repository.create(createTorneioIndividualDto);
    return this.repository.save(torneioIndividual);
  }

  async update(id: number, updateTorneioDto: UpdateTorneioIndividualDto ): Promise<TorneioIndividual> {
    await this.repository.update(id, updateTorneioDto);
    const torneio = await this.repository.findOneBy({id});

    if(!torneio){
      throw new RecordNotFoundException();
    }

    return torneio;
  }

  async gerarPartidas(id: number){
    const torneio: TorneioIndividual = await this.repository.findOneBy({id});
    return this.repository.save(torneio);
  }

  async addJogador(id: number, addJogadorTorneioDto: AddJogadorTorneioDto){
    const torneio: TorneioIndividual = await this.repository.findOneBy({id});
    torneio.jogadores.push(await this.repositoryJogador.findOneBy({id: addJogadorTorneioDto.id}));
    return this.repository.save(torneio);
  }
}
