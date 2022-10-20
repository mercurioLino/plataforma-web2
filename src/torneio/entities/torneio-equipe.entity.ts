import { ChildEntity } from "typeorm";
import { Torneio } from "./torneio.entity";

@ChildEntity()
export class TorneioEquipe extends Torneio{    
    
}
