import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { OrganizacaoModule } from 'src/organizacao/organizacao.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './estrategies/jwt.strategy';
import { LocalStrategy } from './estrategies/local.strategy';

@Module({
  imports: [OrganizacaoModule,
  JwtModule.registerAsync({ useFactory: (configService: ConfigService) => {
    return {
      secret: configService.get<string>('JWT_SECRET'),
      signOptions: { expiresIn: '24h' },
    };
  },
  inject: [ConfigService],
})],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy],
})
export class AuthModule {}
