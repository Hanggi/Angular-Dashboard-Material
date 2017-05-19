import { Component } from '@angular/core';

@Component({
  selector: 'test',
  template: `<h1>This is test page! {{test}}</h1>`,
})
export class TestComponent  { name = 'test'; }
