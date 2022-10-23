import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Usuario } from 'src/usuario/entities/usuario.entity';

export const CurrentUser = createParamDecorator((data: never, ctx: ExecutionContext): Usuario => {
  const request = ctx.switchToHttp().getRequest();
  return request.user;
});