import { Component } from '@angular/core';

@Component({
	selector: 'mdemo-button',
	// template: `<h1>This is test page! {{test}}</h1>`,
	templateUrl: './mdemo-button.html',
})
export class MDemoButtonComponent  {
	

	// Radio Button
	favoriteSeason: string;
	seasons = [
		'Winter',
		'Spring',
		'Summer',
		'Autumn',
	];

	// toggle
	tchecked: boolean;

	// check box =================================================
	checked = false;
	indeterminate = false;
	align = 'start';
	disabled = false;

	// slider =================
  	autoTicks = false;
	invert = false;
	max = 100;
	min = 0;
	showTicks = false;
	step = 1;
	thumbLabel = false;
	value = 0;
	vertical = false;

	get tickInterval(): number | 'auto' {
		return this.showTicks ? (this.autoTicks ? 'auto' : this._tickInterval) : 0;
	}
	set tickInterval(v) {
		this._tickInterval = Number(v);
	}
	private _tickInterval = 1;


	// slide toggle
	color = 'accent';
	// checked = false;
	// disabled = false;
}
