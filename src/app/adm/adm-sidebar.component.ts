import {Component, OnInit} from '@angular/core';
import {AdmSidebarService} from './adm-sidebar.service';
import { Router, RoutesRecognized} from '@angular/router';

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
	// sbFold: boolean;

	lists: any;
	menuIndex: number = -1;
	subMenuIndex: number = -1;
	currentUrl: string;
	currentMenuItem?: any;


	constructor(private router: Router, private G: GlobalService,private AdmSidebarService: AdmSidebarService) {
		let self = this;

		// 检查当前路由地址对应导航栏项目
		self.router.events.subscribe((event) => {
			// console.log(event)
			if (event instanceof RoutesRecognized && !self.currentMenuItem) {
				this.currentUrl = event.url;
				self.currentMenuItem = self.AdmSidebarService.menuLists.find((ele) => {
					let res = false;
					if (ele.uri == event.url) {res = true;}
					if (ele.subTitle) {
						for (let i in ele.subTitle) {
							if (ele.subTitle[i].uri == event.url) {
								res = true;
								self.subMenuIndex = +i;
							}
						}
					}
					return res
				}) || self.AdmSidebarService.menuLists[0];
				self.menuIndex = self.currentMenuItem.index;
				self.currentMenuItem.foldToggle = "active";
				// console.log(self.subMenuIndex)
			}
		})
	}

	ngOnInit() {
		let self = this;
		self.lists = self.AdmSidebarService.menuLists;
		// self.progressing = true;
		// self.currentMenuItem = self.lists[0]
	}

	isActive(index, item) {
		return (this.menuIndex == index) ? "active" : "inactive";
	}

	clickMenu(item: any, j: number) {
		let self = this;
		if (self.currentMenuItem.index == item.index) {
			item.foldToggle = item.foldToggle == "active" ? "inactive" : "active";
		} else {
			self.currentMenuItem.foldToggle = "inactive";
			item.foldToggle = "active";
			self.menuIndex = item.index;
			self.currentMenuItem = item;
			self.subMenuIndex = item.uri ? 0 : -1;
		}

		if (item.uri) {
			self.goto(item.uri);
		}
	}
	clickSubMenu(item: any, j: number) {
		let self = this;
		if (j >= 0) {
			self.subMenuIndex = j;
		}
		if (item.subTitle[j]) {
			self.goto(item.subTitle[j].uri)
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
