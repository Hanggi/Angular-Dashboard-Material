import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';

import { Routes, RouterModule }  from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import {MDemoButtonComponent} from './button/mdemo-button.component';
import {MDemoInputComponent} from './input/mdemo-input.component';
import {MDemoShowComponent, DialogResultExampleDialog} from './show/mdemo-show.component';
import {MdComponent} from './md.component';

// import {MaterialModule} from '../material.module';
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
			{
				path: 'show',
				component: MDemoShowComponent,
			}
		],
	},

];

const routing: ModuleWithProviders = RouterModule.forChild(routes);

@NgModule({
	imports: [CommonModule, routing, FormsModule, ReactiveFormsModule, MaterialModule],
	declarations: [MdComponent, MDemoButtonComponent, MDemoInputComponent, MDemoShowComponent, DialogResultExampleDialog],
	providers: [MaterialModule],
	entryComponents: [
        DialogResultExampleDialog
    ]
})

export class MdModule  {
	name = 'ADM';
}
