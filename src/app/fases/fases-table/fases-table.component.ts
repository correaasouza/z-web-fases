import { Component, OnInit } from '@angular/core';
import { Fases } from '../model/Fases';
import { FasesService } from '../fases.service';

@Component({
  selector: 'app-fases-table',
  templateUrl: './fases-table.component.html',
  styleUrls: ['./fases-table.component.css']
})
export class FasesTableComponent implements OnInit {
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
