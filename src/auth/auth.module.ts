import { Module, forwardRef } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { UsuarioService } from 'src/usuario/usuario.service';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './estrategies/jwt.strategy';
import { LocalStrategy } from './estrategies/local.strategy';
import { UsuarioModule } from 'src/usuario/usuario.module';
import { JogadorModule } from 'src/jogador/jogador.module';
import { JogadorService } from 'src/jogador/jogador.service';
import { Organizacao } from 'src/organizacao/entities/organizacao.entity';
import { OrganizacaoModule } from 'src/organizacao/organizacao.module';
import { FuncionarioModule } from 'src/funcionario/funcionario.module';
import { FuncionarioService } from 'src/funcionario/funcionario.service';
import { OrganizacaoService } from 'src/organizacao/organizacao.service';

@Module({
  imports: [
    forwardRef(()=>JogadorModule),
    forwardRef(()=>OrganizacaoModule),
    forwardRef(()=>FuncionarioModule),
  JwtModule.registerAsync({ useFactory: (configService: ConfigService) => {
    return {
      secret: configService.get<string>('JWT_SECRET'),
      signOptions: { expiresIn: '24h' },
    };
  },
  inject: [ConfigService],
})],
  controllers: [AuthController],
  providers: [AuthService, JogadorService, OrganizacaoService, FuncionarioService, LocalStrategy, JwtStrategy],
})
export class AuthModule {}
