import { RecordNotFoundException } from '@exceptions';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateJogadorPerfilJogoDto } from './dto/create-jogador-perfil-jogo.dto';
import { UpdateJogadorPerfilJogoDto } from './dto/update-jogador-perfil-jogo.dto';
import { JogadorPerfilJogo } from './entities/jogador-perfil-jogo.entity';

@Injectable()
export class JogadorPerfilJogoService {

  constructor(@InjectRepository(JogadorPerfilJogo) private repository: Repository<JogadorPerfilJogo>) {}

  create(createJogadorPerfilJogoDto: CreateJogadorPerfilJogoDto) {
    const perfil: JogadorPerfilJogo = new JogadorPerfilJogo();
    perfil.elo = createJogadorPerfilJogoDto.elo;
    perfil.nickname = createJogadorPerfilJogoDto.nickname;
    perfil.jogador = createJogadorPerfilJogoDto.jogador;
    perfil.jogo = createJogadorPerfilJogoDto.jogo;
    return this.repository.save(perfil);
  }

  async findAll() {
    const perfil: Array<JogadorPerfilJogo> = await this.repository.find(); 

    if (perfil.length == 0) {
      return 'Não existem perfis cadastrados';
    }
        
    return perfil;
  }

  async findOne(id: number) {
    const perfil = await this.repository.findOneBy({id});

    if(!perfil){
      throw new RecordNotFoundException;
    }
        
    return perfil;
  }

  async update(id: number, updateJogadorPerfilJogoDto: UpdateJogadorPerfilJogoDto): Promise<JogadorPerfilJogo> {
    await this.repository.update(id, updateJogadorPerfilJogoDto);
    const perfil = await this.repository.findOneBy({id});
    if(!perfil){
      throw new RecordNotFoundException();
    }
    return perfil;
  }

  async remove(id: number) {
    const perfil = await this.repository.delete(id);
  
    if (!perfil?.affected) {
      throw new RecordNotFoundException();
    }
  
    return 'Perfil removido com sucesso!';
  }
}
