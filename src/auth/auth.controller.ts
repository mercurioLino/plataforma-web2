import { Controller, HttpCode, HttpStatus, Post, UseGuards } from '@nestjs/common';
import { IsPublic } from 'src/shared/dto/decorator';
import { CurrentUser } from 'src/shared/dto/decorator/current-user.decorator';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { Jogador } from 'src/jogador/entities/jogador.entity';
import { Organizacao } from 'src/organizacao/entities/organizacao.entity';
import { Funcionario } from 'src/funcionario/entities/funcionario.entity';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}
    @IsPublic()
    @Post('login')
    @HttpCode(HttpStatus.OK)
    @UseGuards(LocalAuthGuard)
    login(@CurrentUser() user: Organizacao ) {
        return this.authService.login(user);
    }
}
