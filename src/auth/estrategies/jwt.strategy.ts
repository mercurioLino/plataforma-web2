import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { OrganizacaoService } from 'src/organizacao/organizacao.service';

import { UserPayload } from '../models/user-payload.model';


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly usersService: OrganizacaoService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: `${process.env.JWT_SECRET}`,
    });
  }

  async validate(payload: UserPayload): Promise<any> {
    try {
      return await this.usersService.findOne(payload.sub);
    } catch (e) {
      throw new UnauthorizedException('User not found');
    }
  }
}