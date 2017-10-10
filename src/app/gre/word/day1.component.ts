import { Component, OnInit } from '@angular/core';

import {WordService} from './word.service';

@Component({
	selector: 'day1',
	// template: `<h1>This is test page! {{test}}</h1>`,
	templateUrl: './day1.html',
	styles: [`
		p {	font-family: medium-content-serif-font,Georgia,Cambria,"Times New Roman",Times,serif;
			font-size: 21px;line-height: 1.58;font-weight: 400;font-style: normal;
		}
	`]
})


export class Day1Component implements OnInit {

	constructor(private W: WordService) {}

	D: any;

	ngOnInit() {
		this.W.test().subscribe(
			res => {
				console.log(res)
				this.D = res;
			},
			err => {
				console.log(`err@!!: ${err}`)
			}
		);
	}

}
