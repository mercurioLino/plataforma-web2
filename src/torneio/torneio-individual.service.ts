
import { PartidaIndividual } from 'src/partida/entities/partida-individual.entity';
import { RecordNotFoundException } from '@exceptions';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOptionsWhere, ILike, Repository } from 'typeorm';
import { CreateTorneioIndividualDto } from './dto/create-torneio-individual.dto';
import { TorneioIndividual } from './entities/torneio-individual.entity';
import { UpdateTorneioIndividualDto } from './dto/update-torneio-individual.dto';
import { RelationEntityDto } from 'src/shared/dto/relation-entity.dto';
import { CreatePartidaIndividualDto } from 'src/partida/dto/create-partida-individual.dto';
import { Jogador } from 'src/usuario/entities/jogador.entity';
import { IPaginationOptions, Pagination, paginate } from 'nestjs-typeorm-paginate';

@Injectable()
export class TorneioIndividualService {

  constructor(@InjectRepository(TorneioIndividual) private repository: Repository<TorneioIndividual>,
  @InjectRepository(Jogador) private repositoryJogador: Repository<Jogador>,
  @InjectRepository(PartidaIndividual) private repositoryPartida: Repository<PartidaIndividual>){}

  create(createTorneioIndividualDto: CreateTorneioIndividualDto) {
    const torneioIndividual: TorneioIndividual = this.repository.create(createTorneioIndividualDto);
    torneioIndividual.jogo = createTorneioIndividualDto.jogo;
    torneioIndividual.qtdParticipantes = 16;
    return this.repository.save(torneioIndividual);
  }

  async findAll(options: IPaginationOptions, search?: string): Promise<Pagination<TorneioIndividual>> {
    const where: FindOptionsWhere<TorneioIndividual>={}; 

    if (search) {
      where.jogo = ILike(`%${search}%`);
    }
        
    return paginate<TorneioIndividual>(this.repository, options, {where});
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

  async addJogador(id: number, relationEntityDto: RelationEntityDto){
    const torneio: TorneioIndividual = await this.repository.findOneBy({id});
    if(!torneio){
      throw new RecordNotFoundException();
    }
    if(torneio.jogadores.length == 16){
      return 'Este torneio atingiu o limite máximo de inscrições'
    }
    const jogador = await this.repositoryJogador.findOneBy({id: relationEntityDto.id})
    if(!jogador){
      throw new RecordNotFoundException();
    }
    torneio.jogadores.push(jogador);
    return this.repository.save(torneio);
  }

  async gerarPartida(id: number, createPartidaDto: CreatePartidaIndividualDto){
    const torneio = await this.findOne(id);
    torneio.partidas = []

    const jogadoresInscritos = torneio.jogadores;
    let jogadoresAuxiliar: Jogador[] = [];
    if(jogadoresInscritos.length < 16){
      return 'Não há jogadores suficientes inscritos para gerar as partidas'
    } 
 
    for(let i = 0; i < 16; i++){
      jogadoresAuxiliar[i] = jogadoresInscritos[i];
    }
    
    for(let i = 0; i < 8; i++){
      const partida = this.repositoryPartida.create(createPartidaDto);
      partida.jogadores = [];
      for(let j = 0; j < 2; j++){
        const indexJogador=Math.floor(Math.random() * jogadoresInscritos.length)
        partida.jogadores.push(jogadoresInscritos[indexJogador]);
        jogadoresInscritos.splice(indexJogador, 1);
      }
      torneio.partidas.push(partida)
    }

    torneio.jogadores = jogadoresAuxiliar;
    return this.repository.save(torneio);
  }
}
