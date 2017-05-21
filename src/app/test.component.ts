import { Component } from '@angular/core';


@Component({
  selector: 'test',
  // template: `<h1>This is test page! {{test}}</h1>`,
  templateUrl: 'app/template/test.html',
})
export class TestComponent  {
  test = 'test';
  checked = true;
  align = 'start';
  disabled = false;
  indeterminate = false;

  inputtxt = 'vvv';
  inputtxt2 = '';
}
