import { Component, OnInit } from '@angular/core';

import {AdmSidebarService, AdmSidebarList} from './adm/adm-sidebar.service';
import {GlobalService} from './global.service';

import {MdIconModule} from '@angular/material';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
	selector: 'adm-app',
	templateUrl: './app.html',
	styleUrls: [],
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

	constructor(private G: GlobalService,private AdmSidebarService: AdmSidebarService) {

	}

	ngOnInit() {

		// Initialize the sidebar menu list content.
		let asl = new AdmSidebarList('Dashboard', '/test', 'dashboard');
		asl.superTitle = "Angular Material";
		asl.singTitle();

		let asl2 = new AdmSidebarList('Material Demo', '/mdemo/button', 'build');
		asl2.addSubTitle('button', '/mdemo/button');
		asl2.addSubTitle('input', '/mdemo/input');
		asl2.addSubTitle('show', '/mdemo/show')

		let asl3 = new AdmSidebarList('Visualization', '/vis/charts', 'visibility');
		asl3.addSubTitle('Basic chart', '/vis/charts');
		asl3.addSubTitle('sub 222 1', '/test');
		asl3.addSubTitle('sub 333 1', '/test');
		asl3.addSubTitle('sub 444 1', '/test');
		asl3.addSubTitle('sub 555 1', '/test');
		asl3.addSubTitle('sub 666 1', '/test');

		let asl4 = new AdmSidebarList('Main title 4444', '/test', 'work');
		asl4.superTitle = "Nav";
		asl4.addSubTitle('sub 333 1', '/test');
		asl4.addSubTitle('sub 444 1', '/test');
		asl4.addSubTitle('sub 555 1', '/test');
		asl4.addSubTitle('sub 666 1', '/test');

		this.G.aslData = [asl, asl2, asl3, asl4];


		this.G.test().subscribe(
			res => {
				console.log(res)
			},
			err => {

			}
		);
	}

	name = 'ADM';

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
