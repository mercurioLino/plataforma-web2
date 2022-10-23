import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common'
import { Reflector } from '@nestjs/core';
import jwt_decode from 'jwt-decode'
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { UsuarioService } from 'src/usuario/services/usuario.service';


@Injectable()
export class RolesGuard implements CanActivate {
  
  constructor(
    private reflector: Reflector,
    private usuarioService: UsuarioService
    ) {}


  async canActivate(context: ExecutionContext): Promise<boolean> {
    const token = context.getArgs()[0].headers.authorization.split(' ')[1];
    const { username }:any = jwt_decode(context.getArgs()[0].headers.authorization.split(' ')[1]);
    const user  = await this.usuarioService.findOne(username);
    const roles  = this.reflector.get<string[]>('roles', context.getHandler());
    const total_roles = roles.filter(role => role === user.role);
    if(total_roles.length >=1){
      return true;
    }
    else{
      return false;
    }
  }
}

;