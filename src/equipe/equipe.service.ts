import { RecordNotFoundException } from '@exceptions';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IPaginationOptions, Pagination, paginate } from 'nestjs-typeorm-paginate';
import { RelationEntityDto } from 'src/shared/dto/relation-entity.dto';
import { Jogador } from 'src/usuario/entities/jogador.entity';
import { FindOptionsWhere, ILike, Repository } from 'typeorm';
import { CreateEquipeDto } from './dto/create-equipe.dto';
import { UpdateEquipeDto } from './dto/update-equipe.dto';
import { Equipe } from './entities/equipe.entity';

@Injectable()
export class EquipeService {

  constructor(
    @InjectRepository(Equipe) private repository: Repository<Equipe>,
    @InjectRepository(Jogador) private repositoryJogador: Repository<Jogador>) {}

  create(createEquipeDto: CreateEquipeDto) {
    const equipe: Equipe = this.repository.create(createEquipeDto);
    return this.repository.save(equipe);
  }

  async findAll(options: IPaginationOptions, search?: string): Promise<Pagination<Equipe>> {
    const where: FindOptionsWhere<Equipe>={}; 

    if (search) {
      where.nome = ILike(`%${search}%`);
    }
        
    return paginate<Equipe>(this.repository, options, {where});
  }

  async findOne(id: number): Promise<Equipe> {
    const equipe = await this.repository.findOneBy({id});

    if(!equipe){
      throw new RecordNotFoundException;
    }
    return equipe;
  }

  async update(id: number, updateEquipeDto: UpdateEquipeDto): Promise<Equipe> {
    await this.repository.update(id, updateEquipeDto);
    const equipe = await this.repository.findOneBy({id});
    if(!equipe){
      throw new RecordNotFoundException();
    }
    return equipe;
  }

  async remove(id: number) {
    const equipe = await this.repository.findOneBy({id});
    if(!equipe){
      throw new RecordNotFoundException();
    }
    this.repository.delete(id)
    return `Equipe removido com sucesso!`;
  }

  async addJogador(id: number, relationEntityDto: RelationEntityDto){
    const equipe = await this.repository.findOneBy({id});
    if(!equipe){
      throw new RecordNotFoundException();
    }

    const jogador = await this.repositoryJogador.findOneBy({id: relationEntityDto.id})

    if(!jogador){
      throw new RecordNotFoundException();
    }
    equipe.jogadores.push(jogador);
    return this.repository.save(equipe);
  }
}