import { NgModule } 			from '@angular/core';
import { RouterModule, Routes} 	from '@angular/router';

import {AppComponent} 		from './app.component';
import {TestComponent} 		from './test.component';

const routes: Routes = [
	{path: '', redirectTo: 'test', pathMatch: 'full'},
	{path: 'test', component: TestComponent}
]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [ RouterModule ]
})
export class AppRoutingModule  { name = 'ADM'; }
