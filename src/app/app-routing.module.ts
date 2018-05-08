import { NgModule } 			from '@angular/core';
import { RouterModule, Routes} 	from '@angular/router';

import {AppComponent} 		from './app.component';
import {TestComponent} 		from './test.component';


const routes: Routes = [
	{path: '', redirectTo: 'test', pathMatch: 'full'},
	{path: 'test', component: TestComponent},
	{path: 'mdemo', loadChildren: './material-demo/md.module#MdModule'},
	{path: 'vis', loadChildren: './d3-demo/d3.module#D3Module'},
	// {path: 'gre', loadChildren: './gre/gre.module#GreModule'},
]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [ RouterModule ]
})
export class AppRoutingModule  { name = 'ng-admin'; }
