webpackJsonp(["error.module"],{

/***/ "../../../../../src/app/theme/maintenance/error/error-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__error_component__ = __webpack_require__("../../../../../src/app/theme/maintenance/error/error.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__error_component__["a" /* ErrorComponent */],
        data: {
            title: 'Error pages',
            icon: 'icon-settings',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - error',
            status: true
        }
    }
];
var ErrorRoutingModule = (function () {
    function ErrorRoutingModule() {
    }
    ErrorRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
        })
    ], ErrorRoutingModule);
    return ErrorRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/theme/maintenance/error/error.component.html":
/***/ (function(module, exports) {

module.exports = "<app-card [title]=\"'Error Found'\" [headerContent]=\"'Lorem ipsum dolor sit amet, consectetur adipisicing elit'\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-3 m-b-30\">\r\n      <a href=\"http://html.codedthemes.com/gradient-able/default/404/2/index.html\" target=\"_blank\"><img src=\"assets/images/error/error-1.jpg\" alt=\"Layout-1\" class=\"img-fluid img-thumbnail\"></a>\r\n    </div>\r\n    <div class=\"col-sm-3 m-b-30\">\r\n      <a href=\"http://html.codedthemes.com/gradient-able/default/404/1/index-bubble.html\" target=\"_blank\"><img src=\"assets/images/error/error-2.jpg\" alt=\"Layout-2\" class=\"img-fluid img-thumbnail\"></a>\r\n    </div>\r\n    <div class=\"col-sm-3 m-b-30\">\r\n      <a href=\"http://html.codedthemes.com/gradient-able/default/404/1/index-flat.html\" target=\"_blank\"><img src=\"assets/images/error/error-3.jpg\" alt=\"Layout-3\" class=\"img-fluid img-thumbnail\"></a>\r\n    </div>\r\n    <div class=\"col-sm-3 m-b-30\">\r\n      <a href=\"http://html.codedthemes.com/gradient-able/default/404/1/index-image.html\" target=\"_blank\"><img src=\"assets/images/error/error-4.jpg\" alt=\"Layout-4\" class=\"img-fluid img-thumbnail\"></a>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-3\">\r\n      <a href=\"http://html.codedthemes.com/gradient-able/default/404/1/index-mozaic.html\" target=\"_blank\"><img src=\"assets/images/error/error-5.jpg\" alt=\"Layout-5\" class=\"img-fluid img-thumbnail\"></a>\r\n    </div>\r\n  </div>\r\n</app-card>\r\n"

/***/ }),

/***/ "../../../../../src/app/theme/maintenance/error/error.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/theme/maintenance/error/error.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ErrorComponent = (function () {
    function ErrorComponent() {
    }
    ErrorComponent.prototype.ngOnInit = function () {
    };
    ErrorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-error',
            template: __webpack_require__("../../../../../src/app/theme/maintenance/error/error.component.html"),
            styles: [__webpack_require__("../../../../../src/app/theme/maintenance/error/error.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ErrorComponent);
    return ErrorComponent;
}());



/***/ }),

/***/ "../../../../../src/app/theme/maintenance/error/error.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorModule", function() { return ErrorModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__error_component__ = __webpack_require__("../../../../../src/app/theme/maintenance/error/error.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__error_routing_module__ = __webpack_require__("../../../../../src/app/theme/maintenance/error/error-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ErrorModule = (function () {
    function ErrorModule() {
    }
    ErrorModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__error_routing_module__["a" /* ErrorRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__error_component__["a" /* ErrorComponent */]]
        })
    ], ErrorModule);
    return ErrorModule;
}());



/***/ })

});
//# sourceMappingURL=error.module.chunk.js.map