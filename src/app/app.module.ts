import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent }  from './app.component';
import {TestComponent} from './test.component';

import { AppRoutingModule }     from './app-routing.module';

// import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// import {MdButtonModule, MdCheckboxModule} from '@angular/material';

import {MaterialModule} from './material.module';

@NgModule({
  imports:      [ BrowserModule, FormsModule, MaterialModule, AppRoutingModule],
  declarations: [ AppComponent, TestComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
