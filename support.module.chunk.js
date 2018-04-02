webpackJsonp(["support.module"],{

/***/ "../../../../../src/app/theme/support/support-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SupportRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__support_component__ = __webpack_require__("../../../../../src/app/theme/support/support.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__support_component__["a" /* SupportComponent */],
        data: {
            title: 'support',
            icon: 'icon-home',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
            status: false
        }
    }
];
var SupportRoutingModule = (function () {
    function SupportRoutingModule() {
    }
    SupportRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
        })
    ], SupportRoutingModule);
    return SupportRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/theme/support/support.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SupportComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_admin_service__ = __webpack_require__("../../../../../src/services/admin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__toast__ = __webpack_require__("../../../../../src/app/theme/toast.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SupportComponent = (function () {
    function SupportComponent(AdminService, router) {
        var _this = this;
        this.AdminService = AdminService;
        this.router = router;
        this.requestSupport = [];
        this.request_support_obj = {};
        this.getsubject = [];
        this.getmessage = [];
        this.request_support_obj_subject = "";
        this.request_support_obj_message = "";
        this.request_support_obj_email = "";
        this.toast = new __WEBPACK_IMPORTED_MODULE_2__toast__["a" /* Toast */]();
        this.AdminService.getRquestSupport().subscribe(function (response) {
            console.log(response);
            for (var i = 0; i < response.data.length; i++) {
                _this.requestSupport[i] = response.data[i];
            }
            console.log('valuess', _this.requestSupport);
        });
    }
    SupportComponent.prototype.UpdateRequest = function (id) {
        /*this.AdminService.updaterequests(id).subscribe(response => {
            console.log(response);
            $("#snackbar").html(response.message);
            this.toast.showToast();
            var index = this.requestSupport.findIndex(x=>x._id == id);
            this.requestSupport.splice(index, 1);
            console.log('valuess',this.requestSupport);
          });  */
    };
    SupportComponent.prototype.getDetail = function (id) {
        var request_support_obj = this.requestSupport.find(function (x) { return x._id == id; });
        this.request_support_obj_subject = request_support_obj.subject;
        this.request_support_obj_message = request_support_obj.message;
        this.request_support_obj_email = request_support_obj.userId.Email;
    };
    SupportComponent.prototype.showToast = function () {
        // Get the snackbar DIV
        var x = document.getElementById("snackbar");
        // Add the "show" class to DIV
        x.className = "show";
        // After 3 seconds, remove the show class from DIV
        setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
    };
    SupportComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'support-component',
            template: __webpack_require__("../../../../../src/app/theme/support/support.template.html"),
            styles: [__webpack_require__("../../../../../src/app/theme/support/support.style.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_admin_service__["a" /* AdminService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_admin_service__["a" /* AdminService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"]])
    ], SupportComponent);
    return SupportComponent;
}());



/***/ }),

/***/ "../../../../../src/app/theme/support/support.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportModule", function() { return SupportModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__support_component__ = __webpack_require__("../../../../../src/app/theme/support/support.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__support_routing_module__ = __webpack_require__("../../../../../src/app/theme/support/support-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_chartjs__ = __webpack_require__("../../../../angular2-chartjs/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_chartjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_chartjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_notifications__ = __webpack_require__("../../../../angular2-notifications/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_modal__ = __webpack_require__("../../../../ng2-modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_ng2_modal__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var SupportModule = (function () {
    function SupportModule() {
    }
    SupportModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__support_routing_module__["a" /* SupportRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_5_angular2_chartjs__["ChartModule"],
                __WEBPACK_IMPORTED_MODULE_9_ng2_modal__["ModalModule"],
                __WEBPACK_IMPORTED_MODULE_7__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_6_angular2_notifications__["b" /* SimpleNotificationsModule */].forRoot()
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__support_component__["a" /* SupportComponent */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__support_component__["a" /* SupportComponent */]]
        })
    ], SupportModule);
    return SupportModule;
}());



/***/ }),

/***/ "../../../../../src/app/theme/support/support.style.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/theme/support/support.template.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"snackbar\">\r\n</div>\r\n<div class=\"table-responsive\">\r\n  <table class=\"table\">\r\n    <thead>\r\n      <tr>\r\n        <th>Id</th>\r\n        <th>Email</th>\r\n        <th>Subject</th>\r\n        <th>Message</th>\r\n        <th>Detail View</th>\r\n        <th>Update</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <!-- <tr  *ngFor=\"let request of requestSupport; let i = index\">\r\n          <td>{{i + 1}}</td> \r\n          <td>{{request.userId.Email}}</td> \r\n          <td>{{request.subject}}</td>\r\n          <td>{{request.message}}</td>\r\n          <td><button (click)=\"modalSmall.show();getDetail(request._id)\">Detail View</button></td>\r\n      <td><button (click)=\"UpdateRequest(request._id)\">Update</button></td>\r\n        </tr> -->\r\n      <tr *ngFor=\"let request of requestSupport; let i = index\">\r\n        <td>1</td>\r\n        <td>stevesmith@gmail.com</td>\r\n        <td>Didnt Recieved Tokens</td>\r\n        <td>I didnt recieved any tokens yet. I have already invested through ETH.</td>\r\n        <td>\r\n          <button (click)=\"modalSmall.show()\">Detail View</button>\r\n        </td>\r\n        <td>\r\n          <button (click)=\"UpdateRequest(request._id)\">Update</button>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n\r\n<app-modal-basic #modalSmall [dialogClass]=\"'modal-lg'\">\r\n  <div class=\"app-modal-header\">\r\n    <h4 class=\"modal-title\">Details {{type}}</h4>\r\n    <button type=\"button\" class=\"close basic-close\" (click)=\"modalSmall.hide()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"app-modal-body\">\r\n\r\n    <div class=\"form-group row\">\r\n      <label class=\"col-sm-4 col-form-label\">{{type}} Email</label>\r\n      <div class=\"col-sm-8\">\r\n        <p>{{request_support_obj_email}}</p>\r\n        <!--   <input type=\"text\"  class=\"userEmail\" [(ngModel)]=\"requestSupport.userId.Email\" name=\"packaging-name\" id=\"email\"\r\n                placeholder=\"\" required> -->\r\n\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group row\">\r\n      <label class=\"col-sm-4 col-form-label\">{{type}} Subject</label>\r\n      <div class=\"col-sm-8\">\r\n        <p>{{request_support_obj_subject}}</p>\r\n\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group row\">\r\n      <label class=\"col-sm-4 col-form-label\">{{type}} Message</label>\r\n      <div class=\"col-sm-8\">\r\n        <p>{{request_support_obj_message}}</p>\r\n\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group row\">\r\n      <label class=\"col-sm-4\"></label>\r\n      <div class=\"col-sm-8\">\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"app-modal-footer\">\r\n    <button id=\"close-btn\" type=\"button\" class=\"btn btn-default waves-effect\" (click)=\"modalSmall.hide()\">Close</button>\r\n  </div>\r\n</app-modal-basic>"

/***/ })

});
//# sourceMappingURL=support.module.chunk.js.map