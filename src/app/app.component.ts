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
	// template: `
	// 	<h1>Hello {{name}}</h1>
	// 	<router-outlet></router-outlet>
	// `,
	templateUrl: 'template/app.html',
	styleUrls: [],
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



}
