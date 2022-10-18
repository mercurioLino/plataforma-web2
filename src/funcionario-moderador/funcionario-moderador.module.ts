import { Module } from '@nestjs/common';
import { FuncionarioModeradorService } from './funcionario-moderador.service';
import { FuncionarioModeradorController } from './funcionario-moderador.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FuncionarioModerador } from './entities/funcionario-moderador.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FuncionarioModerador])],
  controllers: [FuncionarioModeradorController],
  providers: [FuncionarioModeradorService]
})
export class FuncionarioModeradorModule {}
