import {Component, OnInit}      from '@angular/core';
import {AdmSidebarService, AdmSidebarList} from './adm-sidebar.service';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';


@Component({
	selector: 'adm-sb-accordion',
	template: `
		<div *ngFor="let data of datas; let i = index" id="main-navigator">
			<div *ngIf="data.superTitle" class="super-title">{{data.superTitle}}</div>
			<div class="main-menu" (click)="clickMenu(data, i)">
				<md-icon>{{data.icon}}</md-icon>
				<label>{{data.title}}</label>
				<md-icon class="arrow">keyboard_arrow_right</md-icon>
			</div>
			<ul [@nav-fold]="data.fold">
				<li *ngFor="let sub of data.subTitle" class="sub-title">
					{{sub.title}}
				</li>
			</ul>
		</div>
	`,
	animations: [
		trigger('nav-fold', [
			state('active', style({
				// height: 'auto',
				display: 'block',
			})),
			state('inactive', style({
				// height: 0,
				display: 'none',
			})),
			transition('active => inactive', animate('0ms ease-in')),
			transition('inactive => active', animate('0ms ease-out')),
		])
	]
})


export class AdmSidebarComponent implements OnInit {
	testStr: string;
	datas: any;
	currentIndex: number;
	
	
	constructor(private AdmSidebarService: AdmSidebarService) {

	}

	ngOnInit() {
		this.testStr = this.AdmSidebarService.getTest();

		let asl = new AdmSidebarList('Menu', '/test', 'dashboard');
		asl.superTitle = "Button";
		asl.addSubTitle('sub menu 1', '/test');
		asl.addSubTitle('sub menu 222', '/test');

		let asl2 = new AdmSidebarList('Main title 222', '/test', 'build');
		asl2.addSubTitle('sub 1111 1', '/test');

		let asl3 = new AdmSidebarList('Main title 3333', '/test', 'visibility');
		asl3.addSubTitle('sub 1111 1', '/test');
		asl3.addSubTitle('sub 222 1', '/test');
		asl3.addSubTitle('sub 333 1', '/test');
		// this.AdmSidebarService.setSbList()

		this.datas = [asl, asl2, asl3];
	}

	// setData(data: AdmSidebarList) {
	// 	this.datas = data;
	// }

	clickMenu(data: AdmSidebarList, i: number) {
		console.log(i);
		console.log(this.datas[this.currentIndex]);
//		let self = this;
		let ci = this.currentIndex;
		if (ci >= 0) {
			// if (ci == i) {
			// 	this.datas[ci].fold = 'active';
			// 	return;
			// }
			if (ci != i)
				this.datas[ci].fold = 'inactive';
			
		}
		data.foldToggle();
		this.currentIndex = i;
	}
}
