import {Component, OnInit}      from '@angular/core';
import {AdmSidebarService, AdmSidebarList} from './adm-sidebar.service';


@Component({
	selector: 'adm-sb-accordion',
	template: `
		<div>This is adm-sb-accordion</div>
		<div *ngFor="let data of datas" id="main-navigator">
			<div class="main-menu">
				<md-icon svgIcon="home"></md-icon>
				{{data.title}}
			</div>
			<ul>
				<li *ngFor="let sub of data.subTitle">
					{{sub.title}}
				</li>
			</ul>
		</div>
	`,
})


export class AdmSidebarComponent implements OnInit {
	testStr: string;
	datas: any;
	
	
	constructor(private AdmSidebarService: AdmSidebarService) {

	}

	ngOnInit() {
		this.testStr = this.AdmSidebarService.getTest();

		let asl = new AdmSidebarList('Main title', '/test');
		asl.addSubTitle('sub title 1', '/test');
		// this.AdmSidebarService.setSbList()

		this.datas = [asl];
	}
}
