import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';

import { Routes, RouterModule }  from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import {MaterialModule} from '../../material.module';

// import {Day1Module} from './day1.module';
import {Word_5_0Component} from './word_5_0.component';
import {Day1Component} from './day1.component';
import {Day1Module} from './day1.module';

import {WordService} from './word.service';

import {GrePipe} from '../gre.pipe';

@NgModule({
	imports: [CommonModule, FormsModule, ReactiveFormsModule, MaterialModule],
	declarations: [ Word_5_0Component, Day1Component, GrePipe],
	providers: [WordService],
	// exports: [ Day1Component],
})

export class Word_5_0Module  {
	name = 'ADM';

	OnInit() {
		console.log("!!!")
	}
}
