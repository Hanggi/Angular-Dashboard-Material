import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { RouterModule } from '@angular/router';
// import {CommonModule}   from '@angular/common';

import { AppRoutingModule }     from './app-routing.module';


import { AppComponent }  from './app.component';
import {TestComponent} from './test.component';
// import {MDemoButtonComponent} from './material-demo/button/mdemo-button.component';
// import {MDemoInputComponent} from './material-demo/input/mdemo-input.component';

import {GlobalService} from './global.service';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// import {MdButtonModule, MdCheckboxModule} from '@angular/material';

import {MaterialModule} from './material.module';
// import {MaterialModule} from '@angular/material';

// adm
import {AdmSidebarModule} from './adm/adm-sidebar.module';

@NgModule({
  imports:      [ BrowserModule, BrowserAnimationsModule, RouterModule, FormsModule, AppRoutingModule, MaterialModule,
                  AdmSidebarModule, ],
  declarations: [ AppComponent, TestComponent ],
  providers:    [GlobalService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
