import { Injectable } from '@angular/core';


@Injectable()
export class AdmSidebarService {
	sbList: any;
	menuLists: any[]; 				// main menu lists

	getTest(): string {
		return 'Service test string.'
	}
	setSbList(list: any) {
		this.sbList = list;
	}


	initMenu(listObj) {
		for (let i in listObj) {
			listObj[i].index = i;
			listObj[i].foldToggle = "inactive"
		}
		this.menuLists = listObj;
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
	menuLists: any[];

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

	setSingleTitle() {
		this.singleTitle = false;
	}
}