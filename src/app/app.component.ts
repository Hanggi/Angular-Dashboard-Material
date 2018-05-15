import { Component, OnInit } from '@angular/core';

import {AdmSidebarService, AdmSidebarList} from './adm/adm-sidebar.service';
import {GlobalService} from './global.service';

import {MatIconModule} from '@angular/material';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';

@Component({
	selector: 'adm-app',
	templateUrl: './app.component.html',
	// styleUrls: ['./css/styles.css', './css/adm-styles.css'],
	animations: [
		trigger('sidebar-toggle', [
			state('show', style({
				width: 240,
			})),
			state('hide', style({
				width: '58px',
			})),
		]),
		trigger('container-toggle', [
			state('show', style({
				paddingLeft: '240px',
			})),
			state('hide', style({
				paddingLeft: '58px',
			})),
		]),
	]
})

export class AppComponent implements OnInit  {
	progressing: boolean = true;

	constructor(private router: Router, public G: GlobalService, private AdmSidebarService: AdmSidebarService) {
		let self = this;
		self.router.events.subscribe((event) => {
			if (event instanceof NavigationStart) {
				self.progressing = true;
			}
			if (event instanceof NavigationEnd) {
				self.progressing = false;
			}
		});
	}

	ngOnInit() {

		let menu = [
			{
				title: "Dashboard",
				uri: "/test",
				icon: "dashboard",
			},
			{
				title: "Meterial Design",
				uri: "/mdemo/button",
				icon: "build",
				superTitle: "Angular Material",
				subTitle: [
					{
						title: "Button",
						uri: "/mdemo/button"
					},
					{
						title: "Input",
						uri: "/mdemo/input"
					},
					{
						title: "Indicator",
						uri: "/mdemo/indicator"
					}
				]
			},
			{
				title: "MW Design",
				uri: "test",
				icon: "visibility",
				subTitle: [
					{
						title: "sub1"
					},
					{
						title: "sub2"
					}
				]
			},
			{
				title: "menu1",
				uri: "",
				icon: "language",
				superTitle: "super title",
				subTitle: [
					{
						title: "sub1"
					},
					{
						title: "sub2"
					}
				]
			}
		]
		this.AdmSidebarService.initMenu(menu);
	}

	name = 'ng-admin';

	sidebarToggle() {
		let self = this;
		if (self.G.admSidebarFold == 'show') {
			self.G.admSidebarFold = 'hide';
		}else {
			self.G.admSidebarFold = 'show';
		}
		console.log(self.G.admSidebarFold)
	}


}
