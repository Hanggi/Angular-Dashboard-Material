import { NgModule }      from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppComponent }  from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule} from '@angular/material';
import {MdAutocompleteModule, MdRadioModule, MdCheckboxModule, MdInputModule} from '@angular/material';
import {MdCardModule} from '@angular/material';

@NgModule({
  imports:      [ BrowserAnimationsModule, 
                  MdButtonModule, 
                  MdAutocompleteModule, MdCheckboxModule, MdRadioModule, MdInputModule,
                  MdCardModule],
  exports:      [ MdButtonModule, 
                  MdAutocompleteModule, MdCheckboxModule, MdRadioModule, MdInputModule,
                  MdCardModule,],
})
export class MaterialModule { }
