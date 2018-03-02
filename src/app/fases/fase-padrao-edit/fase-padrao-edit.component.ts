import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl , FormGroup ,  FormBuilder, Validators} from '@angular/forms';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FasesService } from '../fases.service';
import { FasesPadrao } from './../model/FasesPadrao';

@Component({
  selector: 'app-fase-padrao-edit',
  templateUrl: './fase-padrao-edit.component.html',
  styleUrls: ['./fase-padrao-edit.component.css']
})
export class FasePadraoEditComponent implements OnInit {

  fasePadrao: FasesPadrao;
  fasesPadraoForm : FormGroup;
  id: number;
  idGrupo: number;
  statusCode: number;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private fasesService: FasesService,
    private location: Location
  ) { 
    this.createForm();
  }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.idGrupo = +this.route.snapshot.paramMap.get('idGrupo');
    if (this.id != 0) {
      this.fasesService.getFasesPadraoPorId(this.id)
      .subscribe(fasePadrao => { 
        this.fasesPadraoForm.patchValue(fasePadrao);            
      },
      errorCode => this.statusCode = errorCode);     
    } 
  }

  createForm() {
    this.fasesPadraoForm = this.fb.group({
      descricao:  ['', Validators.required ]
    });
  }

  onSubmit(){
    let fasesPadrao = this.fasesPadraoForm.value;
    if (this.id != 0) {
      fasesPadrao.id = this.id;
      this.fasesService.updateFasesPadrao(fasesPadrao)
      .subscribe((dados) => {
        this.fasesPadraoForm.reset;
        this.goBack();  
      },
      (error: any) => alert('erro')); 

    } else {
      this.fasesService.addFasePadrao(this.fasesPadraoForm.value, this.idGrupo, 1)
      .subscribe((dados) => {
        this.fasesPadraoForm.reset;
        this.goBack();  
      },
      (error: any) => alert('erro'));
    } 
  }

  goBack(): void {
    this.location.back();
  }

}
