import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
// import {CommonModule}   from '@angular/common';

import { AppRoutingModule }     from './app-routing.module';


import { AppComponent }  from './app.component';
import {TestComponent} from './test.component';
import {MDemoButtonComponent} from './material-demo/mdemo-button.component';
import {MDemoInputComponent} from './material-demo/mdemo-input.component';

import {GlobalService} from './global.service';

// import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// import {MdButtonModule, MdCheckboxModule} from '@angular/material';

import {MaterialModule} from './material.module';

// adm
import {AdmSidebarModule} from './adm/adm-sidebar.module';

@NgModule({
  imports:      [ BrowserModule, FormsModule, MaterialModule, AppRoutingModule,
                  AdmSidebarModule, ],
  declarations: [ AppComponent, TestComponent, MDemoButtonComponent, MDemoInputComponent ],
  providers: [GlobalService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
