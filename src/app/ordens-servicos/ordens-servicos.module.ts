import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdensServicosRoutingModule } from './ordens-servicos-routing.module';
import { OrdensServicosService } from './ordens-servicos.service';

@NgModule({
  imports: [
    CommonModule,
    OrdensServicosRoutingModule
  ],
  declarations: [],
  providers: [
    OrdensServicosService
  ],
})
export class OrdensServicosModule { }
