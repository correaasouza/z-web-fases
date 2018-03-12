import { Component, OnInit , Input} from '@angular/core';
import { FasesPadrao } from '../model/FasesPadrao';
import { FasesService } from '../fases.service';

@Component({
  selector: 'app-config-fases-padroes',
  templateUrl: './config-fases-padroes.component.html',
  styleUrls: ['./config-fases-padroes.component.css']
})
export class ConfigFasesPadroesComponent implements OnInit {

  @Input() idGrupoFases: number;

  fasesPadrao: FasesPadrao[];
  closeResult: string;  
  constructor(
    private fasesService : FasesService
  ) { }

  ngOnInit() {
    this.getFasesPadrao(); 
  }

  getFasesPadrao(): void {
    this.fasesService.getFasesPadrao(this.idGrupoFases)
    .subscribe(dados => this.fasesPadrao = dados);    
  } 

  deleteFasesPadrao(fasePadrao: FasesPadrao): void {
    this.fasesPadrao = this.fasesPadrao.filter(h => h !== fasePadrao);
    this.fasesService.deleteFasesPadrao(fasePadrao).subscribe();
  }  

}

