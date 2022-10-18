import { RecordNotFoundException } from '@exceptions';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePartidaJogadorDto } from './dto/create-partida-jogador.dto';
import { UpdatePartidaJogadorDto } from './dto/update-partida-jogador.dto';
import { PartidaJogador } from './entities/partida-jogador.entity';

@Injectable()
export class PartidaJogadorService {
  
  constructor(@InjectRepository(PartidaJogador) private repository: Repository<PartidaJogador>) {}

  create(createPartidaJogadorDto: CreatePartidaJogadorDto) {
    const partida: PartidaJogador = new PartidaJogador()
    partida.data = createPartidaJogadorDto.data;
    partida.hora = createPartidaJogadorDto.hora;
    return this.repository.save(partida);
  }

  async findAll() {
    const partida: Array<PartidaJogador> = await this.repository.find(); 

    if (partida.length == 0) {
      return 'Não existem partidas entre jogadores cadastradas';
    }
        
    return partida;
  }

  async findOne(id: number) {
    const partida = await this.repository.findOneBy({id});

    if(!partida){
      throw new RecordNotFoundException;
    }
        
    return partida;
  }

  async update(id: number, updatePartidaJogadorDto: UpdatePartidaJogadorDto): Promise<PartidaJogador>{
    await this.repository.update(id, updatePartidaJogadorDto);
    const partida = await this.repository.findOneBy({id});
    if(!partida){
      throw new RecordNotFoundException();
    }
    return partida;
  }

  async remove(id: number) {
    const partida = await this.repository.delete(id);
  
    if (!partida?.affected) {
      throw new RecordNotFoundException();
    }
  
    return 'Partida removido com sucesso!';
  }
}
