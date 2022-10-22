
import { PartidaIndividual } from 'src/partida/entities/partida-individual.entity';
import { Jogador } from 'src/jogador/entities/jogador.entity';
import { AddJogadorTorneioDto } from './dto/add-jogador-torneio.dto';
import { RecordNotFoundException } from '@exceptions';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTorneioIndividualDto } from './dto/create-torneio-individual.dto';
import { TorneioIndividual } from './entities/torneio-individual.entity';
import { UpdateTorneioIndividualDto } from './dto/update-torneio-individual.dto';
import { CreatePartidaIndividualDto } from 'src/partida/dto/create-partida-individual.dto';

@Injectable()
export class TorneioIndividualService {

  constructor(@InjectRepository(TorneioIndividual) private repository: Repository<TorneioIndividual>,
  @InjectRepository(Jogador) private repositoryJogador: Repository<Jogador>,
  @InjectRepository(PartidaIndividual) private repositoryPartidaIndividual: Repository<PartidaIndividual>){}

  create(createTorneioIndividualDto: CreateTorneioIndividualDto) {
    const torneioIndividual: TorneioIndividual = this.repository.create(createTorneioIndividualDto);
    torneioIndividual.qtdParticipantes = 16;
    return this.repository.save(torneioIndividual);
  }

  async findAll() {
    const torneio: Array<TorneioIndividual> = await this.repository.find(); 

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

  async update(id: number, updateTorneioDto: UpdateTorneioIndividualDto ): Promise<TorneioIndividual> {
    await this.repository.update(id, updateTorneioDto);
    const torneio = await this.repository.findOneBy({id});

    if(!torneio){
      throw new RecordNotFoundException();
    }

    return torneio;
  }

  async addJogador(id: number, addJogadorTorneioDto: AddJogadorTorneioDto){
    const torneio: TorneioIndividual = await this.repository.findOneBy({id});
    if(torneio.jogadores.length == 16){
      return 'Este torneio atingiu o limite máximo de inscrições'
    }
    torneio.jogadores.push(await this.repositoryJogador.findOneBy({id: addJogadorTorneioDto.id}));
    return this.repository.save(torneio);
  }

  
  async gerarPartida(id: number, createPartidaIndividualDto: CreatePartidaIndividualDto){
    const torneio = await this.findOne(id);
    const jogadoresInscritos = torneio.jogadores;

    if(jogadoresInscritos.length < 16){
      return 'Não há jogadores suficientes inscritos para gerar as partidas'
    } 
    
    do{
      const partida = this.repositoryPartidaIndividual.create(createPartidaIndividualDto);
      partida.jogadores = []
      for(let i = 0; i < 2; i++){
        const indexJogador=Math.floor(Math.random() * jogadoresInscritos.length)
        partida.jogadores.push(jogadoresInscritos[indexJogador]);
        jogadoresInscritos.splice(indexJogador, 1);
      }
      torneio.partidas.push(partida)
    }while(torneio.partidas.length < 8)

    this.repository.save(torneio)

    return 'Partidas geradas';
  }
}
