import { Component, OnInit} from '@angular/core';

@Component({
	selector: 'd3',
	template: `
		<h2>D3</h2>
		<router-outlet></router-outlet>
	`,
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.scss'],
//   animations: [
//     flyIn
//   ]
})

export class D3Component {

	ngOnInit() {
		console.log("D3Module");
	}
}