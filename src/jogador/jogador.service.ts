import { RecordNotFoundException } from '@exceptions';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateJogadorDto } from './dto/create-jogador.dto';
import { UpdateJogadorDto } from './dto/update-jogador.dto';
import { Jogador } from './entities/jogador.entity';

@Injectable()
export class JogadorService {

  constructor(@InjectRepository(Jogador) private repository: Repository<Jogador>) {}

  create(createJogadorDto: CreateJogadorDto) {
    const jogador: Jogador = this.repository.create(createJogadorDto);
    jogador.nickname = createJogadorDto.nickname;
    jogador.email = createJogadorDto.email;
    jogador.nome = createJogadorDto.nome;
    jogador.pontuacao = 0;
    jogador.equipe = createJogadorDto.equipe;
    jogador.perfis = createJogadorDto.perfis;
    jogador.partidas = createJogadorDto.partidas;
    jogador.atendimentos = createJogadorDto.atendimentos;
    return this.repository.save(jogador);
  }

  async findAll() {
    const jogador: Array<Jogador> = await this.repository.find(); 

    if (jogador.length == 0) {
      return 'Não existem jogadores cadastrados';
    }
        
    return jogador;
  }

  async findOne(id: number): Promise<Jogador>{
    const jogador = await this.repository.findOneBy({id});

    if(!jogador){
      throw new RecordNotFoundException;
    }

    return jogador;
  }

  async update(id: number, updateJogadorDto: UpdateJogadorDto): Promise<Jogador> {
    await this.repository.update(id, updateJogadorDto);
    const jogador = await this.repository.findOneBy({id});
    if(!jogador){
      throw new RecordNotFoundException();
    }
    return jogador;
  }

  async remove(id: number) {
    const jogador = await this.repository.delete(id);
  
    if (!jogador?.affected) {
      throw new RecordNotFoundException();
    }
  
    return 'Jogador removido com sucesso!';
  }
}
