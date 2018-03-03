import { Component, OnInit , Input} from '@angular/core';
import { FasesService } from './../fases.service';
import { FasesPadrao } from '../model/FasesPadrao';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-fase-padrao-table',
  templateUrl: './fase-padrao-table.component.html',
  styleUrls: ['./fase-padrao-table.component.css']
})
export class FasePadraoTableComponent implements OnInit {

  @Input() idGrupoFases: number;

  fasesPadrao: FasesPadrao[];
  closeResult: string;  
  constructor(
    private fasesService : FasesService,
    private modalService: NgbModal
  ) { }

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

  open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }  


}
