import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compareSync } from 'bcrypt';
import { Organizacao } from 'src/organizacao/entities/organizacao.entity';
import { OrganizacaoService } from 'src/organizacao/organizacao.service';
import { UserPayload } from './models/user-payload.model';
import { UserToken } from './models/user-token.model';


@Injectable()
export class AuthService {  
    
  constructor(private readonly organizacaoService: OrganizacaoService, private readonly jwtService: JwtService) {}
  
  async validateUser(email: string, pass: string): Promise<Organizacao> {
    const user = await this.organizacaoService.findByEmail(email, true);
  
    if (user) {
      const isPasswordValid = await compareSync(pass, user.password);
      if (isPasswordValid) {
        const { password, ...result } = user;
        return result as Organizacao;
      }
    } 

    return null;
  }
  async login(organizacao: Organizacao): Promise<UserToken> {
    const payload: UserPayload = {
      sub: organizacao.id,
      email: organizacao.email,
      name: organizacao.razaoSocial ,
    };
  
    return {
      access_token: this.jwtService.sign(payload),
      token_type: 'Bearer',
    };
  }
}


