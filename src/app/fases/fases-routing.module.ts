import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfigGruposComponent } from './config-grupos/config-grupos.component';
import { ConfigGruposEditComponent } from './config-grupos/config-grupos-edit/config-grupos-edit.component';
import { ConfigFasesComponent } from './config-fases/config-fases.component';
import { ConfigFasesEditComponent } from './config-fases/config-fases-edit/config-fases-edit.component';
import { ConfigFasesPadroesEditComponent } from './config-fases-padroes/config-fases-padroes-edit/config-fases-padroes-edit.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: 'fases/config-grupos/dashboard', component: DashboardComponent },
  { path: 'fases/config-grupos', component: ConfigGruposComponent },
  { path: 'fases/config-grupos/edit/:id', component: ConfigGruposEditComponent },

  { path: 'fases/config-fases', component: ConfigFasesComponent },
  { path: 'fases/config-fases/edit/:id', component: ConfigFasesEditComponent },
  { path: 'fases/config-fases-padroes/edit/:id/:idGrupo', component: ConfigFasesPadroesEditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FasesRoutingModule { }
