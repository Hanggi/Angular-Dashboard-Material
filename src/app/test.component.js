"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var MyComp = (function () {
    function MyComp() {
        this.myControl = new FormControl();
        this.options = [
            'One',
            'Two',
            'Three'
        ];
    }
    MyComp.prototype.ngOnInit = function () {
        var _this = this;
        this.filteredOptions = this.myControl.valueChanges
            .startWith(null)
            .map(function (val) { return val ? _this.filter(val) : _this.options.slice(); });
    };
    MyComp.prototype.filter = function (val) {
        return this.options.filter(function (option) { return new RegExp("^" + val, 'gi').test(option); });
    };
    return MyComp;
}());
var TestComponent = (function () {
    function TestComponent() {
        this.test = 'test';
        this.checked = true;
        this.align = 'start';
    }
    return TestComponent;
}());
TestComponent = __decorate([
    core_1.Component({
        selector: 'test',
        // template: `<h1>This is test page! {{test}}</h1>`,
        templateUrl: 'app/template/test.html',
    })
], TestComponent);
exports.TestComponent = TestComponent;
//# sourceMappingURL=test.component.js.map