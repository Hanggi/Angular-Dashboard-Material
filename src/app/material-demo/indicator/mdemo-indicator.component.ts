import { Component } from '@angular/core';
import { MatSnackBar, MatDialog, MatDialogRef } from '@angular/material';

@Component({
	selector: 'mdemo-indicator',
	templateUrl: './mdemo-indicator.html',
})
export class MDemoIndicatorComponent  {
	selectedOption: string;

	constructor(public dialog: MatDialog, public snackBar: MatSnackBar) {}

	openDialog() {
		let dialogRef = this.dialog.open(DialogResultExampleDialog);
		dialogRef.afterClosed().subscribe(result => {
			this.selectedOption = result;
		});
	}


	// chips =================================================
	availableColors = [
		{ name: 'none', color: '' },
		{ name: 'Primary', color: 'primary' },
		{ name: 'Accent', color: 'accent' },
		{ name: 'Warn', color: 'warn' }
	];

	// progress spinner =================================================
	color = 'primary';
	mode = 'determinate';
	value = 50;

	bufferValue = 75;
	  



	openSnackBar(message: string, action: string) {
		this.snackBar.open(message, action, {
		  duration: 2000,
		});
	}
	tiles = [
		{text: 'One', cols: 3, rows: 1, color: 'lightblue'},
		{text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
		{text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
		{text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
	];
}


@Component({
	selector: 'dialog-result-example-dialog',
	template: `
		<div>ffffeef efe</div>
		<div>Are you sure?</div>
	`,
})
export class DialogResultExampleDialog {
  	constructor(public dialogRef: MatDialogRef<DialogResultExampleDialog>) {}
}
