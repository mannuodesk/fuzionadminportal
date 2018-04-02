webpackJsonp(["contract.module"],{

/***/ "../../../../../src/app/theme/contract/contract-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContractRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contract_component__ = __webpack_require__("../../../../../src/app/theme/contract/contract.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__contract_component__["a" /* ContractComponent */],
        data: {
            title: 'users',
            icon: 'icon-home',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
            status: false
        }
    }
];
var ContractRoutingModule = (function () {
    function ContractRoutingModule() {
    }
    ContractRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
        })
    ], ContractRoutingModule);
    return ContractRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/theme/contract/contract.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-3\"></div>\r\n  <div class=\"col-md-6 block\">\r\n    <app-card [headerContent]=\"'Lorem ipsum dolor sit amet, consectetur adipisicing elit'\" [cardOptionBlock]=\"true\">\r\n      <h1 class=\"my-head\">Private Sale</h1>\r\n      <div class=\"form-group\">\r\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"ethAddress\" placeholder=\"Ethereum Address\"/>\r\n      </div>\r\n      <small id=\"ethAddress\" class=\"error\">\r\n        Eth Address is Required.\r\n      </small>\r\n      <div class=\"form-group\">\r\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"usdAmount\" placeholder=\"USD Amount\"/>\r\n      </div>\r\n      <small id=\"usdAmount\" class=\"error\">\r\n        USD Amount is Required.\r\n      </small>\r\n      <div class=\"form-holder\">\r\n        <div class=\"col-md-12\">\r\n          <button type=\"submit\" class=\"btn btn-primary m-b-0 col-md-12\" style=\"margin-top:40px;\" (click)=\"privateSale()\">Submit</button>\r\n        </div>\r\n      </div>\r\n    </app-card>\r\n  </div>\r\n</div>\r\n<div id=\"snackbar\"></div>"

/***/ }),

/***/ "../../../../../src/app/theme/contract/contract.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#seo-card1 canvas,\n#seo-card2 canvas {\n  height: 150px !important;\n  border-bottom-right-radius: 5px;\n  border-bottom-left-radius: 5px; }\n  @media only screen and (max-width: 768px) {\n    #seo-card1 canvas,\n    #seo-card2 canvas {\n      padding-bottom: 30px; } }\n\n.coin-images {\n  width: 30px;\n  float: left; }\n\n.form-holder {\n  width: 90%;\n  margin: 0 auto; }\n\n.block .card {\n  height: 340px; }\n\n.errors {\n  display: block; }\n\n.error {\n  display: none;\n  color: red; }\n\n#error-text {\n  text-align: center;\n  color: red; }\n\n#success-div {\n  text-align: center;\n  color: green; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/theme/contract/contract.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContractComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_takeWhile__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/takeWhile.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_smart_contract_service__ = __webpack_require__("../../../../../src/services/smart.contract.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__toast__ = __webpack_require__("../../../../../src/app/theme/toast.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ContractComponent = (function () {
    function ContractComponent(_smartContractService, router) {
        this._smartContractService = _smartContractService;
        this.router = router;
        this._alive = true;
        this.pauseState = false;
        this.ethAddress = "";
        this.privateSaleFunction = false;
        this.no_of_transactions = 0;
        this.estimated_gas_price = 0;
        this.remaining_eth_balance = 0;
        this.transaction_link = "";
        this.toast = new __WEBPACK_IMPORTED_MODULE_6__toast__["a" /* Toast */]();
    }
    ContractComponent.prototype.ngOnInit = function () {
        this.userObject = JSON.parse(localStorage.getItem('userObject'));
        if (this.userObject == null || this.userObject === undefined) {
            this.router.navigateByUrl('/login');
        }
        else {
            /*this._smartContractService.getPauseStatusOfContract(this.userObject.token).takeWhile(() => this._alive).subscribe(response => {
              this.pauseState = response.data;
            });*/
        }
    };
    ContractComponent.prototype.ngAfterViewInit = function () {
    };
    ContractComponent.prototype.pauseUnPause = function () {
        this.pauseState = !this.pauseState;
        /*this._smartContractService.pauseUnPauseSmartContract(this.userObject.token, this.pauseState).takeWhile(() => this._alive).subscribe(response => {
          console.log(response);
        });*/
    };
    ContractComponent.prototype.privateSale = function () {
        if (this.privateSaleFunction == false) {
            __WEBPACK_IMPORTED_MODULE_3_jquery__(".error").hide();
            this.privateSaleFunction = true;
            console.log("Private Sale");
            var error;
            console.log(parseFloat(this.usdAmount));
            if (this.usdAmount === undefined || parseFloat(this.usdAmount) <= 0 || this.usdAmount == "" || this.usdAmount == null) {
                error = true;
                __WEBPACK_IMPORTED_MODULE_3_jquery__("#usdAmount").show();
            }
            if (this.ethAddress === undefined || this.ethAddress == '' || this.ethAddress == null || this.ethAddress.trim() == "") {
                error = true;
                __WEBPACK_IMPORTED_MODULE_3_jquery__("#ethAddress").show();
            }
            if (error == true) {
                this.privateSaleFunction = false;
                return;
            }
            if (this.usdAmount !== undefined && this.usdAmount > 0 && this.usdAmount != null
                && this.ethAddress !== undefined && this.ethAddress != "" && this.ethAddress != null
                && this.ethAddress.trim() != "") {
            }
        }
    };
    ContractComponent.prototype.closeModal = function () {
        __WEBPACK_IMPORTED_MODULE_3_jquery__('.preloader3').hide();
        __WEBPACK_IMPORTED_MODULE_3_jquery__('#main-div').hide();
        __WEBPACK_IMPORTED_MODULE_3_jquery__('#error-div').hide();
        __WEBPACK_IMPORTED_MODULE_3_jquery__('#success-div').hide();
    };
    ContractComponent.prototype.estimate = function () {
        __WEBPACK_IMPORTED_MODULE_3_jquery__('.preloader3').show();
        // this._smartContractService.getEstimatedPrice().subscribe(response => {
        //   $('.preloader3').hide();
        //   $('#main-div').show();
        //   console.log(response);
        //   this.no_of_transactions = response.totalContributionsForTransaction;
        //   this.estimated_gas_price = response.estimatedTotalGasPrice;
        //   this.remaining_eth_balance = parseFloat(response.ethBalanceRemaining);
        // }, err => {
        //   if (err) {
        //     $('.preloader3').hide();
        //     $('#error-div').show();
        //     var obj = JSON.parse(err._body);
        //     $("#error-text").text(obj.message);
        //   }
        // });
    };
    ContractComponent.prototype.initiate = function () {
        __WEBPACK_IMPORTED_MODULE_3_jquery__('.preloader3').show();
        __WEBPACK_IMPORTED_MODULE_3_jquery__('#btns-div').hide();
        __WEBPACK_IMPORTED_MODULE_3_jquery__('#success-div').hide();
        // this._smartContractService.initiateTransaction().subscribe(response => {
        //   console.log(response);
        //   $('#success-text').text(response.message);
        //   this.transaction_link = response.transactionsUrl;
        //   this._smartContractService.getEstimatedPrice().subscribe(response => {
        //     this.no_of_transactions = response.totalContributionsForTransaction;
        //   }, err => {
        //     if (err) {
        //       this.no_of_transactions = 0;
        //     }
        //   });
        //   $('#success-div').show();
        //   $('.preloader3').hide();
        //   $('#btns-div').show();
        // }, err => {
        //   if (err) {
        //     $('#btns-div').show();
        //     $('.preloader3').hide();
        //     $('#error-div').show();
        //     var obj = JSON.parse(err._body);
        //     $("#error-text").text(obj.message);
        //   }
        // });
    };
    ContractComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'contract-component',
            template: __webpack_require__("../../../../../src/app/theme/contract/contract.component.html"),
            styles: [__webpack_require__("../../../../../src/app/theme/contract/contract.component.scss"), __webpack_require__("../../../../../src/assets/icon/icofont/css/icofont.scss")],
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
            providers: [__WEBPACK_IMPORTED_MODULE_4__services_smart_contract_service__["a" /* SmartContractService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_smart_contract_service__["a" /* SmartContractService */], __WEBPACK_IMPORTED_MODULE_5__angular_router__["Router"]])
    ], ContractComponent);
    return ContractComponent;
}());



