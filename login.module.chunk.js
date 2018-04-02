webpackJsonp(["login.module"],{

/***/ "../../../../../src/app/theme/login/login-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_component__ = __webpack_require__("../../../../../src/app/theme/login/login.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__login_component__["a" /* LoginComponent */],
        data: {
            title: 'Login'
        }
    }
];
var LoginRoutingModule = (function () {
    function LoginRoutingModule() {
    }
    LoginRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
        })
    ], LoginRoutingModule);
    return LoginRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/theme/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"snackbar\"></div>\r\n<section class=\"login p-fixed d-flex text-center MyLogin common-img-bg\">\r\n  <!-- Container-fluid starts -->\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-12\">\r\n        <!-- Authentication card start -->\r\n        <div class=\"login-card loginDiv card-block auth-body mr-auto ml-auto\">\r\n          <form class=\"md-float-material\">\r\n            <div class=\"text-center\">\r\n\r\n              <img src=\"assets/images/nn-logo-simple.png\" class=\"nn-logo\" alt=\"Amicorum\">\r\n            </div>\r\n            <div class=\"auth-box\">\r\n              <div class=\"row m-b-20\">\r\n                <div class=\"col-md-12\">\r\n                  <h3 class=\"my-head uppercase no-bottom\">login</h3>\r\n                </div>\r\n              </div>\r\n              <hr/>\r\n              <div class=\"input-group\">\r\n                <input type=\"email\" id=\"username\" class=\"form-control\" name=\"username\" [(ngModel)]=\"username\" placeholder=\"Your Email Address\">\r\n                <span class=\"md-line\"></span>\r\n              </div>\r\n              <div class=\"input-group\">\r\n                <input type=\"password\" id=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"password\" placeholder=\"Password\">\r\n                <span class=\"md-line\"></span>\r\n              </div>\r\n              <div class=\"row m-t-25 text-left\">\r\n                <div class=\"col-12\">\r\n                  <!--  <div class=\"checkbox-fade fade-in-primary d-\">\r\n                    <label>\r\n                      <input type=\"checkbox\" value=\"\">\r\n                      <span class=\"cr\"><i class=\"cr-icon fa fa-check txt-primary\"></i></span>\r\n                      <span class=\"text-inverse\">Remember me</span>\r\n                    </label>\r\n                  </div> -->\r\n                  <div class=\"forgot-phone text-right f-right\">\r\n                    <a style=\"cursor:pointer\" (click)=\"toggleForgotPassword()\" class=\"text-right f-w-600 text-inverse\"> Forgot Password?</a>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"preloader3 loader-block login-loader\">\r\n                <div _ngcontent-c10=\"\" class=\"circ1\"></div>\r\n                <div _ngcontent-c10=\"\" class=\"circ2\"></div>\r\n                <div _ngcontent-c10=\"\" class=\"circ3\"></div>\r\n                <div _ngcontent-c10=\"\" class=\"circ4\"></div>\r\n              </div>\r\n\r\n              <div class=\"row m-t-30\">\r\n                <div class=\"col-md-12 btn-div\">\r\n                  <button type=\"button\" class=\"btn btn-primary btn-md btn-block waves-effect text-center m-b-20 nn-btn\" (keydown)=\"loginWithEnter($event)\"\r\n                    (click)=\"login()\">Login</button>\r\n                </div>\r\n              </div>\r\n              <hr/>\r\n              <!--    <div class=\"row\">\r\n                <div class=\"col-md-10\">\r\n                  <p class=\"text-inverse text-left m-b-0\">Thank you and enjoy our website.</p>\r\n                  <p class=\"text-inverse text-left\"><b>Your Authentication Team</b></p>\r\n                </div>\r\n                <div class=\"col-md-2\">\r\n                  <img src=\"assets/images/auth/Logo-small-bottom.png\" alt=\"small-logo.png\">\r\n                </div>\r\n              </div> -->\r\n\r\n            </div>\r\n          </form>\r\n          <!-- end of form -->\r\n        </div>\r\n        <!-- Authentication card end -->\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n        <div class=\"login-card two-fa card-block auth-body mr-auto ml-auto\">\r\n          <form class=\"md-float-material\">\r\n            <div class=\"text-center\">\r\n\r\n              <img src=\"assets/images/nn-logo-simple.png\" class=\"nn-logo-forgot\"  alt=\"SMRT\">\r\n            </div>\r\n            <div class=\"auth-box\">\r\n              <div class=\"row m-b-20\">\r\n                <div class=\"col-md-12\">\r\n                  <h3 class=\"my-head uppercase no-bottom\">2FA Authentication</h3>\r\n                </div>\r\n              </div>\r\n              <hr/>\r\n\r\n              <div class=\"input-group\">\r\n                <input type=\"text\" id=\"twoFaInput\" class=\"form-control\" name=\"twoFaInput\" [(ngModel)]=\"twoFaInput\" placeholder=\"Enter your 2FA Code\">\r\n                <span class=\"md-line\"></span>\r\n              </div>\r\n\r\n              <div class=\"preloader3 loader-block twoFa-loader\">\r\n                <div _ngcontent-c10=\"\" class=\"circ1\"></div>\r\n                <div _ngcontent-c10=\"\" class=\"circ2\"></div>\r\n                <div _ngcontent-c10=\"\" class=\"circ3\"></div>\r\n                <div _ngcontent-c10=\"\" class=\"circ4\"></div>\r\n              </div>\r\n\r\n              <div class=\"row m-t-30\">\r\n                <div class=\"col-md-12 btn-div\">\r\n                  <button type=\"button\" class=\"btn btn-primary btn-md btn-block waves-effect text-center m-b-20  nn-btn\" (click)=\"authenticate2Fa()\">Authenticate</button>\r\n                </div>\r\n              </div>\r\n              <hr/>\r\n              <!--    <div class=\"row\">\r\n                  <div class=\"col-md-10\">\r\n                    <p class=\"text-inverse text-left m-b-0\">Thank you and enjoy our website.</p>\r\n                    <p class=\"text-inverse text-left\"><b>Your Authentication Team</b></p>\r\n                  </div>\r\n                  <div class=\"col-md-2\">\r\n                    <img src=\"assets/images/auth/Logo-small-bottom.png\" alt=\"small-logo.png\">\r\n                  </div>\r\n                </div> -->\r\n\r\n            </div>\r\n          </form>\r\n          <!-- end of form -->\r\n        </div>\r\n\r\n        <div class=\"login-card forgot-password card-block auth-body mr-auto ml-auto\">\r\n          <form class=\"md-float-material\">\r\n            <div class=\"text-center\">\r\n\r\n              <img src=\"assets/images/nn-logo-simple.png\" class=\"nn-logo-forgot\" alt=\"Amicorum\">\r\n            </div>\r\n            <div class=\"auth-box\">\r\n              <div class=\"row m-b-20\">\r\n                <div class=\"col-md-12\">\r\n                  <h3 class=\"my-head uppercase no-bottom\">Forgot Password</h3>\r\n                </div>\r\n              </div>\r\n              <hr/>\r\n\r\n              <div class=\"input-group\">\r\n                <input type=\"text\" id=\"twoFaInput4\" class=\"form-control\" name=\"twoFaInput\" [(ngModel)]=\"Email\" placeholder=\"Enter your Email\">\r\n                <span class=\"md-line\"></span>\r\n              </div>\r\n\r\n              <div class=\"preloader3 loader-block email-loader\">\r\n                <div _ngcontent-c10=\"\" class=\"circ1\"></div>\r\n                <div _ngcontent-c10=\"\" class=\"circ2\"></div>\r\n                <div _ngcontent-c10=\"\" class=\"circ3\"></div>\r\n                <div _ngcontent-c10=\"\" class=\"circ4\"></div>\r\n              </div>\r\n\r\n              <div class=\"row m-t-30\">\r\n                <div class=\"col-md-12 email-btn-div\">\r\n                  <button type=\"button\" class=\"btn btn-primary btn-md btn-block waves-effect text-center m-b-20 nn-btn\" (click)=\"sendEmail()\">Next</button>\r\n                </div>\r\n              </div>\r\n              <div class=\"row m-t-25 text-left\">\r\n                <div class=\"col-12\">\r\n                  <!--  <div class=\"checkbox-fade fade-in-primary d-\">\r\n                    <label>\r\n                      <input type=\"checkbox\" value=\"\">\r\n                      <span class=\"cr\"><i class=\"cr-icon fa fa-check txt-primary\"></i></span>\r\n                      <span class=\"text-inverse\">Remember me</span>\r\n                    </label>\r\n                  </div> -->\r\n                  <div class=\"forgot-phone text-right f-right\">\r\n                    <a style=\"cursor:pointer\" (click)=\"backToLogin()\" class=\"text-right f-w-600 text-inverse\">Back to Login</a>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <hr/>\r\n            </div>\r\n          </form>\r\n          <!-- end of form -->\r\n        </div>\r\n\r\n        <div class=\"login-card forgot-password-confirm card-block auth-body mr-auto ml-auto\">\r\n          <form class=\"md-float-material\">\r\n            <div class=\"text-center\">\r\n\r\n              <img src=\"assets/images/myLogo.png\" alt=\"Amicorum\">\r\n            </div>\r\n            <div class=\"auth-box\">\r\n              <div class=\"row m-b-20\">\r\n                <div class=\"col-md-12\">\r\n                  <h3 class=\"my-head uppercase no-bottom\">Forgot Password</h3>\r\n                </div>\r\n              </div>\r\n              <hr/>\r\n\r\n              <div class=\"input-group\">\r\n                <input type=\"text\" id=\"twoFaInput1\" class=\"form-control\" name=\"twoFaInput\" [(ngModel)]=\"Code\" placeholder=\"Enter your Code\">\r\n                <span class=\"md-line\"></span>\r\n              </div>\r\n              <small id=\"code-password-error\" class=\"text-danger \">\r\n                Code can't be blank\r\n              </small>\r\n              <div class=\"input-group\">\r\n                <input type=\"password\" id=\"twoFaInput2\" class=\"form-control\" name=\"twoFaInput2\" [(ngModel)]=\"Password\" placeholder=\"Enter your New Password\">\r\n                <span class=\"md-line\"></span>\r\n              </div>\r\n              <small id=\"new-password-error\" class=\"text-danger \">\r\n                New Password can't be blank\r\n              </small>\r\n              <div class=\"input-group\">\r\n                <input type=\"password\" id=\"twoFaInput3\" class=\"form-control\" name=\"twoFaInput3\" [(ngModel)]=\"ConfirmPassword\" placeholder=\"Enter your Confirm Password\">\r\n                <span class=\"md-line\"></span>\r\n              </div>\r\n              <small id=\"confirm-password-error\" class=\"text-danger \">\r\n                Confirm Password can't be blank\r\n              </small>\r\n              <small id=\"confirm-password-password-error\" class=\"text-danger \">\r\n                Password and Confirm Password are not same\r\n              </small>\r\n              <div class=\"preloader3 loader-block forgot-password-loader\">\r\n                <div _ngcontent-c10=\"\" class=\"circ1\"></div>\r\n                <div _ngcontent-c10=\"\" class=\"circ2\"></div>\r\n                <div _ngcontent-c10=\"\" class=\"circ3\"></div>\r\n                <div _ngcontent-c10=\"\" class=\"circ4\"></div>\r\n              </div>\r\n\r\n              <div class=\"row m-t-30\">\r\n                <div class=\"col-md-12 forgot-password-btn-div\">\r\n                  <button type=\"button\" class=\"btn btn-primary btn-md btn-block waves-effect text-center m-b-20\" (click)=\"verifyForgotPassword()\">Next</button>\r\n                </div>\r\n              </div>\r\n              <div class=\"row m-t-25 text-left\">\r\n                <div class=\"col-12\">\r\n                  <!--  <div class=\"checkbox-fade fade-in-primary d-\">\r\n                    <label>\r\n                      <input type=\"checkbox\" value=\"\">\r\n                      <span class=\"cr\"><i class=\"cr-icon fa fa-check txt-primary\"></i></span>\r\n                      <span class=\"text-inverse\">Remember me</span>\r\n                    </label>\r\n                  </div> -->\r\n                  <div class=\"forgot-phone text-right f-right\">\r\n                    <a style=\"cursor:pointer\" (click)=\"backToLogin2()\" class=\"text-right f-w-600 text-inverse\">Back to Login</a>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <hr/>\r\n            </div>\r\n          </form>\r\n          <!-- end of form -->\r\n        </div>\r\n      </div>\r\n      <!-- end of col-sm-12 -->\r\n    </div>\r\n    <!-- end of row -->\r\n  </div>\r\n  <!-- end of container-fluid -->\r\n</section>"

