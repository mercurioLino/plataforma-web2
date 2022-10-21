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
    const partidaEquipe: PartidaEquipe = this.repository.create(createPartidaEquipeDto);
    return this.repository.save(partidaEquipe);
  }

  async update(id: number, updatePartidaDto: UpdatePartidaEquipeDto): Promise<PartidaEquipe> {
    await this.repository.update(id, updatePartidaDto);
    const partida = await this.repository.findOneBy({id});

    if(!partida){
      throw new RecordNotFoundException();
    }

    return partida;
  }
}
