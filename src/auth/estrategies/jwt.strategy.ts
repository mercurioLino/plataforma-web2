import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { FuncionarioService } from 'src/funcionario/funcionario.service';
import { JogadorService } from 'src/jogador/jogador.service';
import { OrganizacaoService } from 'src/organizacao/organizacao.service';
import { UsuarioService } from 'src/usuario/usuario.service';

import { UserPayload } from '../models/user-payload.model';


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly organizacaoService:OrganizacaoService,
    private readonly jogadorService: JogadorService,
    private readonly funcionarioService:FuncionarioService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: `${process.env.JWT_SECRET}`,
    });
  }

  async validate(payload: UserPayload): Promise<any> {
    try {
      if(this.jogadorService){
        console.log('entrou no user Service');
        return await this.jogadorService.findOne(payload.sub);
      } else if(this.organizacaoService){
        console.log('funciona mano entrou no organizacao service')
        return await this.organizacaoService.findOne(payload.sub);
      } else{
        return await this.funcionarioService.findOne(payload.sub);
      }
    } catch (e) {
      throw new UnauthorizedException('User not found');
    }
  }
}