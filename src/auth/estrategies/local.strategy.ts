import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from '../auth.service';
import { Jogador } from 'src/jogador/entities/jogador.entity';
import { Organizacao } from 'src/organizacao/entities/organizacao.entity';
import { Funcionario } from 'src/funcionario/entities/funcionario.entity';
import { Usuario } from 'src/usuario/entities/usuario.entity';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({ usernameField: 'email', passwordField:'password' });
  }

  

  async validate(email: string, password: string): Promise<any> {

    const userFuncionario = await this.authService.validateUserFuncionario(email, password);
    const userJogador = await this.authService.validateUserJogador(email,password);
    const userOrganizacao = await this.authService.validateUserOrganizacao(email, password);

    
    if(userJogador != null){
      const user = await this.authService.validateUserJogador(email, password);
      if (!user) {
        throw new UnauthorizedException('Jogador: Email ou senha incorretos.');
      }
      return user;
    }else if(userOrganizacao != null){
      const user = await this.authService.validateUserOrganizacao(email, password);
      if (!user) {
        throw new UnauthorizedException('Organizacao: Email ou senha incorretos.');
      }
      return user;
    }if(userFuncionario != null){
      const user = await this.authService.validateUserFuncionario(email, password);
      if (!user) {
        throw new UnauthorizedException('Funcionario: Email ou senha incorretos.');
      }
      return user;
    }if(userFuncionario == null && userOrganizacao == null && userJogador==null){
      throw new UnauthorizedException('Funcionario ' +userFuncionario +'~~ Organizacao '+userOrganizacao+'~~ Jogador '+userJogador);
    }
      
    }

  

}