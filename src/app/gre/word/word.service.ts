import { Injectable } 	from '@angular/core';
import { Http }       from '@angular/http';


import { Observable } 	from 'rxjs/Observable';
import 'rxjs/add/operator/map';

class Word {
	word: string;
	meaning: string;
	symbol: string;
	es: string;
	synonyms: string;
}

@Injectable()
export class WordService {
	constructor(private http: Http) {}

	test(): Observable<Word[]> {
		// console.log('test')
		return this.http
			.get(`/adm/assets/latest_word_5.0.json`)
			.map(response => {return response.json()});
	}
}
