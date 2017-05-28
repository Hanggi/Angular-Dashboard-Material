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
			<button md-button class="main-menu" (click)="clickMenu(data, i)">
				<md-icon>{{data.icon}}</md-icon>
				<label>{{data.title}}</label>
				<md-icon [@nav-arrow]="data.fold" class="arrow">keyboard_arrow_right</md-icon>
			</button>
			<ul [@nav-fold]="data.fold">
				<li *ngFor="let sub of data.subTitle" class="sub-title">
					<button md-button>{{sub.title}}</button>
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
		]),
		trigger('nav-arrow', [
			state('active', style({
				transform: 'rotate(90deg)',
				color: '#FF962F',
			})),
			state('inactive', style({
				transform: 'none',
			})),
			transition('active => inactive', animate('100ms ease-out')),
			transition('inactive => active', animate('100ms ease-in')),
		])
	]
})


export class AdmSidebarComponent implements OnInit {
	testStr: string;
	datas: any;
	currentIndex: number;
	sbFold: boolean;
	
	
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
		asl3.superTitle = "Nav";
		asl3.addSubTitle('sub 1111 1', '/test');
		asl3.addSubTitle('sub 222 1', '/test');
		asl3.addSubTitle('sub 333 1', '/test');

		this.datas = [asl, asl2, asl3];
	}

	clickMenu(data: AdmSidebarList, i: number) {
//		let self = this;
		let ci = this.currentIndex;
		if (ci >= 0 && ci != i) {
				this.datas[ci].fold = 'inactive';
		}
		data.foldToggle();
		this.currentIndex = i;
	}
}