/***/ }),

/***/ "../../../../../src/app/theme/contract/contract.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContractModule", function() { return ContractModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_chartjs__ = __webpack_require__("../../../../angular2-chartjs/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_chartjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_chartjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_notifications__ = __webpack_require__("../../../../angular2-notifications/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__contract_component__ = __webpack_require__("../../../../../src/app/theme/contract/contract.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__contract_routing_module__ = __webpack_require__("../../../../../src/app/theme/contract/contract-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_ui_switch__ = __webpack_require__("../../../../ng2-ui-switch/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var ContractModule = (function () {
    function ContractModule() {
    }
    ContractModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_6__contract_routing_module__["a" /* ContractRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_3_angular2_chartjs__["ChartModule"],
                __WEBPACK_IMPORTED_MODULE_7_ng2_ui_switch__["a" /* UiSwitchModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_4_angular2_notifications__["b" /* SimpleNotificationsModule */].forRoot()
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_5__contract_component__["a" /* ContractComponent */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__contract_component__["a" /* ContractComponent */]]
        })
    ], ContractModule);
    return ContractModule;
}());



/***/ }),

/***/ "../../../../../src/services/smart.contract.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SmartContractService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_url__ = __webpack_require__("../../../../../src/services/service.url.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SmartContractService = (function () {
    function SmartContractService(http) {
        this.http = http;
        this.serviceUrl = new __WEBPACK_IMPORTED_MODULE_3__service_url__["a" /* ServiceUrl */]();
    }
    SmartContractService.prototype.getPauseStatusOfContract = function (token) {
        var data;
        data = {};
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json; charset=UTF-8');
        headers.append("authorization", "JWT " + token);
        return this.http.post(this.serviceUrl.baseUrl + "admin/getPauseState", data, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    SmartContractService.prototype.pauseUnPauseSmartContract = function (token, value) {
        var data;
        data = { value: value };
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("authorization", "JWT " + token);
        headers.append('Content-Type', 'application/json; charset=UTF-8');
        return this.http.post(this.serviceUrl.baseUrl + "admin/pauseUnPause", data, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    SmartContractService.prototype.privateSale = function (token, ethAddress, usdAmount, bonus) {
        var data;
        data = { ethAddress: ethAddress, userUSDBalance: usdAmount, bonus: bonus };
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("authorization", "JWT " + token);
        headers.append('Content-Type', 'application/json; charset=UTF-8');
        return this.http.post(this.serviceUrl.baseUrl + "admin/privatesale", data, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    SmartContractService.prototype.getEstimatedPrice = function () {
        return this.http.get(this.serviceUrl.baseUrl + "admin/estimateGasPrice")
            .map(function (res) { return res.json(); });
    };
    SmartContractService.prototype.initiateTransaction = function () {
        return this.http.get(this.serviceUrl.baseUrl + "admin/initiateTransactions")
            .map(function (res) { return res.json(); });
    };
    SmartContractService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], SmartContractService);
    return SmartContractService;
}());



/***/ })

});
//# sourceMappingURL=contract.module.chunk.js.map