import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { Routes, RouterModule }  from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import {MDemoButtonComponent} from './button/mdemo-button.component';
import {MDemoInputComponent} from './input/mdemo-input.component';
import {MdComponent} from './md.component';

// import {MaterialModule} from '../material.module';
import {MaterialModule} from '@angular/material';

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
	imports: [CommonModule, routing, FormsModule, MaterialModule],
	declarations: [MdComponent, MDemoButtonComponent, MDemoInputComponent]
})

export class MdModule  {
	name = 'ADM';
}
