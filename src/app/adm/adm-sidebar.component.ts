import {Component, OnInit}      from '@angular/core';
import {AdmSidebarService, AdmSidebarList} from './adm-sidebar.service';
import { Router } from '@angular/router';

import {GlobalService} from '../global.service';

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
			<button md-button class="main-menu" (click)="clickMenu(data, i, data.url)">
				<md-icon>{{data.icon}}</md-icon>
				<label>{{data.title}}</label>
				<md-icon [@nav-arrow]="data.fold" *ngIf="data.singleTitle" class="arrow">keyboard_arrow_right</md-icon>
			</button>
			<ul [@nav-fold]="data.fold">
				<li *ngFor="let sub of data.subTitle" class="sub-title">
					<button md-button (click)="goto(sub.url)">{{sub.title}}</button>
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
				color: '#D1D6D8',
			})),
			transition('active => inactive', animate('100ms ease-out')),
			transition('inactive => active', animate('100ms ease-in')),
		])
	]
})

export class AdmSidebarComponent implements OnInit {
	// testStr: string;
	datas: any;
	currentIndex: number;
	sbFold: boolean;
	
	constructor(private router: Router, private G: GlobalService,private AdmSidebarService: AdmSidebarService) {

	}

	ngOnInit() {
		// this.testStr = this.AdmSidebarService.getTest();

		this.datas = this.G.aslData
	}

	clickMenu(data: AdmSidebarList, i: number, url: string) {
//		let self = this;
		let ci = this.currentIndex;
		if (ci >= 0 && ci != i) {
				this.datas[ci].fold = 'inactive';
		}
		data.foldToggle();
		this.currentIndex = i;
		if (url) {
			this.goto(url);
		}
	}

	goto(url: string) {
		console.log(url)
		this.router.navigate([url]);
	}
}
