import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Organizacao } from 'src/organizacao/entities/organizacao.entity';

export const CurrentUser = createParamDecorator((data: never, ctx: ExecutionContext): Organizacao => {
  const request = ctx.switchToHttp().getRequest();
  return request.user;
});