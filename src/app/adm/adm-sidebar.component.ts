import {Component, OnInit} from '@angular/core';
import {AdmSidebarService, AdmSidebarList} from './adm-sidebar.service';
import { Router, NavigationEnd, RoutesRecognized } from '@angular/router';

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
	// styleUrls: ['../css/adm-styles.css'],
	templateUrl: './adm-sidebar.component.html',
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
				// color: '#FF962F',
			})),
			state('inactive', style({
				transform: 'none',
				// color: '#D1D6D8',
			})),
			transition('active => inactive', animate('100ms linear')),
			transition('inactive => active', animate('100ms linear')),
		])
	]
})

export class AdmSidebarComponent implements OnInit {
	sbFold: boolean;

	lists: any;
	menuIndex: number = -1;
	currentUrl: string;
	currentMenuItem: any;

	constructor(private router: Router, private G: GlobalService,private AdmSidebarService: AdmSidebarService) {
		let self = this;

		self.router.events.subscribe((event) => {
			if (event instanceof RoutesRecognized && !self.currentMenuItem) {
				console.log(self == this)
				this.currentUrl = event.url;
				self.currentMenuItem = self.AdmSidebarService.menuLists.find((ele) => {
					let res = false;
					if (ele.uri == event.url) {res = true;}
					if (ele.subTitle) {
						for (let e of ele.subTitle) {
							if (e.uri == event.url) {res = true;}
						}
					}
					return res
				})
				self.menuIndex = self.currentMenuItem.index;
				self.currentMenuItem.foldToggle = "active";
			}
		})
	}

	ngOnInit() {
		let self = this;
		self.lists = self.AdmSidebarService.menuLists;
		// self.currentMenuItem = self.lists[0]
	}

	isActive(index, item) {
		return (this.menuIndex == index) ? "active" : "inactive";
	}

	clickMenu(item: any, i: number) {
		let self = this;
		if (self.currentMenuItem.index == i) {
			item.foldToggle = item.foldToggle == "active" ? "inactive" : "active";
		} else {
			self.currentMenuItem.foldToggle = "inactive";
			item.foldToggle = "active";
			self.menuIndex = i;
			self.currentMenuItem = item;
		}
		
		if (item.uri) {
			self.goto(item.uri);
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
