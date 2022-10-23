import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compareSync } from 'bcrypt';
import { UserPayload } from './models/user-payload.model';
import { UserToken } from './models/user-token.model';
import { JogadorService } from 'src/jogador/jogador.service';
import { Jogador } from 'src/jogador/entities/jogador.entity';
import { OrganizacaoService } from 'src/organizacao/organizacao.service';
import { FuncionarioService } from 'src/funcionario/funcionario.service';
import { Organizacao } from 'src/organizacao/entities/organizacao.entity';
import { Funcionario } from 'src/funcionario/entities/funcionario.entity';

@Injectable()
export class AuthService {  
    
  constructor(private readonly organizacaoService: OrganizacaoService,
    private readonly jogadorService: JogadorService,
    private readonly funcionarioService: FuncionarioService , 
    private readonly jwtService: JwtService) {}
  
    
  async validateUserJogador(email: string, pass: string): Promise<Jogador> {
    
    const user = await this.jogadorService.findByEmail(email, true); 

    if (user) {
      const isPasswordValid = await compareSync(pass, user.password);
      if (isPasswordValid) {
        const { password, ...result } = user;
        return result as Jogador;
      }
    } 
    return null;
  }

  async validateUserOrganizacao(email: string, pass: string): Promise<Organizacao> {
    
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

  async validateUserFuncionario(email: string, pass: string): Promise<Funcionario> {
    
    const user = await this.funcionarioService.findByEmail(email, true); 

    if (user) {
      const isPasswordValid = await compareSync(pass, user.password);
      if (isPasswordValid) {
        const { password, ...result } = user;
        return result as Funcionario;
      }
    } 
    return null;
  }
  
    
  async login(usuario: Organizacao | Jogador | Funcionario): Promise<UserToken> {
    const payload: UserPayload = {
      sub: usuario.id,
      email: usuario.email
    };
  
    return {
      access_token: this.jwtService.sign(payload),
      token_type: 'Bearer',
    };
  }
}


