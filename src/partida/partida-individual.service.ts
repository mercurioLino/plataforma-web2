import { RecordNotFoundException } from '@exceptions';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RelationEntityDto } from 'src/shared/dto/relation-entity.dto';
import { Jogador } from 'src/usuario/entities/jogador.entity';
import { Repository } from 'typeorm';
import { CreatePartidaIndividualDto } from './dto/create-partida-individual.dto';
import { UpdatePartidaIndividualDto } from './dto/update-partida-individual.dto';
import { PartidaIndividual } from './entities/partida-individual.entity';

@Injectable()
export class PartidaIndividualService {
  constructor(
    @InjectRepository(PartidaIndividual) private repository: Repository<PartidaIndividual>,
    @InjectRepository(Jogador) private repositoryJogador: Repository<Jogador>) {}

    create(createPartidaIndividualDto: CreatePartidaIndividualDto) {
      const partidaIndividual: PartidaIndividual = this.repository.create(createPartidaIndividualDto);
      return this.repository.save(partidaIndividual);
    }

    async update(id: number, updatePartidaDto: UpdatePartidaIndividualDto): Promise<PartidaIndividual> {
      await this.repository.update(id, updatePartidaDto);
      const partida = await this.repository.findOneBy({id});
  
      if(!partida){
        throw new RecordNotFoundException();
      }
  
      return partida;
    }

    async addJogador(id: number, relationEntityDto: RelationEntityDto){
      const partida: PartidaIndividual = await this.repository.findOneBy({id});
      partida.jogadores.push(await this.repositoryJogador.findOneBy({id: relationEntityDto.id}));
      return this.repository.save(partida);
    }
}
