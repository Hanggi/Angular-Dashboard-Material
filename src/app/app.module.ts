import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppRoutingModule }     from './app-routing.module';

// Main App component
import { AppComponent }  from './app.component';
import {TestComponent} from './test.component';

// Global Service
import {GlobalService} from './global.service';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
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
