import {Component, OnInit} from '@angular/core';
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
			<div class="menu-wrap" *ngIf="G.admSidebarFold == 'show'">
				<div *ngIf="data.superTitle" class="super-title">{{data.superTitle}}</div>
				<button mat-button class="main-menu" (click)="clickMenu(data, i, data.url);showSidebar()">
					
					<i class="material-icons">{{data.icon}}</i>
					<label>{{data.title}}</label>
					<i class="material-icons" [@nav-arrow]="currentIndex == i ? 'active' : 'inactive'" *ngIf="data.singleTitle">keyboard_arrow_right</i>
				</button>
				<ul [@nav-fold]="currentIndex == i ? 'active' : 'inactive'">
					<li *ngFor="let sub of data.subTitle" class="sub-title">
						<button mat-button (click)="goto(sub.url)">{{sub.title}}</button>
					</li>
				</ul>
			</div>
			<div class="menu-wrap folded" *ngIf="G.admSidebarFold == 'hide'">
				<div *ngIf="data.superTitle" class="super-title folded">——</div>
				<button mat-button class="main-menu folded" (click)="clickMenu(data, i, data.url);showSidebar()">
					
					<i class="material-icons">{{data.icon}}</i>
				</button>
			</div>
		</div>
	`,
	animations: [
		trigger('nav-fold', [
			state('active', style({
				height:'*',
			})),
			state('inactive', style({
				height:0,
			})),
			transition('active <=> inactive', animate('100ms linear')),
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
	currentIndex: number = -1;
	sbFold: boolean;

	constructor(private router: Router, private G: GlobalService,private AdmSidebarService: AdmSidebarService) {

	}

	ngOnInit() {
		this.datas = this.G.aslData
	}

	clickMenu(data: AdmSidebarList, i: number, url: string) {
//		let self = this;
		// let ci = this.currentIndex;
		// if (ci >= 0 && ci != i) {
		// 		this.datas[ci].fold = 'inactive';
		// }
		// data.foldToggle();
		// this.currentIndex = i;
		if (this.currentIndex == i) {
			this.currentIndex = -1;
		} else {
			this.currentIndex = i;
		}
		if (url) {
			this.goto(url);
		}
	}

	goto(url: string) {
		console.log(url)
		this.router.navigate([url]);
	}

	showSidebar() {
		// console.log(111)
		let self = this;
		self.G.admSidebarFold = 'show';
	}

}
