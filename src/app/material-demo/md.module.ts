import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';

import { Routes, RouterModule }  from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import {MDemoButtonComponent} from './button/mdemo-button.component';
import {MDemoInputComponent} from './input/mdemo-input.component';
import {MdComponent} from './md.component';


import {MaterialModule} from '../material.module';

const routes: Routes = [
	{
		path: '',
		component: MdComponent,
		children: [
			{path: '', redirectTo: 'button', pathMatch: 'full'},
			{
				path: 'button',
				component: MDemoButtonComponent,
			},
			{
				path: 'input',
				component: MDemoInputComponent,
			},
		],
	},

];

const routing: ModuleWithProviders = RouterModule.forChild(routes);

@NgModule({
	imports: [CommonModule, routing, MaterialModule],
	declarations: [MdComponent, MDemoButtonComponent, MDemoInputComponent]
})



export class MdModule  {
	name = 'ADM';
}
