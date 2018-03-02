import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FormArray, FormControl , FormGroup ,  FormBuilder, Validators} from '@angular/forms';
import { GrupoFasesPadrao } from './../model/GrupoFasesPadrao';
import { FasesService } from '../fases.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-grupo-fases-padrao-edit',
  templateUrl: './grupo-fases-padrao-edit.component.html',
  styleUrls: ['./grupo-fases-padrao-edit.component.css']
})
export class GrupoFasesPadraoEditComponent implements OnInit {
  
  // @Input() grupoFasesPadrao: GrupoFasesPadrao;
  grupoFasesPadrao: GrupoFasesPadrao;
  id: number;
  originalRequest: string;
  statusCode: number; 
  grupoFasesPadraoForm : FormGroup;
  
  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private fasesService: FasesService,
    private location: Location
  ) { 
    this.createForm();
  }
  

  createForm() {
    this.grupoFasesPadraoForm = this.fb.group({
      descricao:  ['', Validators.required ],
      sequencia: 0,
      perc_comissao: 0,
      secretLairs: this.fb.array([]),
    });
  }

  ngOnInit() {  
    this.id = +this.route.snapshot.paramMap.get('id');
    if (this.id != 0) {
      this.originalRequest = 'Alteração';
      this.fasesService.getGrupoFasesPadraoPorId(this.id)
      .subscribe(grupoFasesPadrao => { 
        this.grupoFasesPadraoForm.patchValue(grupoFasesPadrao);            
      },
      errorCode => this.statusCode = errorCode);   
    } else {
      this.originalRequest = 'Inclusão';      
    }    
    
  }
  
  onSubmit(){
    let grupoFasesPadrao = this.grupoFasesPadraoForm.value;
    if (this.id != 0) {
      grupoFasesPadrao.id = this.id;
      this.fasesService.updategrupoFasesPadrao(grupoFasesPadrao)
      .subscribe((dados) => {
        this.grupoFasesPadraoForm.reset;
        this.goBack();  
      },
      (error: any) => alert('erro')); 

    } else {
      this.fasesService.addgruposFasesPadrao(this.grupoFasesPadraoForm.value)
      .subscribe((dados) => {
        this.grupoFasesPadraoForm.reset;
        this.goBack();  
      },
      (error: any) => alert('erro'));
    } 
  }


  // setAddresses(addresses: Address[]) {
  //   const addressFGs = addresses.map(address => this.fb.group(address));
  //   const addressFormArray = this.fb.array(addressFGs);
  //   this.grupoFasesPadraoForm.setControl('secretLairs', addressFormArray);
  // }

  // get secretLairs(): FormArray {
  //   return this.grupoFasesPadraoForm.get('secretLairs') as FormArray;
  // };

  // addLair() {
  //   this.secretLairs.push(this.fb.group(new Address()));
  // }

  // ngOnChanges(){
  //   this.grupoFasesPadraoForm.reset({
  //     descricao:  this.grupoFasesPadrao.descricao,
  //     address: this.grupoFasesPadrao.addresses[0] || new Address()
  //   });
  // }


  // revert() { this.ngOnChanges(); }

  // prepareSaveGrupoFasesPadrao(): GrupoFasesPadrao {
  //   const formModel = this.grupoFasesPadraoForm.value;
  
  //   // deep copy of form model lairs
  //   const secretLairsDeepCopy: Address[] = formModel.secretLairs.map(
  //     (address: Address) => Object.assign({}, address)
  //   );
  

  //   const saveGrupoFasesPadrao: GrupoFasesPadrao = {
  //     id: this.grupoFasesPadrao.id,
  //     descricao: formModel.descricao as string,
  //     // addresses: formModel.secretLairs // <-- bad!
  //     sequencia: 0,
  //     perc_comissao: 0,
  //     addresses: secretLairsDeepCopy
  //   };
  //   return saveGrupoFasesPadrao;
  // }



  goBack(): void {
    this.location.back();
  }


}
