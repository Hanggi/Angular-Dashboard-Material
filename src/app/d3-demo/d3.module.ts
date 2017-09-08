import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';

import { Routes, RouterModule }  from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import {D3ChartsComponent} from './charts/d3-charts.component';
// import {MDemoInputComponent} from './input/mdemo-input.component';
// import {MDemoShowComponent, DialogResultExampleDialog} from './show/mdemo-show.component';
import {D3Component} from './d3.component';

// import {MaterialModule} from '../material.module';
import {MaterialModule} from '@angular/material';

const routes: Routes = [
	{
		path: '',
		component: D3Component,
		children: [
			{path: '', redirectTo: 'button', pathMatch: 'full'},
			{
				path: 'charts',
				component: D3ChartsComponent,
			},
			// {
			// 	path: 'input',
			// 	component: MDemoInputComponent,
			// },
			// {
			// 	path: 'show',
			// 	component: MDemoShowComponent,
			// }
		],
	},

];

const routing: ModuleWithProviders = RouterModule.forChild(routes);

@NgModule({
	imports: [CommonModule, routing, FormsModule, ReactiveFormsModule, MaterialModule],
	// declarations: [MdComponent, MDemoButtonComponent, MDemoInputComponent, MDemoShowComponent, DialogResultExampleDialog],
	declarations: [D3Component, D3ChartsComponent],
	providers: [MaterialModule],
	entryComponents: [
        // DialogResultExampleDialog
    ]
})

export class D3Module  {
	name = 'ADM';
}
