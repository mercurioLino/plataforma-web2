import { Controller, HttpCode, HttpStatus, Post, UseGuards } from '@nestjs/common';
import { IsPublic } from 'src/shared/dto/decorator';
import { CurrentUser } from 'src/shared/dto/decorator/current-user.decorator';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { Usuario } from 'src/usuario/entities/usuario.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}
    @IsPublic()
    @Post('login')
    @HttpCode(HttpStatus.OK)
    @UseGuards(LocalAuthGuard)
    login(@CurrentUser() user: Usuario ) {
        return this.authService.login(user);
    }
}
