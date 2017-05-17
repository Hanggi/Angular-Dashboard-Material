import {Component} from '@angular/core';

@Component({
    selector: 'adm-app',
    template: `<h1>Hello {{name}}</h1>`
})

export class AppComponent {name = 'Hanggi';}