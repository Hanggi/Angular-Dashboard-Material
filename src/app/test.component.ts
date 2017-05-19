import { Component } from '@angular/core';

class MyComp {
   myControl = new FormControl();
   options = [
    'One',
    'Two',
    'Three'
   ];
   filteredOptions: Observable<string[]>;

   ngOnInit() {
      this.filteredOptions = this.myControl.valueChanges
         .startWith(null)
         .map(val => val ? this.filter(val) : this.options.slice());
   }

   filter(val: string): string[] {
      return this.options.filter(option => new RegExp(`^${val}`, 'gi').test(option)); 
   }
}


@Component({
  selector: 'test',
  // template: `<h1>This is test page! {{test}}</h1>`,
  templateUrl: 'app/template/test.html',
})
export class TestComponent  {
  test = 'test';
  checked = true;
  align = 'start';
}
