import { Component, OnInit , Input, OnChanges } from '@angular/core';
import { FormArray, FormControl , Validators} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { FasesService } from '../../fases.service';
import { GrupoFasesPadrao } from '../../model/GrupoFasesPadrao';

@Component({
  selector: 'app-config-grupos-edit',
  templateUrl: './config-grupos-edit.component.html',
  styleUrls: ['./config-grupos-edit.component.css']
})
export class ConfigGruposEditComponent implements OnInit  {
  
  grupoFasesPadrao: GrupoFasesPadrao;
  id: number;
  originalRequest: string;
  statusCode: number; 
  
  
  constructor(
    private route: ActivatedRoute,
    private fasesService: FasesService,
    private location: Location,
  ) {
  }
  
  ngOnInit() {  
    this.id = +this.route.snapshot.paramMap.get('id');
    if (this.id != 0) {
      this.originalRequest = 'Alteração';
      this.fasesService.getGrupoFasesPadraoPorId(this.id)
      .subscribe(dados => { 
        this.grupoFasesPadrao = dados;            
      },
      errorCode => this.statusCode = errorCode);   
    } else { 
      this.grupoFasesPadrao = new GrupoFasesPadrao();
      this.originalRequest = 'Inclusão';      
    }    
    
  }
  
  onSubmit(){
    if (this.id != 0) {
      this.fasesService.updategrupoFasesPadrao(this.grupoFasesPadrao)
      .subscribe((dados) => {
        this.goBack();  
      },
      (error: any) => alert('erro')); 

    } else {
      this.fasesService.addgruposFasesPadrao(this.grupoFasesPadrao)
      .subscribe((dados) => {
        this.goBack();  
      },
      (error: any) => alert('erro'));
    } 
  }


  goBack(): void {
    this.location.back();
  }


}
