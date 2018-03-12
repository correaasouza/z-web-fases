import { Component, OnInit , Input, OnChanges } from '@angular/core';
import { FormArray, FormControl , Validators} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';

import { FasesPadrao } from '../../model/FasesPadrao';
import { FasesService } from '../../fases.service';
import { Fases } from '../../model/Fases';


@Component({
  selector: 'app-config-fases-padroes-edit',
  templateUrl: './config-fases-padroes-edit.component.html',
  styleUrls: ['./config-fases-padroes-edit.component.css']
})
export class ConfigFasesPadroesEditComponent implements OnInit {

  fasePadrao: FasesPadrao;
  id: number;
  statusCode: number;
  fases: Fases[];
  idGrupo: number;

  constructor(
    private route: ActivatedRoute,
    private fasesService: FasesService,
    private location: Location
  ) {}

  ngOnInit() {

    this.getFases()    
    this.id = +this.route.snapshot.paramMap.get('id');
    this.idGrupo = +this.route.snapshot.paramMap.get('idGrupo');
    if (this.id != 0) {
      this.fasesService.getFasesPadraoPorId(this.id)
      .subscribe(dados => { 
        this.fasePadrao = dados;            
      },
      errorCode => this.statusCode = errorCode);    

    } else {
      this.fasePadrao = new FasesPadrao();
      this.fasePadrao.grupofasespadroesId = this.idGrupo;
      
    }
  }


  onSubmit(){
    if (this.id != 0) {
      this.fasesService.updateFasesPadrao(this.fasePadrao)
      .subscribe((dados) => {
        this.goBack();  
      },
      (error: any) => alert('erro')); 

    } else {
      this.fasesService.addFasePadrao(this.fasePadrao)
      .subscribe((dados) => {
        this.goBack();  
      },
      (error: any) => alert('erro'));
    } 
  }

  getFases(): void {
    this.fasesService.getFases()
    .subscribe(fases => this.fases = fases);
    
  } 

  goBack(): void {
    this.location.back();
  }

}
