import { RecordNotFoundException } from '@exceptions';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IPaginationOptions, Pagination, paginate } from 'nestjs-typeorm-paginate';
import { RelationEntityDto } from 'src/shared/dto/relation-entity.dto';
import { Jogador } from 'src/usuario/entities/jogador.entity';
import { FindOptionsWhere, ILike, Repository } from 'typeorm';
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

    async findAll(options: IPaginationOptions, search?: string): Promise<Pagination<PartidaIndividual>> {
      const where: FindOptionsWhere<PartidaIndividual>={}; 
  
      if (search) {
        where.torneio = ILike(`%${search}%`);
      }
          
      return paginate<PartidaIndividual>(this.repository, options, {where});
    }
    
    async update(id: number, updatePartidaDto: UpdatePartidaIndividualDto): Promise<PartidaIndividual> {
      await this.repository.update(id, updatePartidaDto);
      const partida = await this.repository.findOneBy({id});
  
      if(!partida){
        throw new RecordNotFoundException();
      }
  
      return partida;
    }
}
