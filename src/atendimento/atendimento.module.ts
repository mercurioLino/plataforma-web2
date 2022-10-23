import { forwardRef, Module } from '@nestjs/common';
import { AtendimentoService } from './atendimento.service';
import { AtendimentoController } from './atendimento.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Atendimento } from './entities/atendimento.entity';
import { UsuarioModule } from 'src/usuario/usuario.module';

@Module({
  imports: [TypeOrmModule.forFeature([Atendimento]),  
  forwardRef(() => UsuarioModule)],
  controllers: [AtendimentoController],
  providers: [AtendimentoService],
  exports: [TypeOrmModule]
})
export class AtendimentoModule {}
