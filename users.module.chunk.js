webpackJsonp(["users.module"],{

/***/ "../../../../../src/app/theme/users/users-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__users_component__ = __webpack_require__("../../../../../src/app/theme/users/users.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__users_component__["a" /* UsersComponent */],
        data: {
            title: 'users',
            icon: 'icon-home',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
            status: false
        }
    }
];
var UsersRoutingModule = (function () {
    function UsersRoutingModule() {
    }
    UsersRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
        })
    ], UsersRoutingModule);
    return UsersRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/theme/users/users.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" id=\"userdiv\" style=\"display:block\">\r\n  <div class=\"col-md-12\">\r\n    <!-- Table header styling table start -->\r\n    <app-card [classHeader]=\"true\" [blockClass]=\"'table-border-style'\" [cardOptionBlock]=\"true\">\r\n      <h3>Contribution List <span style=\"font-size: 12px;\">Total Contributions ({{totalContributions}})</span></h3>\r\n      <div class=\"row\">\r\n        <!-- <div class=\"col-sm-5\">\r\n          <button id=\"transactions-sent\" type=\"button\" class=\"btn btn-primary btn-md btn-block waves-effect text-center m-b-20\" (click)=\"changeTable(1)\">Sent Transactions</button>\r\n        </div>\r\n        <div class=\"col-sm-2\"></div>\r\n        <div class=\"col-sm-5\">\r\n          <button id=\"transactions-not-sent\" type=\"button\" class=\"btn btn-md btn-block waves-effect text-center m-b-20\" (click)=\"changeTable(2)\">Transactions Not Sent</button>\r\n        </div> -->\r\n      </div>\r\n      <div id=\"transactions-sent-table\" class=\"table-responsive\">\r\n        <table class=\"table table-styling\">\r\n          <thead>\r\n            <tr class=\"table-primary table-row\">\r\n              <th class=\"table-head\">#</th>\r\n              <th class=\"table-head\">Email</th>\r\n              <th class=\"table-head\">Amount Invested</th>\r\n              <th class=\"table-head\">KYC Status</th>\r\n              <th class=\"table-head\">Tokens</th>\r\n              <th class=\"table-head\">Wallet Address</th>\r\n              <th class=\"table-head\">Transactions</th>\r\n              <th class=\"table-head\">Status</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let user of usersList; let i = index\">\r\n              <th class=\"table-td\" scope=\"row\">{{i + 1}}</th>\r\n              <td class=\"table-td\">{{user.Email}}</td>\r\n              <td class=\"table-td\">{{user.AmountInvestedUSD}}</td>\r\n              <td class=\"table-td\">{{user.isKYCVerified}}</td>\r\n              <td class=\"table-td\">{{user.totalTokens}}</td>\r\n              <td class=\"table-td\">{{user.EthAddress}}</td>\r\n              <td class=\"table-td\">\r\n                <a style=\"cursor:pointer;text-decoration: underline;\" data-toggle=\"modal\" data-target=\"#myModal\" (click)=\"openModal(user.Email)\">View <i class=\"fa fa-eye\"></i></a>\r\n              </td>\r\n              <td class=\"table-td\"><a style=\"cursor:pointer;text-decoration: underline;\" target=\"blank\" (click)=\"openLink(user.urlForTokens, user.allIncomingTransactions.length)\">View Status <i class=\"fa fa-eye\"></i></a></td>\r\n            </tr>\r\n            <tr *ngIf=\"usersList.length == 0\">No Users found.</tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n      <div id=\"transactions-not-sent-table\" class=\"table-responsive\">\r\n        <table class=\"table table-styling\">\r\n          <thead>\r\n            <tr class=\"table-primary table-row\">\r\n              <th class=\"table-head\">#</th>\r\n              <th class=\"table-head\">Email</th>\r\n              <th class=\"table-head\">Amount Invested</th>\r\n              <th class=\"table-head\">Tokens</th>\r\n              <th class=\"table-head\">Wallet Address</th>\r\n              <th class=\"table-head\">Transactions</th>\r\n              <th class=\"table-head\">Reason</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let user of usersNotSentList; let i = index\">\r\n              <th class=\"table-td\" scope=\"row\">{{i + 1}}</th>\r\n              <td class=\"table-td\">{{user.Email}}</td>\r\n              <td class=\"table-td\">{{user.AmountInvestedUSD}}</td>\r\n              <td class=\"table-td\">{{user.totalTokens}}</td>\r\n              <td class=\"table-td\">{{user.EthAddress}}</td>\r\n              <td class=\"table-td\">\r\n                <a style=\"cursor:pointer;text-decoration: underline;\" data-toggle=\"modal\" data-target=\"#myModal\" (click)=\"openModal(user.Email)\">View <i class=\"fa fa-eye\"></i></a>\r\n              </td>\r\n              <td class=\"table-td\">{{user.Reason}}</td>\r\n            </tr>\r\n            <tr *ngIf=\"usersNotSentList.length == 0\">No Users found.</tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </app-card>\r\n    <!-- Table header styling table end -->\r\n  </div>\r\n</div>\r\n<div class=\"row\" id=\"transactiondiv\" style=\"display:none\">\r\n  <div class=\"col-md-12\">\r\n    <app-card [classHeader]=\"true\" [blockClass]=\"'table-border-style'\" [cardOptionBlock]=\"true\">\r\n      <div>\r\n        <span style=\"cursor:pointer\" (click)=\"back()\">\r\n          <i class=\"fa fa-arrows-h\"></i>\r\n        </span>\r\n      </div>\r\n      <h1 class=\"my-head\">User Transactions</h1>\r\n      <div class=\"table-responsive\">\r\n        <table class=\"table table-styling\">\r\n          <thead>\r\n            <tr class=\"table-primary\">\r\n              <th>#</th>\r\n              <th>Transaction Hash</th>\r\n              <th>Transaction Type</th>\r\n              <th>Amount Invested</th>\r\n              <th>Rate</th>\r\n              <th>Bonus</th>\r\n              <th>IFC Tokens</th>\r\n              <th>Total Tokens</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let transaction of transactionsList; let i = index\">\r\n              <th scope=\"row\">{{i + 1}}</th>\r\n              <td>{{transaction.txHash}}</td>\r\n              <td>{{transaction.transactionType}}</td>\r\n              <td>{{transaction.amountRecieve}}</td>\r\n              <td>{{transaction.cryptoLiveRate}}</td>\r\n              <td>{{transaction.bonusCoins}}</td>\r\n              <td>{{transaction.totalCoins}}</td>\r\n              <td>{{transaction.totalCoins + transaction.bonusCoins}}</td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </app-card>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/theme/users/users.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#seo-card1 canvas,\n#seo-card2 canvas {\n  height: 150px !important;\n  border-bottom-right-radius: 5px;\n  border-bottom-left-radius: 5px; }\n  @media only screen and (max-width: 768px) {\n    #seo-card1 canvas,\n    #seo-card2 canvas {\n      padding-bottom: 30px; } }\n\n.coin-images {\n  width: 30px;\n  float: left; }\n\n.btn {\n  border: 1px solid black; }\n\n.table-td {\n  text-align: center !important; }\n\n.btn-primary {\n  background-color: #283891 !important; }\n\n.table-primary {\n  background-color: #283891 !important; }\n\n.table-row {\n  border: 3px solid #283891 !important; }\n\n.table-head {\n  background-color: #283891 !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/theme/users/users.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_takeWhile__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/takeWhile.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UsersComponent = (function () {
    function UsersComponent(_userService, router) {
        this._userService = _userService;
        this.router = router;
        this._alive = true;
        this.usersList = [];
        // @HostListener("window:scroll", [])
        // onScroll(): void {
        //   if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        //     // you're at the bottom of the page
        //     this.getUsersList();
        //   }
        // }
        this.transactionsList = [];
        this.usersNotSentList = [];
        this.totalContributions = 0;
    }
    UsersComponent.prototype.changeTable = function (val) {
        if (val == 1) {
            __WEBPACK_IMPORTED_MODULE_5_jquery__('#transactions-sent').addClass('btn-primary');
            __WEBPACK_IMPORTED_MODULE_5_jquery__('#transactions-not-sent').removeClass('btn-primary');
            __WEBPACK_IMPORTED_MODULE_5_jquery__('#transactions-sent-table').show();
            __WEBPACK_IMPORTED_MODULE_5_jquery__('#transactions-not-sent-table').hide();
        }
        else {
            __WEBPACK_IMPORTED_MODULE_5_jquery__('#transactions-not-sent').addClass('btn-primary');
            __WEBPACK_IMPORTED_MODULE_5_jquery__('#transactions-sent').removeClass('btn-primary');
            __WEBPACK_IMPORTED_MODULE_5_jquery__('#transactions-sent-table').hide();
            __WEBPACK_IMPORTED_MODULE_5_jquery__('#transactions-not-sent-table').show();
        }
    };
    UsersComponent.prototype.ngOnInit = function () {
        __WEBPACK_IMPORTED_MODULE_5_jquery__('#transactions-sent-table').show();
        __WEBPACK_IMPORTED_MODULE_5_jquery__('#transactions-not-sent-table').hide();
        this.userObject = JSON.parse(localStorage.getItem('userObject'));
        if (this.userObject == null || this.userObject === undefined) {
            this.router.navigateByUrl('/login');
        }
        else {
            this.getUsersList();
        }
    };
    UsersComponent.prototype.ngAfterViewInit = function () {
    };
    UsersComponent.prototype.openModal = function (userId) {
        console.log(userId);
        __WEBPACK_IMPORTED_MODULE_5_jquery__('#userdiv').hide();
        var user_obj = this.usersList.find(function (x) { return x.Email == userId; });
        if (user_obj) {
            this.transactionsList = user_obj.allIncomingTransactions;
        }
        else {
            var user_obj = this.usersNotSentList.find(function (x) { return x.Email == userId; });
            this.transactionsList = user_obj.allIncomingTransactions;
        }
        __WEBPACK_IMPORTED_MODULE_5_jquery__('#transactiondiv').show();
    };
    UsersComponent.prototype.back = function () {
        __WEBPACK_IMPORTED_MODULE_5_jquery__('#transactiondiv').hide();
        __WEBPACK_IMPORTED_MODULE_5_jquery__('#userdiv').show();
    };
    UsersComponent.prototype.getUsersList = function () {
        var _this = this;
        this._userService.getUsersList(this.userObject.token, this.usersList.length)
            .subscribe(function (response) {
            _this.totalContributions = response.allUsers.length;
            for (var i = 0; i < response.allUsers.length; i++) {
                if (response.allUsers[i].isKYCVerified == '0') {
                    response.allUsers[i].isKYCVerified = "Not Submitted";
                }
                else if (response.allUsers[i].isKYCVerified == '1') {
                    response.allUsers[i].isKYCVerified = "Submitted";
                }
                else if (response.allUsers[i].isKYCVerified == '2') {
                    response.allUsers[i].isKYCVerified = "Verified";
                }
                else if (response.allUsers[i].isKYCVerified == '-1') {
                    response.allUsers[i].isKYCVerified = "Blocked";
                }
                _this.usersList.push(response.allUsers[i]);
            }
        });
    };
    UsersComponent.prototype.openLink = function (urlForTokens, isKYCVerified) {
        if (isKYCVerified > 0) {
            window.open(urlForTokens, '_blank');
        }
    };
    UsersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'user-component',
            template: __webpack_require__("../../../../../src/app/theme/users/users.component.html"),
            styles: [__webpack_require__("../../../../../src/app/theme/users/users.component.scss"), __webpack_require__("../../../../../src/assets/icon/icofont/css/icofont.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["trigger"])('fadeInOutTranslate', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["transition"])(':enter', [
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({ opacity: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["animate"])('400ms ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({ opacity: 1 }))
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["transition"])(':leave', [
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({ transform: 'translate(0)' }),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["animate"])('400ms ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({ opacity: 0 }))
                    ])
                ])
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"]])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "../../../../../src/app/theme/users/users.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersModule", function() { return UsersModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__users_component__ = __webpack_require__("../../../../../src/app/theme/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__users_routing_module__ = __webpack_require__("../../../../../src/app/theme/users/users-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_chartjs__ = __webpack_require__("../../../../angular2-chartjs/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_chartjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_chartjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_notifications__ = __webpack_require__("../../../../angular2-notifications/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_modal__ = __webpack_require__("../../../../ng2-modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ng2_modal__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var UsersModule = (function () {
    function UsersModule() {
    }
    UsersModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__users_routing_module__["a" /* UsersRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_5_angular2_chartjs__["ChartModule"],
                __WEBPACK_IMPORTED_MODULE_8_ng2_modal__["ModalModule"],
                __WEBPACK_IMPORTED_MODULE_7__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6_angular2_notifications__["b" /* SimpleNotificationsModule */].forRoot()
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__users_component__["a" /* UsersComponent */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__users_component__["a" /* UsersComponent */]]
        })
    ], UsersModule);
    return UsersModule;
}());



/***/ })

});
//# sourceMappingURL=users.module.chunk.js.map