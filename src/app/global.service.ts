import { Injectable } 	from '@angular/core';
import { Http }       from '@angular/http';


// import { Observable } 	from 'rxjs/Observable';
// import 'rxjs/add/operator/map';

class Hero {
	id: number;
	name: string;
	a: string;
	b: string;
}

@Injectable()
export class GlobalService {
	constructor(private http: Http) {}

	admSidebarFold: string = 'show';
	
	// aslData: any;
	menuList: any;

	// test(): Observable<Hero[]> {
	// 	// console.log('test')
	// 	return this.http
	// 		.get(`http://localhost:3210/test?a=123&b=abc`)
	// 		.map(response => response.json().data as Hero[]);
	// }
}
