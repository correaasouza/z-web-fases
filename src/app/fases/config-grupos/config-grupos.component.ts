import { Component, OnInit, ViewChild } from '@angular/core';
import { GridOptions } from "ag-grid";
import { RedComponentComponent } from "../red-component/red-component.component";

import { FasesService } from '../fases.service';
import { GrupoFasesPadrao } from '../model/GrupoFasesPadrao';
import { AgGridModule } from 'ag-grid-angular';
import "ag-grid-enterprise";


@Component({
  selector: 'app-config-grupos',
  templateUrl: './config-grupos.component.html',
  styleUrls: ['./config-grupos.component.scss']
})
export class ConfigGruposComponent implements OnInit {
  gruposFasesPadrao: GrupoFasesPadrao[];
  private columnDefs;
  private autoGroupColumnDef;
  private defaultColDef;
  private rowSelection;

  constructor(private fasesService: FasesService) { 

    this.columnDefs = [
        {
            headerName: "ID",
            field: "id",
            width: 50,
            filter: "agNumberColumnFilter"
        },
        {
            headerName: "Descricao",
            field: "descricao",
            width: 300,
            editable: true,
            tooltipField: "Descricao",
            cellClass: function() {
              return "alphabet";
            },
            filter: "agTextColumnFilter",
            // rowGroup: true,
            // pivot: true
        },
        {
            headerName: "Sequencia",
            field: "sequencia",
            width: 200,
            filter: "agNumberColumnFilter",
        },
        {
            headerName: "% Comissão",
            field: "perc_comissao",
            width: 200,
            filter: "agTextColumnFilter",
            aggFunc: 'sum'
        },
    ];
  }

  ngOnInit() { 
    this.getGrupoFasesPadrao();   

  }

  getGrupoFasesPadrao(): void {
    this.fasesService.getGrupoFasesPadrao()
    .subscribe(gruposFasesPadrao => {
      this.gruposFasesPadrao = gruposFasesPadrao;
    });
    
  } 

  deleteGrupoFasesPadrao(grupoFasePadrao: GrupoFasesPadrao): void {
    this.gruposFasesPadrao = this.gruposFasesPadrao.filter(h => h !== grupoFasePadrao);
    this.fasesService.deleteGrupoFasesPadrao(grupoFasePadrao).subscribe();
  }
}
