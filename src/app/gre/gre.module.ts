import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';

import { Routes, RouterModule }  from '@angular/router';
import { ModuleWithProviders } from '@angular/core';


import {GreComponent} from './gre.component';

import {GreService} from './gre.service';

// import {MaterialModule} from '../material.module';
import {MaterialModule} from '../material.module';
import {Word_5_0Component} from './word/word_5_0.component';
import {Word_5_0Module} from './word/word_5_0.module';
// import {Day1Module} from './word/day1.module';

const routes: Routes = [
	{
		path: '',
		component: GreComponent,
		children: [
			{path: '', redirectTo: 'word_5_0', pathMatch: 'full'},
			{
				path: 'word_5_0',
				component: Word_5_0Component,
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
	imports: [CommonModule, routing, FormsModule, ReactiveFormsModule, MaterialModule, Word_5_0Module],
	// declarations: [MdComponent, MDemoButtonComponent, MDemoInputComponent, MDemoShowComponent, DialogResultExampleDialog],
	declarations: [GreComponent],
	providers: [MaterialModule, GreService],
})

export class GreModule  {
	name = 'ADM';
}
