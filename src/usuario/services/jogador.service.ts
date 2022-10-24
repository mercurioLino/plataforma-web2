import { RecordNotFoundException } from "@exceptions";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { IPaginationOptions, paginate, Pagination } from "nestjs-typeorm-paginate";
import { CreateAtendimentoDto } from "src/atendimento/dto/create-atendimento.dto";
import { Atendimento } from "src/atendimento/entities/atendimento.entity";
import { FindOptionsWhere, ILike, Repository } from "typeorm";
import { CreateJogadorDto } from "../dto/create-jogador.dto";
import { UpdateJogadorDto } from "../dto/update-jogador.dto";
import { Jogador } from "../entities/jogador.entity";


@Injectable()
export class JogadorService {

  constructor(@InjectRepository(Jogador) private repository: Repository<Jogador>,
  @InjectRepository(Atendimento) private repositoryAtendimento: Repository<Atendimento>) {}

  async create(createJogadorDto: CreateJogadorDto) {
    const jogador: Jogador = this.repository.create(createJogadorDto);
    jogador.pontuacao = 0;
    jogador.role = "jogador";
    return this.repository.save(jogador);
  }

  async findOne(id: number) {
    const usuario = await this.repository.findOneBy({id});

    if(!usuario){
      throw new RecordNotFoundException;
    }

    return usuario;
  }

  async findAll(options: IPaginationOptions, search?: string): Promise<Pagination<Jogador>> {
    const where: FindOptionsWhere<Jogador>={}; 

    if (search) {
      where.nome = ILike(`%${search}%`);
    }
        
    return paginate<Jogador>(this.repository, options, {where});
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

  async solicitarAtendimento(id: number, createAtendimentoDto: CreateAtendimentoDto){
    const jogador = await this.repository.findOneBy({id});
    if(!jogador){
      throw new RecordNotFoundException();
    }
    const atendimento = this.repositoryAtendimento.create(createAtendimentoDto);
    atendimento.feedback = "Aguardando Conclusão";
    atendimento.status = "Em aberto";
    atendimento.jogador = jogador;
    return this.repositoryAtendimento.save(atendimento);
  }
}
