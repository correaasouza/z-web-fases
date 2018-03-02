import { Component, OnInit } from '@angular/core';

import { GrupoFasesPadrao } from '../model/GrupoFasesPadrao';
import { FasesService } from '../fases.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  gruposFasesPadrao: GrupoFasesPadrao[];

  constructor(private fasesService: FasesService) { }

  ngOnInit() { 
    this.getGrupoFasesPadrao();   

  }

  getGrupoFasesPadrao(): void {
    this.fasesService.getGrupoFasesPadrao()
    .subscribe(gruposFasesPadrao => this.gruposFasesPadrao = gruposFasesPadrao.slice(1,20));
    
  } 
}
