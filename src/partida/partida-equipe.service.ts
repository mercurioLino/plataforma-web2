import { RecordNotFoundException } from "@exceptions";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreatePartidaEquipeDto } from "./dto/create-partida-equipe.dto";
import { UpdatePartidaEquipeDto } from "./dto/update-partida-equipe.dto";
import { PartidaEquipe } from "./entities/partida-equipe.entity";


@Injectable()
export class PartidaEquipeService {
  constructor(@InjectRepository(PartidaEquipe) private repository: Repository<PartidaEquipe>) {}

  create(createPartidaEquipeDto: CreatePartidaEquipeDto) {
    const partida: PartidaEquipe = this.repository.create(createPartidaEquipeDto);
    return this.repository.save(partida);
  }

  async findAll() {
    const partida: Array<PartidaEquipe> = await this.repository.find(); 

    if (partida.length == 0) {
      return 'Não existem partidas entre equipes cadastradas';
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

  async update(id: number, updatePartidaEquipeDto: UpdatePartidaEquipeDto): Promise<PartidaEquipe> {
    await this.repository.update(id, updatePartidaEquipeDto);
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
