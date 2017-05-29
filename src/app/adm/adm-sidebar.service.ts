import { Injectable } from '@angular/core';


@Injectable()
export class AdmSidebarService {
	sbList: any;
	getTest(): string {
		return 'Service test string.'
	}
	setSbList(list: any) {
		this.sbList = list;
	}
}

export class AdmSidebarList {
	superTitle: string;
	title: string;
	icon: string;
	url: string;
	singleTitle: boolean = true;
	fold: string = 'inactive';
	subTitle: any[] = [];

	constructor(title: string, url: string, icon: string) {
		this.title = title;
		this.url = url;
		this.icon = icon;

		// if (url != null) {
		// 	this.singleTitle = true;
		// }
	}

	addSubTitle(title: string, url: string) {
		this.subTitle.push({title: title, url: url});
	}

	foldToggle() {
		if (this.fold == 'active') {
			this.fold = 'inactive';
		} else {
			this.fold = 'active';
		}
	}

	singTitle() {
		this.singleTitle = false;
	}
}