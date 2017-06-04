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
			<button md-button class="main-menu" (click)="clickMenu(data, i, data.url);showSidebar()">
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
			state('inactive', style({
				maxHeight: 0,
				// transform: 'scaleY(0)',
				// display: 'none',
			})),
			state('active', style({
				maxHeight: 1000,
				// transform: 'scaleY(1)',
				// display: 'block',
			})),
			transition('inactive => active', animate('300ms linear')),
			// transition('active => inactive', animate('300ms linear')),
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
			transition('active => inactive', animate('100ms linear')),
			transition('inactive => active', animate('100ms linear')),
		])
	]
})

export class AdmSidebarComponent implements OnInit {
	datas: any;
	currentIndex: number;
	sbFold: boolean;
	
	constructor(private router: Router, private G: GlobalService,private AdmSidebarService: AdmSidebarService) {

	}

	ngOnInit() {
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

	showSidebar() {
		console.log(111)
		let self = this;
		self.G.admSidebarFold = 'show';
	}

}
