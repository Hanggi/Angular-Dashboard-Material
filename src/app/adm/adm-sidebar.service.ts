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
	fold: boolean = false;
	subTitle: any[] = [];

	constructor(title: string, url: string, icon: string) {
		this.title = title;
		this.url = url;
		this.icon = icon;
	}

	addSubTitle(title: string, url: string) {
		this.subTitle.push({title: title, url: url});
	}

	foldToggle() {
		if (this.fold) {
			this.fold = false;
		} else {
			this.fold = true;
		}
		console.log(this.fold)
	}
}