import { FasesService } from './../fases.service';
import { OnInit, Component , VERSION} from "@angular/core";
import { TreeModel, NodeEvent } from 'ng2-tree';
import { GrupoProcesso } from "../model/GrupoProcesso";
import { OrdemServicoItem } from '../../ordens-servicos/model/OrdemServicoItem';
import { OrdensServicosService } from '../../ordens-servicos/ordens-servicos.service';
import { SidebarModule } from 'ng-sidebar';



@Component({
  selector: 'app-processos',
  templateUrl: './processos.component.html',
  styleUrls: ['./processos.component.css']
})
export class ProcessosComponent implements OnInit {

  grupoProcesso: GrupoProcesso;
  ordemServicoItem : OrdemServicoItem[];
  gruposProcesso: GrupoProcesso[];

  public isCollapsed = false;
  public isCollapsed2 = false;
  public isCollapsed3 = false;

  constructor(
    private fasesService: FasesService,
    private ordensServicosService : OrdensServicosService,   
  ) { 
    
  }
  
  public tree: TreeModel = {
    value: 'GRUPO 1',
    children: [
      {
        value: 'FUNILARIA',
      },
      {
        value: 'PINTURA',
      },
      {
        value: 'POLIMENTO',
      }
    ]
  };

  ngOnInit() {

    this.getGrupoItensOrdemServico()
    this.getGruposProcesso()
    // this.ordensServicosService.getGrupoItensOrdemServico

    // this.grupoProcesso = new GrupoProcesso();
    // this.grupoProcesso.grupofasespadroesId = 1;
    // this.grupoProcesso.descricao = 'TESTE';
    // this.grupoProcesso.origemTipo = 1;
    // this.grupoProcesso.origemId = 1;

    // this.fasesService.addgruposProcessos(this.grupoProcesso)
    // .subscribe((dados) => {
    //   this.grupoProcesso = dados;
    // },
    // (error: any) => alert('erro'));

  }

  getGruposProcesso(): void {
    this.gruposProcesso = [
      {
        id: 1,
        grupofasespadroesId: 1,
        origemTipo: 1,
        origemId: 1,
        descricao: 'PINTURA',
        processos: [
          {
            id: 1,
            fasesId: 1,
            grupoProcessoId: 1,
            grupofasespadroesId: 1,
            descricao: 'DESMONTAGEM'
          },
          {
            id: 1,
            fasesId: 1,
            grupoProcessoId: 1,
            grupofasespadroesId: 1,
            descricao: 'PREPARAÇÃO'
          },
          {
            id: 1,
            fasesId: 1,
            grupoProcessoId: 1,
            grupofasespadroesId: 1,
            descricao: 'POLIMENTO'
          }          
        ]
      },
      {
        id: 1,
        grupofasespadroesId: 1,
        origemTipo: 1,
        origemId: 1,
        descricao: 'GRUPO 2',
        processos: [
          {
            id: 1,
            fasesId: 1,
            grupoProcessoId: 1,
            grupofasespadroesId: 1,
            descricao: 'PRC 2.1'
          },
          {
            id: 1,
            fasesId: 1,
            grupoProcessoId: 1,
            grupofasespadroesId: 1,
            descricao: 'PRC 2.2'
          },          
        ]
      },
      {
        id: 1,
        grupofasespadroesId: 1,
        origemTipo: 1,
        origemId: 1,
        descricao: 'GRUPO 3',
        processos: [
          {
            id: 1,
            fasesId: 1,
            grupoProcessoId: 1,
            grupofasespadroesId: 1,
            descricao: 'PRC 3.1'
          },
          {
            id: 1,
            fasesId: 1,
            grupoProcessoId: 1,
            grupofasespadroesId: 1,
            descricao: 'PRC 3.2'
          },          
        ]
      },           
    ]
  } 

  getGrupoItensOrdemServico(): void {
    this.ordemServicoItem = this.ordensServicosService.getGrupoItensOrdemServico() 
    console.log('Itens OS: ' + JSON.stringify(this.ordemServicoItem));
  } 

  public logEvent(e: NodeEvent): void {
    console.log(e);
  }


}