import { Component, OnInit } from '@angular/core';


import { GrupoFasesPadrao } from '../model/GrupoFasesPadrao';
import { FasesService } from '../fases.service';

@Component({
  selector: 'app-grupo-fases-padrao-table',
  templateUrl: './grupo-fases-padrao-table.component.html',
  styleUrls: ['./grupo-fases-padrao-table.component.css']
})
export class GrupoFasesPadraoTableComponent implements OnInit {
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
