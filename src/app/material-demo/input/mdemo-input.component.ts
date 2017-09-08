import { Component } from '@angular/core';
import { FormControl }    from '@angular/forms';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

@Component({
	selector: 'mdemo-input',
	// template: `<h1>This is test page! {{test}}</h1>`,
	templateUrl: './mdemo-input.html',
	// encapsulation: ViewEncapsulation.None,
})
export class MDemoInputComponent  {	
	// input =================================================
	// inputtxt: string = 'this is str';
	// inputtxt2 = '';


	stateCtrl: FormControl;
	filteredStates: Observable<any[]>;
  
	states: any[] = [
		{
			name: 'Arkansas',
			population: '2.978M',
			// https://commons.wikimedia.org/wiki/File:Flag_of_Arkansas.svg
			flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg'
		},
		{
			name: 'California',
			population: '39.14M',
			// https://commons.wikimedia.org/wiki/File:Flag_of_California.svg
			flag: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_California.svg'
		},
		{
			name: 'Florida',
			population: '20.27M',
			// https://commons.wikimedia.org/wiki/File:Flag_of_Florida.svg
			flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Florida.svg'
		},
		{
			name: 'Texas',
			population: '27.47M',
			// https://commons.wikimedia.org/wiki/File:Flag_of_Texas.svg
			flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg'
		}
	];
  
	constructor() {
		this.stateCtrl = new FormControl();
		this.filteredStates = this.stateCtrl.valueChanges
			.startWith(null)
			.map(state => state ? this.filterStates(state) : this.states.slice());
	}
  
	filterStates(name: string) {
		return this.states.filter(state =>
			state.name.toLowerCase().indexOf(name.toLowerCase()) === 0);
	}


	// slide =================================================
	autoTicks = false;
	// disabled = false;
	invert = false;
	max = 100;
	min = 0;
	showTicks = false;
	step = 1;
	thumbLabel = false;
	value = 0;
	vertical = false;

	testtick = 3;

	private _tickInterval = 1;
	get tickInterval(): number | 'auto' {
		// console.log("???")
		return this.showTicks ? (this.autoTicks ? 'auto' : this._tickInterval) : null;
	}
	set tickInterval(v) {
		// console.log("!!!")
		this._tickInterval = Number(v);
	}

	// autocomplete =================================================

	// Select 
	selectedValue: string;

	foods = [
		{value: 'steak-0', viewValue: 'Steak'},
		{value: 'pizza-1', viewValue: 'Pizza'},
		{value: 'tacos-2', viewValue: 'Tacos'}
	];
	

}
