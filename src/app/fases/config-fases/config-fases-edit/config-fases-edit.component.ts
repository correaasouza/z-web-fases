import { Component, OnInit } from '@angular/core';
import { Fases } from '../../model/Fases';
import { ActivatedRoute } from '@angular/router';
import { FasesService } from '../../fases.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-config-fases-edit',
  templateUrl: './config-fases-edit.component.html',
  styleUrls: ['./config-fases-edit.component.css']
})
export class ConfigFasesEditComponent implements OnInit {
  
  fases: Fases;
  id: number;
  originalRequest: string;
  statusCode: number; 
   
  constructor(
    private route: ActivatedRoute,
    private fasesService: FasesService,
    private location: Location
  ) {}
  

  ngOnInit() {  
    this.id = +this.route.snapshot.paramMap.get('id');
    if (this.id != 0) {
      this.originalRequest = 'Alteração';
      this.fasesService.getFasesPorId(this.id)
      .subscribe(dados => { 
        this.fases = dados;            
      },
      errorCode => this.statusCode = errorCode);   
    } else {
      this.fases = new Fases();
      this.originalRequest = 'Inclusão';      
    }    
    
  }

  onSubmit(){
    if (this.id != 0) {
      this.fasesService.updateFases(this.fases)
      .subscribe((dados) => {
        this.goBack();  
      },
      (error: any) => alert('erro')); 

    } else {
      this.fasesService.addFases(this.fases)
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
