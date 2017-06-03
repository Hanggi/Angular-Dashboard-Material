import { NgModule }      from '@angular/core';
import 'hammerjs/hammer';

// import { AppComponent }  from './app.component';

// import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdIconModule, MdButtonToggleModule, MdChipsModule} from '@angular/material';
import {MdAutocompleteModule, MdRadioModule, MdCheckboxModule, MdInputModule, MdSelectModule, MdSlideToggleModule} from '@angular/material';
import {MdCardModule} from '@angular/material';

@NgModule({
  imports:      [ MdButtonModule, MdIconModule, MdButtonToggleModule, MdChipsModule,
                  MdAutocompleteModule, MdCheckboxModule, MdRadioModule, MdInputModule, MdSelectModule, MdSlideToggleModule,
                  MdCardModule],
  exports:      [ MdButtonModule, MdIconModule, MdButtonToggleModule, MdChipsModule,
                  MdAutocompleteModule, MdCheckboxModule, MdRadioModule, MdInputModule, MdSelectModule, MdSlideToggleModule,
                  MdCardModule,],
})
export class MaterialModule { }
