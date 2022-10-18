import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Organizacao } from './organizacao/entities/organizacao.entity';
import { OrganizacaoModule } from './organizacao/organizacao.module';
import { JogadorModule } from './jogador/jogador.module';
import { Jogador } from './jogador/entities/jogador.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database/plataforma.db',
      entities: [Organizacao, Jogador],
      synchronize: true,
    }),
    OrganizacaoModule,
    JogadorModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
