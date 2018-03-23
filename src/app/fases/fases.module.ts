import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FasesRoutingModule } from './fases-routing.module';
import { ConfigGruposComponent } from './config-grupos/config-grupos.component';
import { FasesService } from './fases.service';
import { ConfigGruposEditComponent } from './config-grupos/config-grupos-edit/config-grupos-edit.component';
import { ConfigGruposDetailComponent } from './config-grupos/config-grupos-detail/config-grupos-detail.component';
import { FormsModule } from '@angular/forms';
import { ConfigFasesComponent } from './config-fases/config-fases.component';
import { ConfigFasesEditComponent } from './config-fases/config-fases-edit/config-fases-edit.component';
import { ConfigFasesDetailComponent } from './config-fases/config-fases-detail/config-fases-detail.component';
import { ConfigFasesPadroesComponent } from './config-fases-padroes/config-fases-padroes.component';
import { ConfigFasesPadroesEditComponent } from './config-fases-padroes/config-fases-padroes-edit/config-fases-padroes-edit.component';
import { ConfigFasesPadroesDetailComponent } from './config-fases-padroes/config-fases-padroes-detail/config-fases-padroes-detail.component';
import { FormDebugComponent } from '../form-debug/form-debug.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { ProcessosComponent } from './processos/processos.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TreeTableModule } from "ng-treetable";
import { BrowserModule } from '@angular/platform-browser';
import { TreeModule } from 'ng2-tree';
import { OrdensServicosService } from '../ordens-servicos/ordens-servicos.service';
import { SidebarModule } from 'ng-sidebar';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AgGridModule } from "ag-grid-angular/main";
import { RedComponentComponent } from './red-component/red-component.component';

  
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FasesRoutingModule,
    NgSelectModule,
    NgbModule.forRoot(),
    TreeTableModule,
    TreeModule,
    BrowserModule,
    SidebarModule.forRoot(),
    AgGridModule.withComponents(
        [RedComponentComponent]
    )
  ],  
  declarations: [
    ConfigGruposComponent,
    ConfigGruposEditComponent,
    ConfigGruposDetailComponent,
    ConfigFasesComponent,
    ConfigFasesEditComponent,
    ConfigFasesDetailComponent,
    ConfigFasesPadroesComponent,
    ConfigFasesPadroesEditComponent,
    ConfigFasesPadroesDetailComponent,
    FormDebugComponent,
    DashboardComponent,
    ProcessosComponent,
    RedComponentComponent
  ],
  exports : [
    ConfigGruposComponent
  ],
  providers: [
    FasesService,
    OrdensServicosService
  ],
})
export class FasesModule { }
