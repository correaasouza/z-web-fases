import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './fases/dashboard/dashboard.component';
import { GrupoFasesPadraoDetailComponent } from './fases/grupo-fases-padrao-detail/grupo-fases-padrao-detail.component';
import { GrupoFasesPadraoTableComponent } from './fases/grupo-fases-padrao-table/grupo-fases-padrao-table.component';
import { GrupoFasesPadraoEditComponent } from './fases/grupo-fases-padrao-edit/grupo-fases-padrao-edit.component';
import { FasesTableComponent } from './fases/fases-table/fases-table.component';
import { FasesEditComponent } from './fases/fases-edit/fases-edit.component';
import { MainComponent } from './-main/-main.component';
import { FasePadraoEditComponent } from './fases/fase-padrao-edit/fase-padrao-edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'fases/dashboard', component: DashboardComponent },
  { path: 'fases/grupopadrao', component: GrupoFasesPadraoTableComponent },
  { path: 'fases/grupopadrao/edit/:id', component: GrupoFasesPadraoEditComponent },
  { path: 'fases/grupopadrao/detail/:id', component: GrupoFasesPadraoDetailComponent },

  { path: 'fases/fases', component: FasesTableComponent },
  { path: 'fases/fases/edit/:id', component: FasesEditComponent },

  { path: 'fases/fasepadrao/edit/:id/:idGrupo', component: FasePadraoEditComponent },

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})


export class AppRoutingModule { }
