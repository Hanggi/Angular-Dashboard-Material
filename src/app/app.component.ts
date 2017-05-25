import { Component } from '@angular/core';

@Component({
	selector: 'adm-app',
	// template: `
	// 	<h1>Hello {{name}}</h1>
	// 	<router-outlet></router-outlet>
	// `,
	templateUrl: 'template/app.html',
	styleUrls: [],
})

export class AppComponent  {
	name = 'ADM';
}
