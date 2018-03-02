import { Component, OnInit , Input} from '@angular/core';
import { FasesService } from './../fases.service';
import { FasesPadrao } from '../model/FasesPadrao';

@Component({
  selector: 'app-fase-padrao-table',
  templateUrl: './fase-padrao-table.component.html',
  styleUrls: ['./fase-padrao-table.component.css']
})
export class FasePadraoTableComponent implements OnInit {

  @Input() idGrupoFases: number;

  fasesPadrao: FasesPadrao[];

  constructor(private fasesService : FasesService) { }

  ngOnInit() {

    this.getFasesPadrao(); 
  }

  getFasesPadrao(): void {
    this.fasesService.getFasesPadrao(this.idGrupoFases)
    .subscribe(fasesPadrao => this.fasesPadrao = fasesPadrao);    
  } 

  deleteFasesPadrao(fasePadrao: FasesPadrao): void {
    this.fasesPadrao = this.fasesPadrao.filter(h => h !== fasePadrao);
    this.fasesService.deleteFasesPadrao(fasePadrao).subscribe();
  }  
}
