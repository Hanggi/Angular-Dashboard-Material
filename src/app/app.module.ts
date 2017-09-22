import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { RouterModule } from '@angular/router';

import {APP_BASE_HREF} from '@angular/common';

import { AppRoutingModule }     from './app-routing.module';

// Main App component
import { AppComponent }  from './app.component';
import {TestComponent} from './test.component';

// Global Service
import {GlobalService} from './global.service';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// import {MaterialModule} from './material.module';
import 'hammerjs';
import {MdNativeDateModule} from '@angular/material';
import {MaterialModule} from './material.module';

// adm
import {AdmSidebarModule} from './adm/adm-sidebar.module';

@NgModule({
  imports:      [ BrowserModule, BrowserAnimationsModule, HttpModule, RouterModule, FormsModule, AppRoutingModule, MaterialModule, MdNativeDateModule,
                  AdmSidebarModule, ],
  declarations: [ AppComponent, TestComponent ],
  providers:    [ GlobalService, {provide: APP_BASE_HREF, useValue: '/adm'}],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
