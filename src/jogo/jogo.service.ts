import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateJogoDto } from './dto/create-jogo.dto';
import { UpdateJogoDto } from './dto/update-jogo.dto';
import { FindOptionsWhere, ILike, Repository } from 'typeorm';
import { Jogo } from './entities/jogo.entity';
import { RecordNotFoundException } from '@exceptions';
import { IPaginationOptions, Pagination, paginate } from 'nestjs-typeorm-paginate';

@Injectable()
export class JogoService {

  constructor(@InjectRepository (Jogo) private repository: Repository<Jogo>){}
  

  create(createJogoDto: CreateJogoDto) {
    const jogo: Jogo = this.repository.create(createJogoDto)
    return this.repository.save(jogo);
  }

  async findAll(options: IPaginationOptions, search?: string): Promise<Pagination<Jogo>> {
    const where: FindOptionsWhere<Jogo>={}; 

    if (search) {
      where.categoria = ILike(`%${search}%`);
    }
        
    return paginate<Jogo>(this.repository, options, {where});
  }

  async findOne(id: number) {
    const jogo = await this.repository.findOneBy({id});

    if(!jogo){
      throw new RecordNotFoundException;
    }


    return jogo;
  }

  async update(id: number, updateJogoDto: UpdateJogoDto): Promise<Jogo> {
    await this.repository.update(id, updateJogoDto);
    const jogo = await this.repository.findOneBy({id});
    if(!jogo){
      throw new RecordNotFoundException;
    }
    return jogo;
  }

  async remove(id: number) {
    const jogo = await this.repository.delete(id);
    if(!jogo.affected){
      throw new RecordNotFoundException;
    }
    return jogo;
  }
}
