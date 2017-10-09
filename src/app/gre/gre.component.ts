import { Component, OnInit} from '@angular/core';

@Component({
	selector: 'gre',
	template: `
		<h2>GRE</h2>
		<router-outlet></router-outlet>
	`,
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.scss'],
//   animations: [
//     flyIn
//   ]
})

export class GreComponent {

	ngOnInit() {
		console.log("GreModule");
	}
}