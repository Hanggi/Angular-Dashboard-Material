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
		<div *ngFor="let data of datas" id="main-navigator">
			<div *ngIf="data.superTitle" class="super-title">{{data.superTitle}}</div>
			<div class="main-menu" (click)="data.foldToggle()">
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
				height: 0,
			})),
			state('inactive', style({
				height: 'auto',
			})),
			transition('active => inactive', animate('100ms ease-in')),
			transition('inactive => active', animate('100ms ease-out'))
		])
	]
})


export class AdmSidebarComponent implements OnInit {
	testStr: string;
	datas: any;
	
	
	constructor(private AdmSidebarService: AdmSidebarService) {

	}

	ngOnInit() {
		this.testStr = this.AdmSidebarService.getTest();

		let asl = new AdmSidebarList('Main title', '/test', 'dashboard');
		asl.superTitle = "Button";
		asl.addSubTitle('sub title 1', '/test');
		asl.addSubTitle('sub 222', '/test');

		let asl2 = new AdmSidebarList('Main title 222', '/test', 'build');
		asl2.addSubTitle('sub 1111 1', '/test');
		// this.AdmSidebarService.setSbList()

		this.datas = [asl, asl2];
	}
}
