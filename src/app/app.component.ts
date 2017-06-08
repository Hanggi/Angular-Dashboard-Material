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
	// styleUrls: [],
	animations: [
		trigger('sidebar-toggle', [
			state('show', style({
				width: 240,
				left: 0,
			})),
			state('hide', style({
				width: '58px',
				left: '-12px'
			})),
			// transition('show => hide', animate('100ms linear')),
			// transition('hide => show', animate('100ms linear')),
		]),
		trigger('container-toggle', [
			state('show', style({
				paddingLeft: '240px',
			})),
			state('hide', style({
				paddingLeft: '46px',
			})),
			// transition('show => hide', animate('100ms linear')),
			// transition('hide => show', animate('100ms linear')),
		]),
		trigger('super-toggle', [
			state('show', style({
				paddingLeft: '240px',
			})),
			state('hide', style({
				paddingLeft: '58px',
			})),
			transition('show => hide', animate('100ms linear')),
			transition('hide => show', animate('100ms linear')),
		]),
		trigger('logo-toggle', [
			state('show', style({
				left: 0,
			})),
			state('hide', style({
				left: -190,
			})),
			transition('show => hide', animate('300ms linear')),
			transition('hide => show', animate('300ms linear')),
		]),
	]
})

export class AppComponent implements OnInit  {

	constructor(private G: GlobalService,private AdmSidebarService: AdmSidebarService) {

	}

	ngOnInit() {

		// Initialize the sidebar menu list content.
		let asl = new AdmSidebarList('Dashboard', '/test', 'dashboard');
		asl.superTitle = "Button";
		asl.singTitle();

		let asl2 = new AdmSidebarList('Material Demo', '', 'build');
		asl2.addSubTitle('button', '/mdemo/button');
		asl2.addSubTitle('input', '/mdemo/input');
		asl2.addSubTitle('show', '/mdemo/show')

		let asl3 = new AdmSidebarList('333', '/test', 'visibility');
		asl3.superTitle = "Nav";
		asl3.addSubTitle('sub 1111 1', '/test');
		asl3.addSubTitle('sub 222 1', '/test');
		asl3.addSubTitle('sub 333 1', '/test');
		asl3.addSubTitle('sub 444 1', '/test');
		asl3.addSubTitle('sub 555 1', '/test');
		asl3.addSubTitle('sub 666 1', '/test');

		let asl4 = new AdmSidebarList('Main title 4444', '/test', 'work');
		asl4.addSubTitle('sub 333 1', '/test');
		asl4.addSubTitle('sub 444 1', '/test');
		asl4.addSubTitle('sub 555 1', '/test');
		asl4.addSubTitle('sub 666 1', '/test');

		this.G.aslData = [asl, asl2, asl4, asl3];
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
