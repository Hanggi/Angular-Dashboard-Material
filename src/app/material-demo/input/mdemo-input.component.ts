import { Component } from '@angular/core';
// import { FormControl }    from '@angular/forms';

@Component({
	selector: 'mdemo-input',
	// template: `<h1>This is test page! {{test}}</h1>`,
	templateUrl: './mdemo-input.html',
	// encapsulation: ViewEncapsulation.None,
})
export class MDemoInputComponent  {	
	// input =================================================
	inputtxt: string = 'this is str';
	inputtxt2 = '';

	// check box =================================================
	checked = false;
	indeterminate = false;
	align = 'start';
	disabled = false;

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

	
	
}
