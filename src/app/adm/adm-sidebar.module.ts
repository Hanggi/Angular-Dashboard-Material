import { NgModule }      from '@angular/core';
import {CommonModule}   from '@angular/common';

import {MdButtonModule, MdIconModule} from '@angular/material';

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
