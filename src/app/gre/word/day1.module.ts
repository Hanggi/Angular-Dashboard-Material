import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';

import { Routes, RouterModule }  from '@angular/router';
import { ModuleWithProviders } from '@angular/core';


import {Day1Component} from './day1.component';


@NgModule({
	imports: [CommonModule, FormsModule, ReactiveFormsModule],
	// declarations: [MdComponent, MDemoButtonComponent, MDemoInputComponent, MDemoShowComponent, DialogResultExampleDialog],
	declarations: [Day1Component],
	providers: [],
	exports: [ Day1Component],
})

export class Day1Module  {
	name = 'ADM';
}
