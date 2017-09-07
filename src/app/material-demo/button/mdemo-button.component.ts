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

	// slide toggle
	color = 'accent';
}
