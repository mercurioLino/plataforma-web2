import { RecordNotFoundException } from '@exceptions';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePartidaIndividualDto } from './dto/create-partida-individual.dto';
import { UpdatePartidaIndividualDto } from './dto/update-partida-individual.dto';
import { PartidaIndividual } from './entities/partida-individual.entity';

@Injectable()
export class PartidaIndividualService {
  constructor(
    @InjectRepository(PartidaIndividual) private repository: Repository<PartidaIndividual>) {}

    create(createPartidaIndividualDto: CreatePartidaIndividualDto) {
      const partidaIndividual: PartidaIndividual = this.repository.create(createPartidaIndividualDto);
      return this.repository.save(partidaIndividual);
    }

    async update(id: number, updatePartidaDto: UpdatePartidaIndividualDto): Promise<PartidaIndividual> {
      await this.repository.update(id, updatePartidaDto);
      const partida = await this.repository.findOneBy({id});
  
      if(!partida){
        throw new RecordNotFoundException();
      }
  
      return partida;
    }
}
