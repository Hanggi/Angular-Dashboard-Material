import { Component } from '@angular/core';
import {MdDialog, MdDialogRef} from '@angular/material';

@Component({
	selector: 'mdemo-show',
	templateUrl: './mdemo-show.html',
})
export class MDemoShowComponent  {
	selectedOption: string;

	constructor(public dialog: MdDialog) {}

	openDialog() {
		let dialogRef = this.dialog.open(DialogResultExampleDialog);
		dialogRef.afterClosed().subscribe(result => {
			this.selectedOption = result;
		});
	}

	// progress spinner =================================================
	color = 'primary';
	mode = 'determinate';
	value = 50;
	
  	bufferValue = 75;
}


@Component({
	selector: 'dialog-result-example-dialog',
	template: `
		<div>ffffeef efe</div>
		<md-dialog-content>Are you sure?</md-dialog-content>
	`,
})
export class DialogResultExampleDialog {
  	constructor(public dialogRef: MdDialogRef<DialogResultExampleDialog>) {}
}