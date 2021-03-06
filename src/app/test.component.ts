import { Component } from '@angular/core';


@Component({
	selector: 'test',
	// template: `<h1>This is test page! {{test}}</h1>`,
	templateUrl: './test.html',
})
export class TestComponent  {
	test = 'test';
	checked = true;
	align = 'start';
	disabled = false;
	indeterminate = false;

	inputtxt = 'vvv';
	inputtxt2 = '';

	clickTest() {
		this.test = 'clicked test !';
	}

	selectedValue: string;
	foods = [
		{value: 'steak-0', viewValue: 'Steak'},
		{value: 'pizza-1', viewValue: 'Pizza'},
		{value: 'tacos-2', viewValue: 'Tacos'}
	];
}
