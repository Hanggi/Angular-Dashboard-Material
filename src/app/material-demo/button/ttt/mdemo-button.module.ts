import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';

import { Routes, RouterModule }  from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import {MDemoButtonComponent} from './mdemo-button.component';

const routes: Routes = [
	{
		path: '',
		component: MDemoButtonComponent,
	},

];

const routing: ModuleWithProviders = RouterModule.forChild(routes);

@NgModule({
	imports: [CommonModule, routing],
	declarations: [MDemoButtonComponent]
})



export class MDemoButtonModule  {
	name = 'ADM';
}
