"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var test_component_1 = require("./test.component");
// import {MDemoButtonComponent} from './material-demo/button/mdemo-button.component';
// import {MDemoInputComponent} from './material-demo/input/mdemo-input.component';
var routes = [
    { path: '', redirectTo: 'test', pathMatch: 'full' },
    { path: 'test', component: test_component_1.TestComponent },
    // {path: 'mdemo/button', component: MDemoButtonComponent},
    // {path: 'mdemo/button', loadChildren: './material-demo/mdemo-button'},
    // {path: 'mdemo/input', component: MDemoInputComponent}
    { path: 'mdemo', loadChildren: '/app/material-demo/md.module#MdModule' },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
        this.name = 'ADM';
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map