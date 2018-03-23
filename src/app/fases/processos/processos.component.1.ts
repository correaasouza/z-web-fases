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

  public _opened: boolean = false;
  
   public _toggleSidebar() {
     this._opened = !this._opened;
   }
   
   

  
  
  grupoProcesso: GrupoProcesso;
  ordemServicoItem : OrdemServicoItem[];

  public isCollapsed = false;
  public isCollapsed2 = false;
  public isCollapsed3 = false;
  public name = `Angular! v${VERSION.full}`;
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
      }
    ]
  };

  ngOnInit() {

    this.getGrupoItensOrdemServico()
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

  getGrupoItensOrdemServico(): void {
    this.ordemServicoItem = this.ordensServicosService.getGrupoItensOrdemServico() 
    console.log('Itens OS: ' + JSON.stringify(this.ordemServicoItem));
  } 

  public logEvent(e: NodeEvent): void {
    console.log(e);
  }


}