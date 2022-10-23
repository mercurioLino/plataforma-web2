import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './entities/usuario.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOptionsWhere, ILike, Repository } from 'typeorm';
import { RecordNotFoundException } from '@exceptions';

@Injectable()
export class UsuarioService {
constructor(@InjectRepository(Usuario) private repository: Repository<Usuario>) {}
  async findOne(id: number) {
    const organizacao = await this.repository.findOneBy({id});

    if(!organizacao){
      throw new RecordNotFoundException;
    }

    return organizacao;
  }

  async findByEmail(email: string, includePassowrd = false): Promise<Usuario> {
    const user = await this.repository
      .createQueryBuilder('user')
      .addSelect('user.password')
      .where('user.email = :email', { email })
      .getOne();

    if (includePassowrd) {
      return user;
    } else {
      const { password, ...result } = user;
      return result as Usuario;
    }
  }  
}
