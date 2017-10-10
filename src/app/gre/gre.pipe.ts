import { Pipe, PipeTransform } from '@angular/core';


@Pipe({name: 'blank'})
export class GrePipe implements PipeTransform {
	transform(str: string, word: string): string {
		let w;
		if (word.slice(-3) == "ion") {
			w = word.substring(0, word.length - 3)
		} else {
			w = word.substring(0, word.length - 1)
		}
		// let pos = str.indexOf(w);
		let reg = new RegExp(w +"\\w*[\\s]");
		console.log(reg);
		if (!reg.test(str)) {
			let reg2 = new RegExp(w +"\\w*[.]");
			return str.replace(reg2, "_______.");
		} else {
			return str.replace(reg, "_______ ");
		}
	}
}