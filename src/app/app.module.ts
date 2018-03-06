import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpClientModule } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';  // <-- #1 import module
import {NgSelectModule, NgOption} from '@ng-select/ng-select';


import { AppComponent } from './app.component';
import { GrupoFasesPadraoDetailComponent } from './fases/grupo-fases-padrao-detail/grupo-fases-padrao-detail.component';
import { FasesService } from './fases/fases.service';
import { MessagesService } from './messages.service';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './fases/dashboard/dashboard.component';
import { GrupoFasesPadraoSearchComponent } from './fases/grupo-fases-padrao-search/grupo-fases-padrao-search.component';
import { GrupoFasesPadraoTableComponent } from './fases/grupo-fases-padrao-table/grupo-fases-padrao-table.component';
import { GrupoFasesPadraoEditComponent } from './fases/grupo-fases-padrao-edit/grupo-fases-padrao-edit.component';
import { FasesTableComponent } from './fases/fases-table/fases-table.component';
import { FasesEditComponent } from './fases/fases-edit/fases-edit.component';
import { MainComponent } from './-main/-main.component';
import { FasePadraoTableComponent } from './fases/fase-padrao-table/fase-padrao-table.component';
import { FasePadraoEditComponent } from './fases/fase-padrao-edit/fase-padrao-edit.component';
import { FasePadraoEditDropdownComponent } from './fases/fase-padrao-edit-dropdown/fase-padrao-edit-dropdown.component';


@NgModule({
  declarations: [
    AppComponent,
    GrupoFasesPadraoDetailComponent,
    MessagesComponent,
    DashboardComponent,
    GrupoFasesPadraoSearchComponent,
    GrupoFasesPadraoTableComponent,
    GrupoFasesPadraoEditComponent,
    FasesTableComponent,
    FasesEditComponent,
    MainComponent,
    FasePadraoTableComponent,
    FasePadraoEditComponent,
    FasePadraoEditDropdownComponent,
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule.forRoot(),     
    NgSelectModule
  ],
  providers: [
    FasesService,
    MessagesService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
