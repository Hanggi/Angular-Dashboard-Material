import { Component } from '@angular/core';

@Component({
	selector: 'mdemo-button',
	// template: `<h1>This is test page! {{test}}</h1>`,
	templateUrl: './mdemo-button.html',
})
export class MDemoButtonComponent  {
	availableColors = [
		{ name: 'none', color: '' },
		{ name: 'Primary', color: 'primary' },
		{ name: 'Accent', color: 'accent' },
		{ name: 'Warn', color: 'warn' }
	];

	// Radio Button
	favoriteSeason: string;
	seasons = [
		'Winter',
		'Spring',
		'Summer',
		'Autumn',
	];

	// toggle
	checked: boolean;

}
