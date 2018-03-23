import { Component, OnInit } from '@angular/core';
import { FasesService } from '../fases.service';
import { GrupoFasesPadrao } from '../model/GrupoFasesPadrao';

@Component({
  selector: 'app-config-grupos',
  templateUrl: './config-grupos.component.html',
  styleUrls: ['./config-grupos.component.css']
})
export class ConfigGruposComponent implements OnInit {
  gruposFasesPadrao: GrupoFasesPadrao[];

  constructor(private fasesService: FasesService) { }

  ngOnInit() { 
    this.getGrupoFasesPadrao();   

  }

  getGrupoFasesPadrao(): void {
    this.fasesService.getGrupoFasesPadrao()
    .subscribe(gruposFasesPadrao => this.gruposFasesPadrao = gruposFasesPadrao);
    
  } 

  deleteGrupoFasesPadrao(grupoFasePadrao: GrupoFasesPadrao): void {
    this.gruposFasesPadrao = this.gruposFasesPadrao.filter(h => h !== grupoFasePadrao);
    this.fasesService.deleteGrupoFasesPadrao(grupoFasePadrao).subscribe();
  }
}
