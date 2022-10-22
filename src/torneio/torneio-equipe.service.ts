import { PartidaEquipe } from 'src/partida/entities/partida-equipe.entity';
import { Equipe } from 'src/equipe/entities/equipe.entity';
import { RecordNotFoundException } from '@exceptions';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTorneioEquipeDto } from './dto/create-torneio-equipe.dto';
import { UpdateTorneioEquipeDto } from './dto/update-torneio-equipe.dto';
import { TorneioEquipe } from './entities/torneio-equipe.entity';
import { CreatePartidaEquipeDto } from 'src/partida/dto/create-partida-equipe.dto';
import { AddEquipeTorneioDto } from './dto/add-equipe-torneio.dto';

@Injectable()
export class TorneioEquipeService {
  
  constructor(
    @InjectRepository(TorneioEquipe) private repository: Repository<TorneioEquipe>,
    @InjectRepository(Equipe) private repositoryEquipe: Repository<Equipe>,
    @InjectRepository(PartidaEquipe) private repositoryPartidaIndividual: Repository<PartidaEquipe>
  ) {}

  create(createTorneioEquipeDto: CreateTorneioEquipeDto) {
    const torneioEquipe: TorneioEquipe = this.repository.create(createTorneioEquipeDto);
    return this.repository.save(torneioEquipe);
  }

  async findAll() {
    const torneio: Array<TorneioEquipe> = await this.repository.find(); 

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

  async update(id: number, updateTorneioDto: UpdateTorneioEquipeDto ): Promise<TorneioEquipe> {
    await this.repository.update(id, updateTorneioDto);
    const torneio = await this.repository.findOneBy({id});

    if(!torneio){
      throw new RecordNotFoundException();
    }

    return torneio;
  }

  async addJogador(id: number, addEquipeTorneioDto: AddEquipeTorneioDto){
    const torneio: TorneioEquipe = await this.repository.findOneBy({id});

    torneio.equipes.push(await this.repositoryEquipe.findOneBy({id: addEquipeTorneioDto.id}));
    return this.repository.save(torneio);
  }

  async gerarPartida(id: number, createPartidaEquipeDto: CreatePartidaEquipeDto){
    const torneio = await this.findOne(id);
    const equipesInscritas = torneio.equipes;
    if(equipesInscritas.length < 16){
      return 'Não há equipes suficientes inscritos para gerar as partidas'
    }
    
    do{
      const partida = this.repositoryPartidaIndividual.create(createPartidaEquipeDto);
      partida.equipes = []
      for(let i = 0; i < 2; i++){
        const indexEquipe=Math.floor(Math.random() * equipesInscritas.length)
        partida.equipes.push(equipesInscritas[indexEquipe]);
        equipesInscritas.splice(indexEquipe, 1);
      }
      torneio.partidas.push(partida)
    }while(torneio.partidas.length < 8)

    this.repository.save(torneio)

    return torneio;
  }

  

}
