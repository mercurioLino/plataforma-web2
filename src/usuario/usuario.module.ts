import { Module, forwardRef } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AtendimentoModule } from "src/atendimento/atendimento.module";
import { EquipeModule } from "src/equipe/equipe.module";
import { JogadorPerfilJogoModule } from "src/jogador-perfil-jogo/jogador-perfil-jogo.module";
import { PartidaModule } from "src/partida/partida.module";
import { TorneioModule } from "src/torneio/torneio.module";
import { FuncionarioController } from "./controllers/funcionario.controller";
import { JogadorController } from "./controllers/jogador.controller";
import { OrganizacaoController } from "./controllers/organizacao.controller";
import { Funcionario } from "./entities/funcionario.entity";
import { Jogador } from "./entities/jogador.entity";
import { Organizacao } from "./entities/organizacao.entity";
import { Usuario } from "./entities/usuario.entity";
import { FuncionarioService } from "./services/funcionario.service";
import { JogadorService } from "./services/jogador.service";
import { OrganizacaoService } from "./services/organizacao.service";
import { UsuarioService } from "./services/usuario.service";

@Module({

  imports: [TypeOrmModule.forFeature([Usuario, Organizacao, Jogador, Funcionario]), 
  forwardRef(() => TorneioModule), 
  forwardRef(() => EquipeModule), 
  forwardRef(() => JogadorPerfilJogoModule), 
  forwardRef(() => PartidaModule), 
  forwardRef(() => AtendimentoModule)],
  controllers: [OrganizacaoController, JogadorController, FuncionarioController],
  providers: [UsuarioService, OrganizacaoService, JogadorService, FuncionarioService],
  exports: [TypeOrmModule]
})
export class UsuarioModule {}
