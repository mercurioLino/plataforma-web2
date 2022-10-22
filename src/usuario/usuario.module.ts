import { Module } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioController } from './usuario.controller';
import { Usuario } from 'src/usuario/entities/usuario.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [TypeOrmModule.forFeature([Usuario])],
  controllers: [UsuarioController],

  providers: [TypeOrmModule, UsuarioService],
  exports: [TypeOrmModule, UsuarioService]
})
export class UsuarioModule {}
