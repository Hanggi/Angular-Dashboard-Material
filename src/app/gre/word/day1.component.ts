import { Component, OnInit } from '@angular/core';

import {WordService} from './word.service';

@Component({
	selector: 'day1',
	// template: `<h1>This is test page! {{test}}</h1>`,
	templateUrl: './day1.html',
	styles: []
})


export class Day1Component implements OnInit {

	constructor(private W: WordService) {}

	ngOnInit() {
		this.W.test().subscribe(
			res => {
				console.log(res)
			},
			err => {
				console.log(`err@!!: ${err}`)
			}
		);
	}

}