/***/ }),

/***/ "../../../../../src/app/theme/login/login.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".login-loader, .twoFa-loader, .forgot-password-loader, .email-loader {\n  width: 65px;\n  margin: 40px auto;\n  height: 20px;\n  display: none; }\n\n.two-fa {\n  display: none; }\n\n.forgot-password {\n  display: none; }\n\n.forgot-password-confirm {\n  display: none; }\n\n.text-danger {\n  display: none; }\n\n.nn-logo {\n  position: absolute;\n  top: -29px;\n  left: 41%;\n  width: 15%; }\n\n.nn-btn {\n  background-color: #f6c801;\n  border: none;\n  color: black; }\n\n.nn-logo-forgot {\n  position: absolute;\n  top: -29px;\n  left: 41%;\n  width: 15%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/theme/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_admin_service__ = __webpack_require__("../../../../../src/services/admin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_takeWhile__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/takeWhile.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__toast__ = __webpack_require__("../../../../../src/app/theme/toast.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = (function () {
    function LoginComponent(AdminService, router) {
        this.AdminService = AdminService;
        this.router = router;
        this._alive = true;
        this.Email = "";
        this.Code = "";
        this.Password = "";
        this.ConfirmPassword = "";
        this.toast = new __WEBPACK_IMPORTED_MODULE_4__toast__["a" /* Toast */]();
    }
    LoginComponent.prototype.ngOnInit = function () {
        __WEBPACK_IMPORTED_MODULE_3_jquery__('.forgot-password-confirm').hide();
    };
    LoginComponent.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }; // End of Validate with Email
    LoginComponent.prototype.loginWithEnter = function (event) {
        if (event.keyCode == 13) {
            this.login();
        }
    }; // End of Login with Enter
    LoginComponent.prototype.login = function () {
        this.username = __WEBPACK_IMPORTED_MODULE_3_jquery__["trim"](this.username);
        var error;
        __WEBPACK_IMPORTED_MODULE_3_jquery__(".form-control").removeClass("errors");
        if (this.username == undefined || this.username.length == 0) {
            error = true;
            __WEBPACK_IMPORTED_MODULE_3_jquery__("#username").addClass("errors");
        }
        else {
            if (!this.validateEmail(this.username)) {
                error = true;
                __WEBPACK_IMPORTED_MODULE_3_jquery__("#username").addClass("errors");
            }
        }
        if (this.password == undefined) {
            error = true;
            __WEBPACK_IMPORTED_MODULE_3_jquery__("#password").addClass("errors");
        }
        if (error) {
        }
        else {
            __WEBPACK_IMPORTED_MODULE_3_jquery__(".login-loader").show();
            // $(".btn-div").hide();
            __WEBPACK_IMPORTED_MODULE_3_jquery__(".two-fa").show();
            __WEBPACK_IMPORTED_MODULE_3_jquery__(".loginDiv").hide();
            var obj = {
                "user": {
                    "_id": "5ab8afb1c5f0fd0136d3023b",
                    "ETHWalleRecieverData": "0x492cc769000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000183561623861666231633566306664303133366433303233620000000000000000",
                    "ETHWalletFundRecieverAddress": "0xff0eb1aedd3faceb2af3750c2b5d46a5ee586600",
                    "EthAddress": "0xfbb1b73c4f0bda4f67dca266ce6ef42f520fbb98",
                    "BCHWalletRecieverAddress": "1AmbU4B26ER6eR9u76Nx55497gGvLjDfkQ",
                    "LTCWalletRecieverAddress": "LTwxkWgz87UjKkQD1Hkw6C2zRLzKx5nU8K",
                    "BTCWalletRecieverAddress": "19BT9TSEqg8Hcdjw6UKsUg6VTEtbrXySx4",
                    "Password": "$2a$10$y7qtipMd12VLM/9dMDA7NuF/iFmUnHQDuOT7ZgW.FtQi3qL7Pdr0.",
                    "__v": 0,
                    "allIncomingTransactions": [],
                    "UpdatedOnUTC": "2018-03-26T08:30:41.497Z",
                    "CreatedOnUTC": "2018-03-26T08:30:41.497Z",
                    "isTokenSent": false,
                    "Tokens": 0,
                    "AmountInvested": 0,
                    "selfieUrl": "",
                    "passportNumberUrl": "",
                    "passportNumber": "",
                    "identityCardNumberUrl": "",
                    "identityCardNumber": "",
                    "iskycVerified": "0",
                    "isEmailVerified": false,
                    "Role": 2,
                    "PhoneNumber": "",
                    "dob": "",
                    "lastName": "Smith",
                    "firstName": "Steve",
                    "countryCode": "",
                    "ip": "",
                    "countryName": "",
                    "address": "",
                    "Email": "stevesmith@hotmail.com"
                }, "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRhbmlhaWxtYXNAaG90bWFpbC5jb20iLCJ1c2VySUQiOiI1YWI4YWZiMWM1ZjBmZDAxMzZkMzAyM2IiLCJyb2xlIjoyLCJpYXQiOjE1MjI2NjU3MDR9.M8691WlxznLnTomFefveQJnjTw9OLTecnazHQA2oX9E"
            };
            localStorage.setItem('userObject', JSON.stringify(obj));
            // this.AdminService.loginUser(this.username, this.password).takeWhile(() => this._alive).subscribe(a => {
            //   if (a.code == 200) {
            //     $(".login-loader").hide();
            //     $(".btn-div").show();
            //     $(".two-fa").show();
            //     $(".loginDiv").hide();
            //     localStorage.setItem('userObject', JSON.stringify(a.data));
            //     this.userObject = a.data;
            //   }
            // }, err => {
            //   if (err) {
            //     var obj = JSON.parse(err._body)
            //     $("#snackbar").html(obj.message);
            //     this.toast.showToast();
            //     $(".login-loader").hide();
            //     $(".btn-div").show();
            //   }
            // });
        }
    }; // End of Login Authentication
    LoginComponent.prototype.toggleForgotPassword = function () {
        __WEBPACK_IMPORTED_MODULE_3_jquery__(".forgot-password").show();
        __WEBPACK_IMPORTED_MODULE_3_jquery__(".loginDiv").hide();
    };
    LoginComponent.prototype.sendEmail = function () {
        __WEBPACK_IMPORTED_MODULE_3_jquery__(".forgot-password").hide();
        __WEBPACK_IMPORTED_MODULE_3_jquery__(".forgot-password-confirm").show();
        // if (this.Email !== undefined && this.Email != "" && this.Email.trim() != "" && this.Email != null) {
        //   $(".email-loader").show();
        //   $(".email-btn-div").hide();
        //   this.AdminService.forgotPassword(this.Email).subscribe(response => {
        //     $(".forgot-password").hide();
        //     $(".forgot-password-confirm").show();
        //     $(".email-loader").hide();
        //   $(".email-btn-div").show();
        //   });
        // }
    };
    LoginComponent.prototype.verifyForgotPassword = function () {
        __WEBPACK_IMPORTED_MODULE_3_jquery__('.text-danger').hide();
        __WEBPACK_IMPORTED_MODULE_3_jquery__('#error').hide();
        if (this.Code === undefined || this.Code == null || this.Code == "" || this.Code.trim() == "") {
            __WEBPACK_IMPORTED_MODULE_3_jquery__('#code-password-error').show();
            return;
        }
        if (this.Password === undefined || this.Password == null || this.Password == "" || this.Password.trim() == "") {
            __WEBPACK_IMPORTED_MODULE_3_jquery__('#new-password-error').show();
            return;
        }
        if (this.ConfirmPassword === undefined || this.ConfirmPassword == null || this.ConfirmPassword == "" || this.ConfirmPassword.trim() == "") {
            __WEBPACK_IMPORTED_MODULE_3_jquery__('#confirm-password-error').show();
            return;
        }
        if (this.ConfirmPassword != this.Password) {
            __WEBPACK_IMPORTED_MODULE_3_jquery__('#confirm-password-password-error').show();
            return;
        }
        __WEBPACK_IMPORTED_MODULE_3_jquery__(".forgot-password-loader").show();
        __WEBPACK_IMPORTED_MODULE_3_jquery__(".forgot-password-btn-div").hide();
        // this.AdminService.verifyForgotPassword(this.Email, this.Code, this.Password).subscribe(response => {
        //   $(".forgot-password-confirm").hide();
        //   $(".loginDiv").show();
        //   $(".forgot-password-loader").hide();
        //   $(".forgot-password-btn-div").show();
        // });
    };
    LoginComponent.prototype.backToLogin = function () {
        __WEBPACK_IMPORTED_MODULE_3_jquery__(".forgot-password").hide();
        __WEBPACK_IMPORTED_MODULE_3_jquery__(".loginDiv").show();
    };
    LoginComponent.prototype.backToLogin2 = function () {
        __WEBPACK_IMPORTED_MODULE_3_jquery__(".forgot-password-confirm").hide();
        __WEBPACK_IMPORTED_MODULE_3_jquery__(".loginDiv").show();
    };
    LoginComponent.prototype.authenticate2Fa = function () {
        var error = false;
        __WEBPACK_IMPORTED_MODULE_3_jquery__(".form-control").removeClass("errors");
        if (this.twoFaInput == undefined) {
            error = true;
            __WEBPACK_IMPORTED_MODULE_3_jquery__("#twoFaInput").addClass("errors");
        }
        if (error) {
        }
        else {
            __WEBPACK_IMPORTED_MODULE_3_jquery__(".twoFa-loader").show();
            __WEBPACK_IMPORTED_MODULE_3_jquery__(".btn-div").hide();
            __WEBPACK_IMPORTED_MODULE_3_jquery__(".twoFa-loader").hide();
            __WEBPACK_IMPORTED_MODULE_3_jquery__(".btn-div").show();
            this.router.navigateByUrl('/admin/dashboard');
            // this.AdminService.authenticate(this.userObject.token, this.username, this.twoFaInput).takeWhile(() => this._alive).subscribe(a => {
            //   console.log(a);
            //   if (a.code == 200) {
            //     $(".twoFa-loader").hide();
            //     $(".btn-div").show();
            //     this.router.navigateByUrl('/admin/dashboard');
            //   }
            //   else {
            //     $(".twoFa-loader").hide();
            //     $(".btn-div").show();
            //     $("#snackbar").html(a.message);
            //     this.toast.showToast();
            //   }
            // }, err => {
            //   if (err) {
            //     var obj = JSON.parse(err._body)
            //     $("#snackbar").html(obj.message);
            //     this.toast.showToast();
            //     $(".login-loader").hide();
            //     $(".btn-div").show();
            //   }
            // })
        }
    }; // End of 2FA Authentication
    LoginComponent.prototype.ngOnDestroy = function () {
        this._alive = false;
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-basic-login',
            template: __webpack_require__("../../../../../src/app/theme/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/theme/login/login.component.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_admin_service__["a" /* AdminService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_admin_service__["a" /* AdminService */], __WEBPACK_IMPORTED_MODULE_5__angular_router__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/theme/login/login.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_component__ = __webpack_require__("../../../../../src/app/theme/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_routing_module__ = __webpack_require__("../../../../../src/app/theme/login/login-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var LoginModule = (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__login_routing_module__["a" /* LoginRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_6__angular_http__["c" /* HttpModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__login_component__["a" /* LoginComponent */]]
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ })

});
//# sourceMappingURL=login.module.chunk.js.map