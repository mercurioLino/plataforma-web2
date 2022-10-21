import { RecordNotFoundException } from "@exceptions";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreatePartidaDto } from "./dto/create-partida.dto";
import { UpdatePartidaEquipeDto } from "./dto/update-partida-equipe.dto";
import { UpdatePartidaIndividualDto } from "./dto/update-partida-individual.dto";
import { UpdatePartidaDto } from "./dto/update-partida.dto";
import { PartidaEquipe } from "./entities/partida-equipe.entity";
import { PartidaIndividual } from "./entities/partida-individual.entity";
import { Partida } from "./entities/partida.entity";


@Injectable()
export class PartidaService {
  constructor(@InjectRepository(Partida) private repository: Repository<Partida>) {}

  async findAll() {
    const partida: Array<Partida> = await this.repository.find(); 

    if (partida.length == 0) {
      return 'Não existem partidas entre s cadastradas';
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

  async remove(id: number) {
    const partida = await this.repository.delete(id);
  
    if (!partida?.affected) {
      throw new RecordNotFoundException();
    }
  
    return 'Partida removido com sucesso!';
  }
}
