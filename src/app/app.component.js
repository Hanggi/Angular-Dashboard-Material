"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var adm_sidebar_service_1 = require("./adm/adm-sidebar.service");
var global_service_1 = require("./global.service");
var animations_1 = require("@angular/animations");
var AppComponent = (function () {
    function AppComponent(G, AdmSidebarService) {
        this.G = G;
        this.AdmSidebarService = AdmSidebarService;
        this.name = 'ADM';
    }
    AppComponent.prototype.ngOnInit = function () {
        // Initialize the sidebar menu list content.
        var asl = new adm_sidebar_service_1.AdmSidebarList('Dashboard', '/test', 'dashboard');
        asl.superTitle = "Button";
        asl.singTitle();
        var asl2 = new adm_sidebar_service_1.AdmSidebarList('Material Demo', '', 'build');
        asl2.addSubTitle('button', '/mdemo/button');
        asl2.addSubTitle('input', '/mdemo/input');
        var asl3 = new adm_sidebar_service_1.AdmSidebarList('333', '/test', 'visibility');
        asl3.superTitle = "Nav";
        asl3.addSubTitle('sub 1111 1', '/test');
        asl3.addSubTitle('sub 222 1', '/test');
        asl3.addSubTitle('sub 333 1', '/test');
        asl3.addSubTitle('sub 444 1', '/test');
        asl3.addSubTitle('sub 555 1', '/test');
        asl3.addSubTitle('sub 666 1', '/test');
        var asl4 = new adm_sidebar_service_1.AdmSidebarList('Main title 4444', '/test', 'work');
        asl4.addSubTitle('sub 333 1', '/test');
        asl4.addSubTitle('sub 444 1', '/test');
        asl4.addSubTitle('sub 555 1', '/test');
        asl4.addSubTitle('sub 666 1', '/test');
        this.G.aslData = [asl, asl2, asl4, asl3];
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'adm-app',
        // template: `
        // 	<h1>Hello {{name}}</h1>
        // 	<router-outlet></router-outlet>
        // `,
        templateUrl: 'template/app.html',
        styleUrls: [],
        animations: [
            animations_1.trigger('nav-fold', [
                animations_1.state('active', animations_1.style({
                    // height: 'auto',
                    display: 'block',
                })),
                animations_1.state('inactive', animations_1.style({
                    // height: 0,
                    display: 'none',
                })),
            ]),
        ]
    }),
    __metadata("design:paramtypes", [global_service_1.GlobalService, adm_sidebar_service_1.AdmSidebarService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map