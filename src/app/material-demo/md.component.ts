import { Component, OnInit} from '@angular/core';

@Component({
	selector: 'md',
	template: `
		<h1>ttt</h1>
		<router-outlet></router-outlet>
	`,
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.scss'],
//   animations: [
//     flyIn
//   ]
})

export class MdComponent {

	ngOnInit() {
		console.log("MdModule");
	}
}