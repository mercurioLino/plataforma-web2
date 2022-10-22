import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateJogoDto } from './dto/create-jogo.dto';
import { UpdateJogoDto } from './dto/update-jogo.dto';
import { Repository } from 'typeorm';
import { Jogo } from './entities/jogo.entity';
import { RecordNotFoundException } from '@exceptions';

@Injectable()
export class JogoService {

  constructor(@InjectRepository (Jogo) private respository: Repository<Jogo>){}
  

  create(createJogoDto: CreateJogoDto) {
    const jogo: Jogo = new Jogo();
    jogo.nome = createJogoDto.nome;
    jogo.categoria = createJogoDto.categoria;
    jogo.regras = createJogoDto.regras;
    jogo.torneios = createJogoDto.torneios;
    //jogo.torneiosIndividuais = createJogoDto.torneiosIndividuais;
    jogo.perfis = createJogoDto.perfis;
    return this.respository.save(jogo);
  }

  async findAll() {
    const jogo: Array<Jogo> = await this.respository.find();

    if(jogo.length ==0){
      return 'Não existem jogos cadastrados'
    }

    return jogo;
  }

  async findOne(id: number) {
    const jogo = await this.respository.findOneBy({id});

    if(!jogo){
      throw new RecordNotFoundException;
    }


    return jogo;
  }

  async update(id: number, updateJogoDto: UpdateJogoDto): Promise<Jogo> {
    await this.respository.update(id, updateJogoDto);
    const jogo = await this.respository.findOneBy({id});
    if(!jogo){
      throw new RecordNotFoundException;
    }
    return jogo;
  }

  async remove(id: number) {
    const jogo = await this.respository.delete(id);
    if(!jogo.affected){
      throw new RecordNotFoundException;
    }
    return jogo;
  }
}
