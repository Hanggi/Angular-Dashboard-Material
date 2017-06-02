import { NgModule }      from '@angular/core';

// import { AppComponent }  from './app.component';

// import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdIconModule, MdButtonToggleModule, MdChipsModule} from '@angular/material';
import {MdAutocompleteModule, MdRadioModule, MdCheckboxModule, MdInputModule, MdSelectModule} from '@angular/material';
import {MdCardModule} from '@angular/material';

@NgModule({
  imports:      [ MdButtonModule, MdIconModule, MdButtonToggleModule, MdChipsModule,
                  MdAutocompleteModule, MdCheckboxModule, MdRadioModule, MdInputModule, MdSelectModule,
                  MdCardModule],
  exports:      [ MdButtonModule, MdIconModule, MdButtonToggleModule, MdChipsModule,
                  MdAutocompleteModule, MdCheckboxModule, MdRadioModule, MdInputModule, MdSelectModule,
                  MdCardModule,],
})
export class MaterialModule { }
