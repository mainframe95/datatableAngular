import { ParticuleJsComponent } from './particule-js/particule-js.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {DataTablesModule} from 'angular-datatables';
import { ParticlesModule } from 'angular-particle';


@NgModule({
  declarations: [
    AppComponent,
    ParticuleJsComponent
  ],
  imports: [
    BrowserModule,
    DataTablesModule,
    ParticlesModule
  ],
  providers: [],
  bootstrap: [AppComponent, ParticuleJsComponent]
})
export class AppModule { }
