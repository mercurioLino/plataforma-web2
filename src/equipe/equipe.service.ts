import { RecordNotFoundException } from '@exceptions';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RelationEntityDto } from 'src/shared/dto/relation-entity.dto';
import { Jogador } from 'src/usuario/entities/jogador.entity';
import { Repository } from 'typeorm';
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

  async findAll() {
    const equipe: Array<Equipe> = await this.repository.find();

    if(equipe.length == 0){
      return 'Não existem equipes cadastradas';
    }
    return equipe;
  }

  async findOne(id: number): Promise<Equipe> {
    const equipe = await this.repository.findOneBy({id});

    if(!Equipe){
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
    const equipe = await this.repository.delete(id);
    if(!equipe.affected){
      throw new RecordNotFoundException();
    }
    return `Equipe removido com sucesso!`;
  }

  async addJogador(id: number, relationEntityDto: RelationEntityDto){
    const equipe = await this.repository.findOneBy({id});
    equipe.jogadores.push(await this.repositoryJogador.findOneBy({id: relationEntityDto.id}));
    return this.repository.save(equipe);
  }
}