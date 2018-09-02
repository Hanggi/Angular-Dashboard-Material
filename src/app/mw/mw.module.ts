import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MwComponent } from './mw/mw.component';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '../material.module';


const routes: Routes = [
	{
		path: '',
		component: MwComponent,
	},

];

const routing: ModuleWithProviders = RouterModule.forChild(routes);

@NgModule({
	imports: [
		CommonModule, routing, MaterialModule
	],
	declarations: [MwComponent]
})
export class MwModule { }
