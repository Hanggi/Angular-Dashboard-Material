import { NgModule }      from '@angular/core';
import {CommonModule}   from '@angular/common';

// import {MaterialModule} from '../material.module';
import {MdIconModule} from '@angular/material';

import {AdmSidebarComponent} 	from './adm-sidebar.component';
import {AdmSidebarService} 		from './adm-sidebar.service';



@NgModule({
	imports:      [CommonModule, MdIconModule],
	declarations: [AdmSidebarComponent],
	providers: [AdmSidebarService],
	exports: [ AdmSidebarComponent],
})
export class AdmSidebarModule {
}
