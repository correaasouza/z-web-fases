import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';  // <-- #1 import module
import { NgSelectModule, NgOption } from '@ng-select/ng-select';
import { AppRoutingModule } from './/app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import { AppComponent } from './app.component';
import { FasesModule } from './fases/fases.module';
import { MainComponent } from './-main/-main.component';
import { MessagesService } from './messages.service';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent   
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,    
    NgSelectModule,
    FasesModule,
    NgbModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [
    MessagesService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }



