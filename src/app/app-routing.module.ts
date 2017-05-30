import { NgModule } 			from '@angular/core';
import { RouterModule, Routes} 	from '@angular/router';

import {AppComponent} 		from './app.component';
import {TestComponent} 		from './test.component';

import {MDemoButtonComponent} from './material-demo/mdemo-button.component';
import {MDemoInputComponent} from './material-demo/mdemo-input.component';


const routes: Routes = [
	{path: '', redirectTo: 'test', pathMatch: 'full'},
	{path: 'test', component: TestComponent},
	{path: 'mdemo/button', component: MDemoButtonComponent},
	{path: 'mdemo/input', component: MDemoInputComponent}
]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [ RouterModule ]
})
export class AppRoutingModule  { name = 'ADM'; }
