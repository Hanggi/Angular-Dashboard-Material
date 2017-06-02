import { NgModule } 			from '@angular/core';
import { RouterModule, Routes} 	from '@angular/router';

import {AppComponent} 		from './app.component';
import {TestComponent} 		from './test.component';

// import {MDemoButtonComponent} from './material-demo/button/mdemo-button.component';
// import {MDemoInputComponent} from './material-demo/input/mdemo-input.component';


const routes: Routes = [
	{path: '', redirectTo: 'test', pathMatch: 'full'},
	{path: 'test', component: TestComponent},
	// {path: 'mdemo/button', component: MDemoButtonComponent},
	// {path: 'mdemo/button', loadChildren: './material-demo/mdemo-button'},
	// {path: 'mdemo/input', component: MDemoInputComponent}
	{path: 'mdemo', loadChildren: '/app/material-demo/md.module#MdModule'},
]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [ RouterModule ]
})
export class AppRoutingModule  { name = 'ADM'; }
