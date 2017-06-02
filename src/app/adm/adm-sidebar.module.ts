import { NgModule }      from '@angular/core';
import {CommonModule}   from '@angular/common';

// import {MaterialModule} from '../material.module';
import {MdButtonModule, MdIconModule} from '@angular/material';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import {AdmSidebarComponent} 	from './adm-sidebar.component';
import {AdmSidebarService, AdmSidebarList} 		from './adm-sidebar.service';



@NgModule({
	imports:      [CommonModule, MdIconModule, 	MdButtonModule],
	declarations: [AdmSidebarComponent],
	providers: [AdmSidebarService],
	exports: [ AdmSidebarComponent],
})
export class AdmSidebarModule {
}
