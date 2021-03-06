import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// add module
import { FormsModule }    from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TestComponent } from './test.component';

// import {APP_BASE_HREF} from '@angular/common';
import { AppRoutingModule }     from './app-routing.module';

// Global Service
import {GlobalService} from './global.service';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';
import {MatNativeDateModule} from '@angular/material';
import {MaterialModule} from './material.module';

// adm
import {AdmSidebarModule} from './adm/adm-sidebar.module';
import { APP_BASE_HREF } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent, TestComponent
  ],
  imports: [
	BrowserModule, BrowserAnimationsModule, HttpModule, RouterModule, FormsModule, AppRoutingModule, MaterialModule, MatNativeDateModule,
	AdmSidebarModule,
  ],
  providers: [GlobalService, {provide: APP_BASE_HREF, useValue: '/ng-admin'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
