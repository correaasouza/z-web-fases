import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl , FormGroup ,  FormBuilder, Validators} from '@angular/forms';
import { Location } from '@angular/common';
import { Fases } from '../model/Fases';
import { ActivatedRoute } from '@angular/router';
import { FasesService } from '../fases.service';

@Component({
  selector: 'app-fases-edit',
  templateUrl: './fases-edit.component.html',
  styleUrls: ['./fases-edit.component.css']
})
export class FasesEditComponent implements OnInit {
  
  Fases: Fases;
  id: number;
  originalRequest: string;
  statusCode: number; 
  fasesForm : FormGroup;

  
  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private fasesService: FasesService,
    private location: Location
  ) { 
    this.createForm();
  }
  

  createForm() {
    this.fasesForm = this.fb.group({
      nome:  ['', Validators.required ],
      prioridade: 0,
    });
  }

  ngOnInit() {  
    this.id = +this.route.snapshot.paramMap.get('id');
    if (this.id != 0) {
      this.originalRequest = 'Alteração';
      this.fasesService.getFasesPorId(this.id)
      .subscribe(Fases => { 
        this.fasesForm.patchValue(Fases);            
      },
      errorCode => this.statusCode = errorCode);   
    } else {
      this.originalRequest = 'Inclusão';      
    }    
    
  }
  
  // Revisado
  onSubmit(){
    let fases = this.fasesForm.value;
    console.log('fases: ' + fases)
    if (this.id != 0) {
      fases.id = this.id;
      this.fasesService.updateFases(fases)
      .subscribe((dados) => {
        this.fasesForm.reset;
        this.goBack();  
      },
      (error: any) => alert('erro')); 

    } else {
      this.fasesService.addFases(this.fasesForm.value)
      .subscribe((dados) => {
        this.fasesForm.reset;
        this.goBack();  
      },
      (error: any) => alert('erro'));
    } 
  }

  goBack(): void {
    this.location.back();
  }
}
