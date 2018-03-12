import { Component, OnInit } from '@angular/core';
import { FasesService } from '../fases.service';
import { Fases } from '../model/Fases';

@Component({
  selector: 'app-config-fases',
  templateUrl: './config-fases.component.html',
  styleUrls: ['./config-fases.component.css']
})
export class ConfigFasesComponent implements OnInit {
  fases: Fases[];

  constructor(private fasesService: FasesService) { }

  ngOnInit() { 
    this.getFases();  
  }

  getFases(): void {
    this.fasesService.getFases()
    .subscribe(fases => this.fases = fases);
    
  } 

  deleteFases(fase: Fases): void {
    this.fases = this.fases.filter(h => h !== fase);
    this.fasesService.deleteFases(fase).subscribe();
  }

}
