webpackJsonp(["form-select.module"],{

/***/ "../../../../../src/app/shared/elements/select-option.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectOptionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var SelectOptionService = (function () {
    function SelectOptionService() {
    }
    SelectOptionService_1 = SelectOptionService;
    SelectOptionService.prototype.getCharacters = function () {
        return this.cloneOptions(SelectOptionService_1.PLAYER_ONE);
    };
    SelectOptionService.prototype.loadCharacters = function () {
        return this.loadOptions(SelectOptionService_1.PLAYER_ONE);
    };
    SelectOptionService.prototype.getCharactersWithDisabled = function () {
        var characters = this.cloneOptions(SelectOptionService_1.PLAYER_ONE);
        characters[1].disabled = true;
        characters[4].disabled = true;
        return characters;
    };
    SelectOptionService.prototype.getCountries = function () {
        return this.cloneOptions(SelectOptionService_1.COUNTRIES);
    };
    SelectOptionService.prototype.loadCountries = function () {
        return this.loadOptions(SelectOptionService_1.COUNTRIES);
    };
    SelectOptionService.prototype.loadOptions = function (options) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */](function (obs) {
            setTimeout(function () {
                obs.next(_this.cloneOptions(options));
                obs.complete();
            }, 5000);
        });
    };
    SelectOptionService.prototype.cloneOptions = function (options) {
        return options.map(function (option) { return ({ value: option.value, label: option.label }); });
    };
    SelectOptionService.PLAYER_ONE = [
        { value: '0', label: 'Alabama' },
        { value: '1', label: 'Wyoming' },
        { value: '2', label: 'Coming' },
        { value: '3', label: 'Henry Die' },
        { value: '4', label: 'John Doe' }
    ];
    SelectOptionService.COUNTRIES = [
        { value: 'AF', label: 'Afghanistan' },
        { value: 'AX', label: 'Åland Islands' },
        { value: 'AL', label: 'Albania' },
        { value: 'DZ', label: 'Algeria' },
        { value: 'AS', label: 'American Samoa' },
        { value: 'AD', label: 'Andorra' },
        { value: 'AO', label: 'Angola' },
        { value: 'AI', label: 'Anguilla' },
        { value: 'AQ', label: 'Antarctica' },
        { value: 'AG', label: 'Antigua and Barbuda' },
        { value: 'AR', label: 'Argentina' },
        { value: 'AM', label: 'Armenia' },
        { value: 'AW', label: 'Aruba' },
        { value: 'AU', label: 'Australia' },
        { value: 'AT', label: 'Austria' },
        { value: 'AZ', label: 'Azerbaijan' },
        { value: 'BS', label: 'Bahamas' },
        { value: 'BH', label: 'Bahrain' },
        { value: 'BD', label: 'Bangladesh' },
        { value: 'BB', label: 'Barbados' },
        { value: 'BY', label: 'Belarus' },
        { value: 'BE', label: 'Belgium' },
        { value: 'BZ', label: 'Belize' },
        { value: 'BJ', label: 'Benin' },
        { value: 'BM', label: 'Bermuda' },
        { value: 'BT', label: 'Bhutan' },
        { value: 'BO', label: 'Bolivia, Plurinational State of' },
        { value: 'BA', label: 'Bosnia and Herzegovina' },
        { value: 'BW', label: 'Botswana' },
        { value: 'BV', label: 'Bouvet Island' },
        { value: 'BR', label: 'Brazil' },
        { value: 'IO', label: 'British Indian Ocean Territory' },
        { value: 'BN', label: 'Brunei Darussalam' },
        { value: 'BG', label: 'Bulgaria' },
        { value: 'BF', label: 'Burkina Faso' },
        { value: 'BI', label: 'Burundi' },
        { value: 'KH', label: 'Cambodia' },
        { value: 'CM', label: 'Cameroon' },
        { value: 'CA', label: 'Canada' },
        { value: 'CV', label: 'Cape Verde' },
        { value: 'KY', label: 'Cayman Islands' },
        { value: 'CF', label: 'Central African Republic' },
        { value: 'TD', label: 'Chad' },
        { value: 'CL', label: 'Chile' },
        { value: 'CN', label: 'China' },
        { value: 'CX', label: 'Christmas Island' },
        { value: 'CC', label: 'Cocos (Keeling) Islands' },
        { value: 'CO', label: 'Colombia' },
        { value: 'KM', label: 'Comoros' },
        { value: 'CG', label: 'Congo' },
        { value: 'CD', label: 'Congo, the Democratic Republic of the' },
        { value: 'CK', label: 'Cook Islands' },
        { value: 'CR', label: 'Costa Rica' },
        { value: 'CI', label: 'Côte d\'Ivoire' },
        { value: 'HR', label: 'Croatia' },
        { value: 'CU', label: 'Cuba' },
        { value: 'CY', label: 'Cyprus' },
        { value: 'CZ', label: 'Czech Republic' },
        { value: 'DK', label: 'Denmark' },
        { value: 'DJ', label: 'Djibouti' },
        { value: 'DM', label: 'Dominica' },
        { value: 'DO', label: 'Dominican Republic' },
        { value: 'EC', label: 'Ecuador' },
        { value: 'EG', label: 'Egypt' },
        { value: 'SV', label: 'El Salvador' },
        { value: 'GQ', label: 'Equatorial Guinea' },
        { value: 'ER', label: 'Eritrea' },
        { value: 'EE', label: 'Estonia' },
        { value: 'ET', label: 'Ethiopia' },
        { value: 'FK', label: 'Falkland Islands (Malvinas)' },
        { value: 'FO', label: 'Faroe Islands' },
        { value: 'FJ', label: 'Fiji' },
        { value: 'FI', label: 'Finland' },
        { value: 'FR', label: 'France' },
        { value: 'GF', label: 'French Guiana' },
        { value: 'PF', label: 'French Polynesia' },
        { value: 'TF', label: 'French Southern Territories' },
        { value: 'GA', label: 'Gabon' },
        { value: 'GM', label: 'Gambia' },
        { value: 'GE', label: 'Georgia' },
        { value: 'DE', label: 'Germany' },
        { value: 'GH', label: 'Ghana' },
        { value: 'GI', label: 'Gibraltar' },
        { value: 'GR', label: 'Greece' },
        { value: 'GL', label: 'Greenland' },
        { value: 'GD', label: 'Grenada' },
        { value: 'GP', label: 'Guadeloupe' },
        { value: 'GU', label: 'Guam' },
        { value: 'GT', label: 'Guatemala' },
        { value: 'GG', label: 'Guernsey' },
        { value: 'GN', label: 'Guinea' },
        { value: 'GW', label: 'Guinea-Bissau' },
        { value: 'GY', label: 'Guyana' },
        { value: 'HT', label: 'Haiti' },
        { value: 'HM', label: 'Heard Island and McDonald Islands' },
        { value: 'VA', label: 'Holy See (Vatican City State)' },
        { value: 'HN', label: 'Honduras' },
        { value: 'HK', label: 'Hong Kong' },
        { value: 'HU', label: 'Hungary' },
        { value: 'IS', label: 'Iceland' },
        { value: 'IN', label: 'India' },
        { value: 'ID', label: 'Indonesia' },
        { value: 'IR', label: 'Iran, Islamic Republic of' },
        { value: 'IQ', label: 'Iraq' },
        { value: 'IE', label: 'Ireland' },
        { value: 'IM', label: 'Isle of Man' },
        { value: 'IL', label: 'Israel' },
        { value: 'IT', label: 'Italy' },
        { value: 'JM', label: 'Jamaica' },
        { value: 'JP', label: 'Japan' },
        { value: 'JE', label: 'Jersey' },
        { value: 'JO', label: 'Jordan' },
        { value: 'KZ', label: 'Kazakhstan' },
        { value: 'KE', label: 'Kenya' },
        { value: 'KI', label: 'Kiribati' },
        { value: 'KP', label: 'Korea, Democratic People\'s Republic of' },
        { value: 'KR', label: 'Korea, Republic of' },
        { value: 'KW', label: 'Kuwait' },
        { value: 'KG', label: 'Kyrgyzstan' },
        { value: 'LA', label: 'Lao People\'s Democratic Republic' },
        { value: 'LV', label: 'Latvia' },
        { value: 'LB', label: 'Lebanon' },
        { value: 'LS', label: 'Lesotho' },
        { value: 'LR', label: 'Liberia' },
        { value: 'LY', label: 'Libyan Arab Jamahiriya' },
        { value: 'LI', label: 'Liechtenstein' },
        { value: 'LT', label: 'Lithuania' },
        { value: 'LU', label: 'Luxembourg' },
        { value: 'MO', label: 'Macao' },
        { value: 'MK', label: 'Macedonia, the former Yugoslav Republic of' },
        { value: 'MG', label: 'Madagascar' },
        { value: 'MW', label: 'Malawi' },
        { value: 'MY', label: 'Malaysia' },
        { value: 'MV', label: 'Maldives' },
        { value: 'ML', label: 'Mali' },
        { value: 'MT', label: 'Malta' },
        { value: 'MH', label: 'Marshall Islands' },
        { value: 'MQ', label: 'Martinique' },
        { value: 'MR', label: 'Mauritania' },
        { value: 'MU', label: 'Mauritius' },
        { value: 'YT', label: 'Mayotte' },
        { value: 'MX', label: 'Mexico' },
        { value: 'FM', label: 'Micronesia, Federated States of' },
        { value: 'MD', label: 'Moldova, Republic of' },
        { value: 'MC', label: 'Monaco' },
        { value: 'MN', label: 'Mongolia' },
        { value: 'ME', label: 'Montenegro' },
        { value: 'MS', label: 'Montserrat' },
        { value: 'MA', label: 'Morocco' },
        { value: 'MZ', label: 'Mozambique' },
        { value: 'MM', label: 'Myanmar' },
        { value: 'NA', label: 'Namibia' },
        { value: 'NR', label: 'Nauru' },
        { value: 'NP', label: 'Nepal' },
        { value: 'NL', label: 'Netherlands' },
        { value: 'AN', label: 'Netherlands Antilles' },
        { value: 'NC', label: 'New Caledonia' },
        { value: 'NZ', label: 'New Zealand' },
        { value: 'NI', label: 'Nicaragua' },
        { value: 'NE', label: 'Niger' },
        { value: 'NG', label: 'Nigeria' },
        { value: 'NU', label: 'Niue' },
        { value: 'NF', label: 'Norfolk Island' },
        { value: 'MP', label: 'Northern Mariana Islands' },
        { value: 'NO', label: 'Norway' },
        { value: 'OM', label: 'Oman' },
        { value: 'PK', label: 'Pakistan' },
        { value: 'PW', label: 'Palau' },
        { value: 'PS', label: 'Palestinian Territory, Occupied' },
        { value: 'PA', label: 'Panama' },
        { value: 'PG', label: 'Papua New Guinea' },
        { value: 'PY', label: 'Paraguay' },
        { value: 'PE', label: 'Peru' },
        { value: 'PH', label: 'Philippines' },
        { value: 'PN', label: 'Pitcairn' },
        { value: 'PL', label: 'Poland' },
        { value: 'PT', label: 'Portugal' },
        { value: 'PR', label: 'Puerto Rico' },
        { value: 'QA', label: 'Qatar' },
        { value: 'RE', label: 'R&eacute;union' },
        { value: 'RO', label: 'Romania' },
        { value: 'RU', label: 'Russian Federation' },
        { value: 'RW', label: 'Rwanda' },
        { value: 'BL', label: 'Saint Barth&eacute;lemy' },
        { value: 'SH', label: 'Saint Helena, Ascension and Tristan da Cunha' },
        { value: 'KN', label: 'Saint Kitts and Nevis' },
        { value: 'LC', label: 'Saint Lucia' },
        { value: 'MF', label: 'Saint Martin (French part)' },
        { value: 'PM', label: 'Saint Pierre and Miquelon' },
        { value: 'VC', label: 'Saint Vincent and the Grenadines' },
        { value: 'WS', label: 'Samoa' },
        { value: 'SM', label: 'San Marino' },
        { value: 'ST', label: 'Sao Tome and Principe' },
        { value: 'SA', label: 'Saudi Arabia' },
        { value: 'SN', label: 'Senegal' },
        { value: 'RS', label: 'Serbia' },
        { value: 'SC', label: 'Seychelles' },
        { value: 'SL', label: 'Sierra Leone' },
        { value: 'SG', label: 'Singapore' },
        { value: 'SK', label: 'Slovakia' },
        { value: 'SI', label: 'Slovenia' },
        { value: 'SB', label: 'Solomon Islands' },
        { value: 'SO', label: 'Somalia' },
        { value: 'ZA', label: 'South Africa' },
        { value: 'GS', label: 'South Georgia and the South Sandwich Islands' },
        { value: 'ES', label: 'Spain' },
        { value: 'LK', label: 'Sri Lanka' },
        { value: 'SD', label: 'Sudan' },
        { value: 'SR', label: 'Suriname' },
        { value: 'SJ', label: 'Svalbard and Jan Mayen' },
        { value: 'SZ', label: 'Swaziland' },
        { value: 'SE', label: 'Sweden' },
        { value: 'CH', label: 'Switzerland' },
        { value: 'SY', label: 'Syrian Arab Republic' },
        { value: 'TW', label: 'Taiwan, Province of China' },
        { value: 'TJ', label: 'Tajikistan' },
        { value: 'TZ', label: 'Tanzania, United Republic of' },
        { value: 'TH', label: 'Thailand' },
        { value: 'TL', label: 'Timor-Leste' },
        { value: 'TG', label: 'Togo' },
        { value: 'TK', label: 'Tokelau' },
        { value: 'TO', label: 'Tonga' },
        { value: 'TT', label: 'Trinidad and Tobago' },
        { value: 'TN', label: 'Tunisia' },
        { value: 'TR', label: 'Turkey' },
        { value: 'TM', label: 'Turkmenistan' },
        { value: 'TC', label: 'Turks and Caicos Islands' },
        { value: 'TV', label: 'Tuvalu' },
        { value: 'UG', label: 'Uganda' },
        { value: 'UA', label: 'Ukraine' },
        { value: 'AE', label: 'United Arab Emirates' },
        { value: 'GB', label: 'United Kingdom' },
        { value: 'US', label: 'United States' },
        { value: 'UM', label: 'United States Minor Outlying Islands' },
        { value: 'UY', label: 'Uruguay' },
        { value: 'UZ', label: 'Uzbekistan' },
        { value: 'VU', label: 'Vanuatu' },
        { value: 'VE', label: 'Venezuela, Bolivarian Republic of' },
        { value: 'VN', label: 'Viet Nam' },
        { value: 'VG', label: 'Virgin Islands, British' },
        { value: 'VI', label: 'Virgin Islands, U.S.' },
        { value: 'WF', label: 'Wallis and Futuna' },
        { value: 'EH', label: 'Western Sahara' },
        { value: 'YE', label: 'Yemen' },
        { value: 'ZM', label: 'Zambia' },
        { value: 'ZW', label: 'Zimbabwe' }
    ];
    SelectOptionService = SelectOptionService_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], SelectOptionService);
    return SelectOptionService;
    var SelectOptionService_1;
}());



/***/ }),

/***/ "../../../../../src/app/theme/forms/form-select/form-select-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormSelectRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__form_select_component__ = __webpack_require__("../../../../../src/app/theme/forms/form-select/form-select.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__form_select_component__["a" /* FormSelectComponent */],
        data: {
            title: 'Form Select',
            icon: 'icon-shortcode',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - form select',
            status: true
        }
    }
];
var FormSelectRoutingModule = (function () {
    function FormSelectRoutingModule() {
    }
    FormSelectRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
        })
    ], FormSelectRoutingModule);
    return FormSelectRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/theme/forms/form-select/form-select.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <!-- Default select start -->\r\n    <app-card [title]=\"'Default Select'\" [headerContent]=\"'Lorem ipsum dolor sit amet, consectetur adipisicing elit'\" [cardOptionBlock]=\"true\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12 col-xl-3 m-b-30\">\r\n          <h4 class=\"sub-title\">Default Select</h4>\r\n          <select name=\"select\" class=\"form-control form-control-default\">\r\n            <option value=\"opt1\">Select One Value Only</option>\r\n            <option value=\"opt2\">Type 2</option>\r\n            <option value=\"opt3\">Type 3</option>\r\n            <option value=\"opt4\">Type 4</option>\r\n            <option value=\"opt5\">Type 5</option>\r\n            <option value=\"opt6\">Type 6</option>\r\n            <option value=\"opt7\">Type 7</option>\r\n            <option value=\"opt8\">Type 8</option>\r\n          </select>\r\n        </div>\r\n        <div class=\"col-sm-12 col-xl-3 m-b-30\">\r\n          <h4 class=\"sub-title\">Primary Select</h4>\r\n          <select name=\"select\" class=\"form-control form-control-primary\">\r\n            <option value=\"opt1\">Select One Value Only</option>\r\n            <option value=\"opt2\">Type 2</option>\r\n            <option value=\"opt3\">Type 3</option>\r\n            <option value=\"opt4\">Type 4</option>\r\n            <option value=\"opt5\">Type 5</option>\r\n            <option value=\"opt6\">Type 6</option>\r\n            <option value=\"opt7\">Type 7</option>\r\n            <option value=\"opt8\">Type 8</option>\r\n          </select>\r\n        </div>\r\n        <div class=\"col-sm-12 col-xl-3 m-b-30\">\r\n          <h4 class=\"sub-title\">Success Select</h4>\r\n          <select name=\"select\" class=\"form-control form-control-success\">\r\n            <option value=\"opt1\">Select One Value Only</option>\r\n            <option value=\"opt2\">Type 2</option>\r\n            <option value=\"opt3\">Type 3</option>\r\n            <option value=\"opt4\">Type 4</option>\r\n            <option value=\"opt5\">Type 5</option>\r\n            <option value=\"opt6\">Type 6</option>\r\n            <option value=\"opt7\">Type 7</option>\r\n            <option value=\"opt8\">Type 8</option>\r\n          </select>\r\n        </div>\r\n        <div class=\"col-sm-12 col-xl-3 m-b-30\">\r\n          <h4 class=\"sub-title\">Info Select</h4>\r\n          <select name=\"select\" class=\"form-control form-control-info\">\r\n            <option value=\"opt1\">Select One Value Only</option>\r\n            <option value=\"opt2\">Type 2</option>\r\n            <option value=\"opt3\">Type 3</option>\r\n            <option value=\"opt4\">Type 4</option>\r\n            <option value=\"opt5\">Type 5</option>\r\n            <option value=\"opt6\">Type 6</option>\r\n            <option value=\"opt7\">Type 7</option>\r\n            <option value=\"opt8\">Type 8</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12 col-xl-3 m-b-30 \">\r\n          <h4 class=\"sub-title\">Warning Select</h4>\r\n          <select name=\"select\" class=\"form-control form-control-warning\">\r\n            <option value=\"opt1\">Select One Value Only</option>\r\n            <option value=\"opt2\">Type 2</option>\r\n            <option value=\"opt3\">Type 3</option>\r\n            <option value=\"opt4\">Type 4</option>\r\n            <option value=\"opt5\">Type 5</option>\r\n            <option value=\"opt6\">Type 6</option>\r\n            <option value=\"opt7\">Type 7</option>\r\n            <option value=\"opt8\">Type 8</option>\r\n          </select>\r\n        </div>\r\n        <div class=\"col-sm-12 col-xl-3 m-b-30\">\r\n          <h4 class=\"sub-title\">Danger Select</h4>\r\n          <select name=\"select\" class=\"form-control form-control-danger\">\r\n            <option value=\"opt1\">Select One Value Only</option>\r\n            <option value=\"opt2\">Type 2</option>\r\n            <option value=\"opt3\">Type 3</option>\r\n            <option value=\"opt4\">Type 4</option>\r\n            <option value=\"opt5\">Type 5</option>\r\n            <option value=\"opt6\">Type 6</option>\r\n            <option value=\"opt7\">Type 7</option>\r\n            <option value=\"opt8\">Type 8</option>\r\n          </select>\r\n        </div>\r\n        <div class=\"col-sm-12 col-xl-3 \">\r\n          <h4 class=\"sub-title\">Inverse Select</h4>\r\n          <select name=\"select\" class=\"form-control form-control-inverse\">\r\n            <option value=\"opt1\">Select One Value Only</option>\r\n            <option value=\"opt2\">Type 2</option>\r\n            <option value=\"opt3\">Type 3</option>\r\n            <option value=\"opt4\">Type 4</option>\r\n            <option value=\"opt5\">Type 5</option>\r\n            <option value=\"opt6\">Type 6</option>\r\n            <option value=\"opt7\">Type 7</option>\r\n            <option value=\"opt8\">Type 8</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n    </app-card>\r\n\r\n    <app-card [title]=\"'Default Select'\" [headerContent]=\"'Lorem ipsum dolor sit amet, consectetur adipisicing elit'\" [cardOptionBlock]=\"true\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12 col-xl-4\">\r\n          <h4 class=\"sub-title\">Single Select</h4>\r\n          <ng-select [ngClass]=\"'ng-select'\" [options]=\"simpleOption\" [(ngModel)]=\"selectedOption\"> </ng-select>\r\n          <p class=\"m-t-10\"><code>ng-select</code> can take a regular select box like this...</p>\r\n        </div>\r\n        <div class=\"col-sm-12 col-xl-4\">\r\n          <h4 class=\"sub-title\">Multi Select</h4>\r\n          <ng-select [ngClass]=\"'ng-select'\" [options]=\"simpleOption\" [multiple]=\"true\"></ng-select>\r\n          <p class=\"m-t-10\">The ng-select above is declared with the <code>multiple</code> attribute</p>\r\n        </div>\r\n        <div class=\"col-sm-12 col-xl-4\">\r\n          <h4 class=\"sub-title\">With Placeholder</h4>\r\n          <tag-input [ngClass]=\"'tag-select'\" theme='bootstrap' [secondaryPlaceholder]=\"'Select your nice name'\" [placeholder] = \"'Select Name +'\" [ngModel]=\"[]\" [onlyFromAutocomplete]=\"true\">\r\n            <tag-input-dropdown [autocompleteItems]=\"autocompleteItems\"></tag-input-dropdown>\r\n          </tag-input>\r\n          <p class=\"m-t-10\"><code>tag-input</code> uses the <code>secondaryPlaceholder and placeholder</code> attribute on multiple select boxes</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12 col-xl-4\">\r\n          <h4 class=\"sub-title\">Tagging Support</h4>\r\n          <tag-input [ngClass]=\"'tag-select'\" theme='bootstrap' [placeholder] = \"'+'\" [ngModel]=\"['Dolor']\" [addOnBlur]=\"true\" [clearOnBlur]=\"true\">\r\n            <tag-input-dropdown [autocompleteItems]=\"autocompleteItems\"></tag-input-dropdown>\r\n          </tag-input>\r\n          <p class=\"m-t-10\">The select below is declared with the <code>tag-input and tag-input-dropdown</code></p>\r\n        </div>\r\n        <div class=\"col-sm-12 col-xl-4\">\r\n          <h4 class=\"sub-title\">DIACRITICS SUPPORT</h4>\r\n          <tag-input [ngClass]=\"'tag-select'\" theme='bootstrap' [placeholder] = \"'Select Name +'\" [ngModel]=\"[]\" [onlyFromAutocomplete]=\"true\">\r\n            <tag-input-dropdown [displayBy]=\"'value'\" [identifyBy]=\"'id'\" [autocompleteItems]=\"autocompleteItemsAsObjects\"></tag-input-dropdown>\r\n          </tag-input>\r\n          <p class=\"m-t-10\">The select below is declared with the tag-input <code>onlyFromAutocomplete(true/false)</code></p>\r\n        </div>\r\n        <div class=\"col-sm-12 col-xl-4\">\r\n          <h4 class=\"sub-title\">RTL Support</h4>\r\n          <tag-input [ngClass]=\"'tag-select'\" theme='bootstrap' [placeholder] = \"'+'\" [ngModel]=\"['Dolor']\" [addOnBlur]=\"true\" [clearOnBlur]=\"true\">\r\n            <tag-input-dropdown [autocompleteItems]=\"autocompleteItems\"></tag-input-dropdown>\r\n          </tag-input>\r\n          <p class=\"m-t-10\">The select below is declared with the class<code>.tag-input-rtl</code></p>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12 col-xl-4\">\r\n          <h4 class=\"sub-title\">LIMITING THE NUMBER OF SELECTIONS</h4>\r\n          <tag-input [ngClass]=\"'tag-select'\" theme='bootstrap' [placeholder] = \"'+'\" [maxItems]=\"3\" [ngModel]=\"['Dolor']\" [addOnBlur]=\"true\" [clearOnBlur]=\"true\">\r\n            <tag-input-dropdown [autocompleteItems]=\"autocompleteItems\"></tag-input-dropdown>\r\n          </tag-input>\r\n          <p class=\"m-t-10\">The select below is declared with the tag-input<code>maxItems</code></p>\r\n        </div>\r\n        <div class=\"col-sm-12 col-xl-4\">\r\n          <h4 class=\"sub-title\">LOADING WITH ARRAY</h4>\r\n          <tag-input [ngClass]=\"'tag-select'\" theme='bootstrap' [placeholder] = \"'Select Name +'\" [ngModel]=\"[]\" [onlyFromAutocomplete]=\"true\">\r\n            <tag-input-dropdown [displayBy]=\"'value'\" [identifyBy]=\"'id'\" [autocompleteItems]=\"autocompleteItemsAsObjects\"></tag-input-dropdown>\r\n          </tag-input>\r\n          <p class=\"m-t-10\">The select below is declared with the tag-input <code>onlyFromAutocomplete(true/false)</code></p>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12 col-xl-4\">\r\n          <h4 class=\"sub-title\">Loading options</h4>\r\n          <ng-select [ngClass]=\"'ng-select'\" [options]=\"characters\" [(ngModel)]=\"selectedCharacter\"></ng-select>\r\n          <p class=\"m-t-10\"><code>ng-select</code> with loading options</p>\r\n        </div>\r\n        <div class=\"col-sm-12 col-xl-4\">\r\n          <h4 class=\"sub-title\">Allow clear</h4>\r\n          <ng-select [ngClass]=\"'ng-select'\" [allowClear]=\"true\" [options]=\"simpleOption\" [(ngModel)]=\"selectedOption\"></ng-select>\r\n          <p class=\"m-t-10\">The ng-select above is declared with the <code>allowClear</code> attribute</p>\r\n        </div>\r\n        <div class=\"col-sm-12 col-xl-4 m-b-30\">\r\n          <h4 class=\"sub-title\">With Placeholder</h4>\r\n          <ng-select [ngClass]=\"'ng-select'\" [options]=\"simpleOption\" [disabled]=\"isDisabled\" [(ngModel)]=\"selectedOption\"></ng-select>\r\n          <button [ngClass]=\"'btn btn-primary m-t-10'\" (click)=\"isDisabled = !isDisabled\">\r\n            <span *ngIf=\"!isDisabled\">Disable</span>\r\n            <span *ngIf=\"isDisabled\">Enable</span>\r\n          </button>\r\n          <p class=\"m-t-10\"><code>ng-select</code> uses the <code>disabled</code> attribute on multiple select boxes</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12 col-xl-6 m-b-30\">\r\n          <h4 class=\"sub-title\">Select With Icon</h4>\r\n          <ng-select [ngClass]=\"'ng-select'\" [options]=\"countries\" [allowClear]=\"true\" [(ngModel)]=\"selectedCountry\">\r\n            <ng-template #optionTemplate let-option=\"option\">\r\n              <div class=\"famfamfam-flags {{option?.value.toLowerCase()}}\"></div>\r\n              {{option?.label}}\r\n            </ng-template>\r\n          </ng-select>\r\n        </div>\r\n        <div class=\"col-sm-12 col-xl-6\">\r\n          <h4 class=\"sub-title\">Multiple Select With Icon</h4>\r\n          <ng-select [ngClass]=\"'ng-select'\" [options]=\"countries\" [multiple]=\"true\" [allowClear]=\"true\" [(ngModel)]=\"selectedCountries\">\r\n            <ng-template #optionTemplate let-option=\"option\">\r\n              <div class=\"famfamfam-flags {{option?.value.toLowerCase()}}\"></div>\r\n              {{option?.label}}\r\n            </ng-template>\r\n          </ng-select>\r\n        </div>\r\n      </div>\r\n    </app-card>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/theme/forms/form-select/form-select.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/theme/forms/form-select/form-select.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormSelectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_elements_select_option_service__ = __webpack_require__("../../../../../src/app/shared/elements/select-option.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_first__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/first.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var FormSelectComponent = (function () {
    function FormSelectComponent(selectOptionService, http) {
        this.selectOptionService = selectOptionService;
        this.http = http;
        this.simpleOption = this.selectOptionService.getCharacters();
        this.selectedOption = '3';
        this.isDisabled = true;
        this.selectedCharacter = '3';
        this.timeLeft = 5;
        this.countries = this.selectOptionService.getCountries();
        this.selectedCountry = 'IN';
        this.selectedCountries = ['IN', 'BE', 'LU', 'NL'];
        this.dataSub = null;
        this.autocompleteItems = ['Alabama', 'Wyoming', 'Henry Die', 'John Doe'];
        this.autocompleteItemsAsObjects = [
            { value: 'Alabama', id: 0 },
            { value: 'Wyoming', id: 1 },
            { value: 'Coming', id: 2 },
            { value: 'Josephin Doe', id: 3 },
            { value: 'Henry Die', id: 4 },
            { value: 'Lary Doe', id: 5 },
            { value: 'Alice', id: 6 },
            { value: 'Alia', id: 7 },
            { value: 'Suzen', id: 8 },
            { value: 'Michael Scofield', id: 9 },
            { value: 'Irina Shayk', id: 10 },
            { value: 'Sara Tancredi', id: 11 },
            { value: 'Daizy Mendize', id: 12 },
            { value: 'Loren Scofield', id: 13 },
            { value: 'Shayk', id: 14 },
            { value: 'Sara', id: 15 },
            { value: 'Doe', id: 16 },
            { value: 'Lary', id: 17 },
            { value: 'Roni Sommerfield', id: 18 },
            { value: 'Mickey Amavisca', id: 19 },
            { value: 'Dorethea Hennigan', id: 20 },
            { value: 'Marisha Haughey', id: 21 },
            { value: 'Justin Czajkowski', id: 22 },
            { value: 'Reyes Hodges', id: 23 },
            { value: 'Vicky Hadley', id: 24 },
            { value: 'Lezlie Baumert', id: 25 },
            { value: 'Otha Vanorden', id: 26 },
            { value: 'Glayds Inabinet', id: 27 },
            { value: 'Hang Owsley', id: 28 },
            { value: 'Carlotta Buttner', id: 29 },
            { value: 'Randa Vanloan', id: 30 },
            { value: 'Elana Fulk', id: 31 },
            { value: 'Amos Spearman', id: 32 },
            { value: 'Samon', id: 33 },
            { value: 'John Doe', id: 34 }
        ];
    }
    FormSelectComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.runTimer();
        this.dataSub = this.selectOptionService.loadCharacters().subscribe(function (options) {
            _this.characters = options;
        });
    };
    FormSelectComponent.prototype.ngOnDestroy = function () {
        if (this.dataSub !== null) {
            this.dataSub.unsubscribe();
        }
    };
    FormSelectComponent.prototype.runTimer = function () {
        var _this = this;
        var timer = setInterval(function () {
            _this.timeLeft -= 1;
            if (_this.timeLeft === 0) {
                clearInterval(timer);
            }
        }, 1000);
    };
    FormSelectComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-form-select',
            template: __webpack_require__("../../../../../src/app/theme/forms/form-select/form-select.component.html"),
            styles: [__webpack_require__("../../../../../src/app/theme/forms/form-select/form-select.component.scss"), __webpack_require__("../../../../famfamfam-flags/dist/sprite/famfamfam-flags.min.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_elements_select_option_service__["a" /* SelectOptionService */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* Jsonp */]])
    ], FormSelectComponent);
    return FormSelectComponent;
}());



/***/ }),

/***/ "../../../../../src/app/theme/forms/form-select/form-select.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormSelectModule", function() { return FormSelectModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__form_select_component__ = __webpack_require__("../../../../../src/app/theme/forms/form-select/form-select.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__form_select_routing_module__ = __webpack_require__("../../../../../src/app/theme/forms/form-select/form-select-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng_select__ = __webpack_require__("../../../../ng-select/ng-select.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_chips__ = __webpack_require__("../../../../ngx-chips/dist/ngx-chips.bundle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_chips___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ngx_chips__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_elements_select_option_service__ = __webpack_require__("../../../../../src/app/shared/elements/select-option.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var FormSelectModule = (function () {
    function FormSelectModule() {
    }
    FormSelectModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__form_select_routing_module__["a" /* FormSelectRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_6_ng_select__["a" /* SelectModule */],
                __WEBPACK_IMPORTED_MODULE_7_ngx_chips__["TagInputModule"],
                __WEBPACK_IMPORTED_MODULE_9__angular_http__["e" /* JsonpModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__form_select_component__["a" /* FormSelectComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_8__shared_elements_select_option_service__["a" /* SelectOptionService */]]
        })
    ], FormSelectModule);
    return FormSelectModule;
}());



/***/ }),

/***/ "../../../../famfamfam-flags/dist/sprite/famfamfam-flags.min.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".famfamfam-flags{background:url(" + __webpack_require__("../../../../famfamfam-flags/dist/sprite/famfamfam-flags.png") + ") no-repeat;background-size:224px 199px}.famfamfam-flags.me{width:16px;height:12px;background-position:0 0}.famfamfam-flags.ky{width:16px;height:11px;background-position:-16px 0}.famfamfam-flags.af{width:16px;height:11px;background-position:0 -12px}.famfamfam-flags.ag{width:16px;height:11px;background-position:-16px -12px}.famfamfam-flags.ai{width:16px;height:11px;background-position:-32px 0}.famfamfam-flags.al{width:16px;height:11px;background-position:-32px -11px}.famfamfam-flags.am{width:16px;height:11px;background-position:0 -23px}.famfamfam-flags.an{width:16px;height:11px;background-position:-16px -23px}.famfamfam-flags.ao{width:16px;height:11px;background-position:-32px -23px}.famfamfam-flags.ar{width:16px;height:11px;background-position:0 -34px}.famfamfam-flags.as{width:16px;height:11px;background-position:-16px -34px}.famfamfam-flags.at{width:16px;height:11px;background-position:-32px -34px}.famfamfam-flags.au{width:16px;height:11px;background-position:-48px 0}.famfamfam-flags.aw{width:16px;height:11px;background-position:-48px -11px}.famfamfam-flags.ax{width:16px;height:11px;background-position:-48px -22px}.famfamfam-flags.az{width:16px;height:11px;background-position:-48px -33px}.famfamfam-flags.ba{width:16px;height:11px;background-position:0 -45px}.famfamfam-flags.bb{width:16px;height:11px;background-position:-16px -45px}.famfamfam-flags.bd{width:16px;height:11px;background-position:-32px -45px}.famfamfam-flags.be{width:16px;height:11px;background-position:-48px -45px}.famfamfam-flags.bf{width:16px;height:11px;background-position:-64px 0}.famfamfam-flags.bg{width:16px;height:11px;background-position:-64px -11px}.famfamfam-flags.bh{width:16px;height:11px;background-position:-64px -22px}.famfamfam-flags.bi{width:16px;height:11px;background-position:-64px -33px}.famfamfam-flags.bj{width:16px;height:11px;background-position:-64px -44px}.famfamfam-flags.bm{width:16px;height:11px;background-position:0 -56px}.famfamfam-flags.bn{width:16px;height:11px;background-position:-16px -56px}.famfamfam-flags.bo{width:16px;height:11px;background-position:-32px -56px}.famfamfam-flags.br{width:16px;height:11px;background-position:-48px -56px}.famfamfam-flags.bs{width:16px;height:11px;background-position:-64px -56px}.famfamfam-flags.bt{width:16px;height:11px;background-position:0 -67px}.famfamfam-flags.bv{width:16px;height:11px;background-position:-16px -67px}.famfamfam-flags.bw{width:16px;height:11px;background-position:-32px -67px}.famfamfam-flags.by{width:16px;height:11px;background-position:-48px -67px}.famfamfam-flags.bz{width:16px;height:11px;background-position:-64px -67px}.famfamfam-flags.ca{width:16px;height:11px;background-position:-80px 0}.famfamfam-flags.catalonia{width:16px;height:11px;background-position:-80px -11px}.famfamfam-flags.cc{width:16px;height:11px;background-position:-80px -22px}.famfamfam-flags.cd{width:16px;height:11px;background-position:-80px -33px}.famfamfam-flags.cf{width:16px;height:11px;background-position:-80px -44px}.famfamfam-flags.cg{width:16px;height:11px;background-position:-80px -55px}.famfamfam-flags.zm{width:16px;height:11px;background-position:-80px -66px}.famfamfam-flags.ci{width:16px;height:11px;background-position:0 -78px}.famfamfam-flags.ck{width:16px;height:11px;background-position:-16px -78px}.famfamfam-flags.cl{width:16px;height:11px;background-position:-32px -78px}.famfamfam-flags.cm{width:16px;height:11px;background-position:-48px -78px}.famfamfam-flags.cn{width:16px;height:11px;background-position:-64px -78px}.famfamfam-flags.co{width:16px;height:11px;background-position:-80px -78px}.famfamfam-flags.cr{width:16px;height:11px;background-position:-96px 0}.famfamfam-flags.cs{width:16px;height:11px;background-position:-96px -11px}.famfamfam-flags.cu{width:16px;height:11px;background-position:-96px -22px}.famfamfam-flags.cv{width:16px;height:11px;background-position:-96px -33px}.famfamfam-flags.cx{width:16px;height:11px;background-position:-96px -44px}.famfamfam-flags.cy{width:16px;height:11px;background-position:-96px -55px}.famfamfam-flags.cz{width:16px;height:11px;background-position:-96px -66px}.famfamfam-flags.de{width:16px;height:11px;background-position:-96px -77px}.famfamfam-flags.dj{width:16px;height:11px;background-position:0 -89px}.famfamfam-flags.dk{width:16px;height:11px;background-position:-16px -89px}.famfamfam-flags.dm{width:16px;height:11px;background-position:-32px -89px}.famfamfam-flags.do{width:16px;height:11px;background-position:-48px -89px}.famfamfam-flags.dz{width:16px;height:11px;background-position:-64px -89px}.famfamfam-flags.ec{width:16px;height:11px;background-position:-80px -89px}.famfamfam-flags.ee{width:16px;height:11px;background-position:-96px -89px}.famfamfam-flags.eg{width:16px;height:11px;background-position:0 -100px}.famfamfam-flags.eh{width:16px;height:11px;background-position:-16px -100px}.famfamfam-flags.england{width:16px;height:11px;background-position:-32px -100px}.famfamfam-flags.er{width:16px;height:11px;background-position:-48px -100px}.famfamfam-flags.es{width:16px;height:11px;background-position:-64px -100px}.famfamfam-flags.et{width:16px;height:11px;background-position:-80px -100px}.famfamfam-flags.europeanunion{width:16px;height:11px;background-position:-96px -100px}.famfamfam-flags.fam{width:16px;height:11px;background-position:-112px 0}.famfamfam-flags.fi{width:16px;height:11px;background-position:-112px -11px}.famfamfam-flags.fj{width:16px;height:11px;background-position:-112px -22px}.famfamfam-flags.fk{width:16px;height:11px;background-position:-112px -33px}.famfamfam-flags.fm{width:16px;height:11px;background-position:-112px -44px}.famfamfam-flags.fo{width:16px;height:11px;background-position:-112px -55px}.famfamfam-flags.fr,.famfamfam-flags.gp,.famfamfam-flags.mf,.famfamfam-flags.re,.famfamfam-flags.yt{width:16px;height:11px;background-position:-112px -66px}.famfamfam-flags.ga{width:16px;height:11px;background-position:-112px -77px}.famfamfam-flags.gb{width:16px;height:11px;background-position:-112px -88px}.famfamfam-flags.gd{width:16px;height:11px;background-position:-112px -99px}.famfamfam-flags.ge{width:16px;height:11px;background-position:0 -111px}.famfamfam-flags.gf{width:16px;height:11px;background-position:-16px -111px}.famfamfam-flags.gg{width:16px;height:11px;background-position:-32px -111px}.famfamfam-flags.gh{width:16px;height:11px;background-position:-48px -111px}.famfamfam-flags.gi{width:16px;height:11px;background-position:-64px -111px}.famfamfam-flags.gl{width:16px;height:11px;background-position:-80px -111px}.famfamfam-flags.gm{width:16px;height:11px;background-position:-96px -111px}.famfamfam-flags.gn{width:16px;height:11px;background-position:-112px -111px}.famfamfam-flags.gp{width:16px;height:11px;background-position:-128px 0}.famfamfam-flags.gq{width:16px;height:11px;background-position:-128px -11px}.famfamfam-flags.gr{width:16px;height:11px;background-position:-128px -22px}.famfamfam-flags.gs{width:16px;height:11px;background-position:-128px -33px}.famfamfam-flags.gt{width:16px;height:11px;background-position:-128px -44px}.famfamfam-flags.gu{width:16px;height:11px;background-position:-128px -55px}.famfamfam-flags.gw{width:16px;height:11px;background-position:-128px -66px}.famfamfam-flags.gy{width:16px;height:11px;background-position:-128px -77px}.famfamfam-flags.hk{width:16px;height:11px;background-position:-128px -88px}.famfamfam-flags.hm{width:16px;height:11px;background-position:-128px -99px}.famfamfam-flags.hn{width:16px;height:11px;background-position:-128px -110px}.famfamfam-flags.hr{width:16px;height:11px;background-position:0 -122px}.famfamfam-flags.ht{width:16px;height:11px;background-position:-16px -122px}.famfamfam-flags.hu{width:16px;height:11px;background-position:-32px -122px}.famfamfam-flags.id{width:16px;height:11px;background-position:-48px -122px}.famfamfam-flags.ie{width:16px;height:11px;background-position:-64px -122px}.famfamfam-flags.il{width:16px;height:11px;background-position:-80px -122px}.famfamfam-flags.in{width:16px;height:11px;background-position:-96px -122px}.famfamfam-flags.io{width:16px;height:11px;background-position:-112px -122px}.famfamfam-flags.iq{width:16px;height:11px;background-position:-128px -122px}.famfamfam-flags.ir{width:16px;height:11px;background-position:0 -133px}.famfamfam-flags.is{width:16px;height:11px;background-position:-16px -133px}.famfamfam-flags.it{width:16px;height:11px;background-position:-32px -133px}.famfamfam-flags.je{width:16px;height:11px;background-position:-48px -133px}.famfamfam-flags.jm{width:16px;height:11px;background-position:-64px -133px}.famfamfam-flags.jo{width:16px;height:11px;background-position:-80px -133px}.famfamfam-flags.jp{width:16px;height:11px;background-position:-96px -133px}.famfamfam-flags.ke{width:16px;height:11px;background-position:-112px -133px}.famfamfam-flags.kg{width:16px;height:11px;background-position:-128px -133px}.famfamfam-flags.kh{width:16px;height:11px;background-position:-144px 0}.famfamfam-flags.ki{width:16px;height:11px;background-position:-144px -11px}.famfamfam-flags.km{width:16px;height:11px;background-position:-144px -22px}.famfamfam-flags.kn{width:16px;height:11px;background-position:-144px -33px}.famfamfam-flags.kp{width:16px;height:11px;background-position:-144px -44px}.famfamfam-flags.kr{width:16px;height:11px;background-position:-144px -55px}.famfamfam-flags.kw{width:16px;height:11px;background-position:-144px -66px}.famfamfam-flags.ae{width:16px;height:11px;background-position:-144px -77px}.famfamfam-flags.kz{width:16px;height:11px;background-position:-144px -88px}.famfamfam-flags.la{width:16px;height:11px;background-position:-144px -99px}.famfamfam-flags.lb{width:16px;height:11px;background-position:-144px -110px}.famfamfam-flags.lc{width:16px;height:11px;background-position:-144px -121px}.famfamfam-flags.li{width:16px;height:11px;background-position:-144px -132px}.famfamfam-flags.lk{width:16px;height:11px;background-position:0 -144px}.famfamfam-flags.lr{width:16px;height:11px;background-position:-16px -144px}.famfamfam-flags.ls{width:16px;height:11px;background-position:-32px -144px}.famfamfam-flags.lt{width:16px;height:11px;background-position:-48px -144px}.famfamfam-flags.lu{width:16px;height:11px;background-position:-64px -144px}.famfamfam-flags.lv{width:16px;height:11px;background-position:-80px -144px}.famfamfam-flags.ly{width:16px;height:11px;background-position:-96px -144px}.famfamfam-flags.ma{width:16px;height:11px;background-position:-112px -144px}.famfamfam-flags.mc{width:16px;height:11px;background-position:-128px -144px}.famfamfam-flags.md{width:16px;height:11px;background-position:-144px -144px}.famfamfam-flags.ad{width:16px;height:11px;background-position:-160px 0}.famfamfam-flags.mg{width:16px;height:11px;background-position:-160px -11px}.famfamfam-flags.mh{width:16px;height:11px;background-position:-160px -22px}.famfamfam-flags.mk{width:16px;height:11px;background-position:-160px -33px}.famfamfam-flags.ml{width:16px;height:11px;background-position:-160px -44px}.famfamfam-flags.mm{width:16px;height:11px;background-position:-160px -55px}.famfamfam-flags.mn{width:16px;height:11px;background-position:-160px -66px}.famfamfam-flags.mo{width:16px;height:11px;background-position:-160px -77px}.famfamfam-flags.mp{width:16px;height:11px;background-position:-160px -88px}.famfamfam-flags.mq{width:16px;height:11px;background-position:-160px -99px}.famfamfam-flags.mr{width:16px;height:11px;background-position:-160px -110px}.famfamfam-flags.ms{width:16px;height:11px;background-position:-160px -121px}.famfamfam-flags.mt{width:16px;height:11px;background-position:-160px -132px}.famfamfam-flags.mu{width:16px;height:11px;background-position:-160px -143px}.famfamfam-flags.mv{width:16px;height:11px;background-position:0 -155px}.famfamfam-flags.mw{width:16px;height:11px;background-position:-16px -155px}.famfamfam-flags.mx{width:16px;height:11px;background-position:-32px -155px}.famfamfam-flags.my{width:16px;height:11px;background-position:-48px -155px}.famfamfam-flags.mz{width:16px;height:11px;background-position:-64px -155px}.famfamfam-flags.na{width:16px;height:11px;background-position:-80px -155px}.famfamfam-flags.nc{width:16px;height:11px;background-position:-96px -155px}.famfamfam-flags.ne{width:16px;height:11px;background-position:-112px -155px}.famfamfam-flags.nf{width:16px;height:11px;background-position:-128px -155px}.famfamfam-flags.ng{width:16px;height:11px;background-position:-144px -155px}.famfamfam-flags.ni{width:16px;height:11px;background-position:-160px -155px}.famfamfam-flags.bq,.famfamfam-flags.nl{width:16px;height:11px;background-position:-176px 0}.famfamfam-flags.no{width:16px;height:11px;background-position:-176px -11px}.famfamfam-flags.za{width:16px;height:11px;background-position:-176px -22px}.famfamfam-flags.nr{width:16px;height:11px;background-position:-176px -33px}.famfamfam-flags.nu{width:16px;height:11px;background-position:-176px -44px}.famfamfam-flags.nz{width:16px;height:11px;background-position:-176px -55px}.famfamfam-flags.om{width:16px;height:11px;background-position:-176px -66px}.famfamfam-flags.pa{width:16px;height:11px;background-position:-176px -77px}.famfamfam-flags.pe{width:16px;height:11px;background-position:-176px -88px}.famfamfam-flags.pf{width:16px;height:11px;background-position:-176px -99px}.famfamfam-flags.pg{width:16px;height:11px;background-position:-176px -110px}.famfamfam-flags.ph{width:16px;height:11px;background-position:-176px -121px}.famfamfam-flags.pk{width:16px;height:11px;background-position:-176px -132px}.famfamfam-flags.pl{width:16px;height:11px;background-position:-176px -143px}.famfamfam-flags.pm{width:16px;height:11px;background-position:-176px -154px}.famfamfam-flags.pn{width:16px;height:11px;background-position:0 -166px}.famfamfam-flags.pr{width:16px;height:11px;background-position:-16px -166px}.famfamfam-flags.ps{width:16px;height:11px;background-position:-32px -166px}.famfamfam-flags.pt{width:16px;height:11px;background-position:-48px -166px}.famfamfam-flags.pw{width:16px;height:11px;background-position:-64px -166px}.famfamfam-flags.py{width:16px;height:11px;background-position:-80px -166px}.famfamfam-flags.qa{width:16px;height:11px;background-position:-96px -166px}.famfamfam-flags.re{width:16px;height:11px;background-position:-112px -166px}.famfamfam-flags.ro{width:16px;height:11px;background-position:-128px -166px}.famfamfam-flags.rs{width:16px;height:11px;background-position:-144px -166px}.famfamfam-flags.ru{width:16px;height:11px;background-position:-160px -166px}.famfamfam-flags.rw{width:16px;height:11px;background-position:-176px -166px}.famfamfam-flags.sa{width:16px;height:11px;background-position:0 -177px}.famfamfam-flags.sb{width:16px;height:11px;background-position:-16px -177px}.famfamfam-flags.sc{width:16px;height:11px;background-position:-32px -177px}.famfamfam-flags.scotland{width:16px;height:11px;background-position:-48px -177px}.famfamfam-flags.sd{width:16px;height:11px;background-position:-64px -177px}.famfamfam-flags.se{width:16px;height:11px;background-position:-80px -177px}.famfamfam-flags.sg{width:16px;height:11px;background-position:-96px -177px}.famfamfam-flags.sh{width:16px;height:11px;background-position:-112px -177px}.famfamfam-flags.si{width:16px;height:11px;background-position:-128px -177px}.famfamfam-flags.sj{width:16px;height:11px;background-position:-144px -177px}.famfamfam-flags.sk{width:16px;height:11px;background-position:-160px -177px}.famfamfam-flags.sl{width:16px;height:11px;background-position:-176px -177px}.famfamfam-flags.sm{width:16px;height:11px;background-position:-192px 0}.famfamfam-flags.sn{width:16px;height:11px;background-position:-192px -11px}.famfamfam-flags.so{width:16px;height:11px;background-position:-192px -22px}.famfamfam-flags.sr{width:16px;height:11px;background-position:-192px -33px}.famfamfam-flags.st{width:16px;height:11px;background-position:-192px -44px}.famfamfam-flags.sv{width:16px;height:11px;background-position:-192px -55px}.famfamfam-flags.sy{width:16px;height:11px;background-position:-192px -66px}.famfamfam-flags.sz{width:16px;height:11px;background-position:-192px -77px}.famfamfam-flags.tc{width:16px;height:11px;background-position:-192px -88px}.famfamfam-flags.td{width:16px;height:11px;background-position:-192px -99px}.famfamfam-flags.tf{width:16px;height:11px;background-position:-192px -110px}.famfamfam-flags.tg{width:16px;height:11px;background-position:-192px -121px}.famfamfam-flags.th{width:16px;height:11px;background-position:-192px -132px}.famfamfam-flags.tj{width:16px;height:11px;background-position:-192px -143px}.famfamfam-flags.tk{width:16px;height:11px;background-position:-192px -154px}.famfamfam-flags.tl{width:16px;height:11px;background-position:-192px -165px}.famfamfam-flags.tm{width:16px;height:11px;background-position:-192px -176px}.famfamfam-flags.tn{width:16px;height:11px;background-position:0 -188px}.famfamfam-flags.to{width:16px;height:11px;background-position:-16px -188px}.famfamfam-flags.tr{width:16px;height:11px;background-position:-32px -188px}.famfamfam-flags.tt{width:16px;height:11px;background-position:-48px -188px}.famfamfam-flags.tv{width:16px;height:11px;background-position:-64px -188px}.famfamfam-flags.tw{width:16px;height:11px;background-position:-80px -188px}.famfamfam-flags.tz{width:16px;height:11px;background-position:-96px -188px}.famfamfam-flags.ua{width:16px;height:11px;background-position:-112px -188px}.famfamfam-flags.ug{width:16px;height:11px;background-position:-128px -188px}.famfamfam-flags.um{width:16px;height:11px;background-position:-144px -188px}.famfamfam-flags.us{width:16px;height:11px;background-position:-160px -188px}.famfamfam-flags.uy{width:16px;height:11px;background-position:-176px -188px}.famfamfam-flags.uz{width:16px;height:11px;background-position:-192px -188px}.famfamfam-flags.va{width:16px;height:11px;background-position:-208px 0}.famfamfam-flags.vc{width:16px;height:11px;background-position:-208px -11px}.famfamfam-flags.ve{width:16px;height:11px;background-position:-208px -22px}.famfamfam-flags.vg{width:16px;height:11px;background-position:-208px -33px}.famfamfam-flags.vi{width:16px;height:11px;background-position:-208px -44px}.famfamfam-flags.vn{width:16px;height:11px;background-position:-208px -55px}.famfamfam-flags.vu{width:16px;height:11px;background-position:-208px -66px}.famfamfam-flags.wales{width:16px;height:11px;background-position:-208px -77px}.famfamfam-flags.wf{width:16px;height:11px;background-position:-208px -88px}.famfamfam-flags.ws{width:16px;height:11px;background-position:-208px -99px}.famfamfam-flags.ye{width:16px;height:11px;background-position:-208px -110px}.famfamfam-flags.yt{width:16px;height:11px;background-position:-208px -121px}.famfamfam-flags.zw{width:16px;height:11px;background-position:-208px -132px}.famfamfam-flags.ch{width:11px;height:11px;background-position:-208px -143px}.famfamfam-flags.np{width:9px;height:11px;background-position:-208px -154px}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../famfamfam-flags/dist/sprite/famfamfam-flags.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "famfamfam-flags.d4a4d7b033f5ad8d7261.png";

/***/ }),

/***/ "../../../../ng-select/ng-select.es5.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectModule; });
/* unused harmony export SELECT_VALUE_ACCESSOR */
/* unused harmony export SelectComponent */
/* unused harmony export ɵa */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");



var Option = /** @class */ (function () {
    /**
     * @param {?} option
     */
    function Option(option) {
        this.wrappedOption = option;
        this.disabled = false;
        this.highlighted = false;
        this.selected = false;
        this.shown = true;
    }
    Object.defineProperty(Option.prototype, "value", {
        /**
         * @return {?}
         */
        get: function () {
            return this.wrappedOption.value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Option.prototype, "label", {
        /**
         * @return {?}
         */
        get: function () {
            return this.wrappedOption.label;
        },
        enumerable: true,
        configurable: true
    });
    return Option;
}());
var Diacritics = /** @class */ (function () {
    function Diacritics() {
    }
    /**
     * @param {?} text
     * @return {?}
     */
    Diacritics.strip = function (text) {
        var _this = this;
        var /** @type {?} */ match = function (a) {
            return _this.DIACRITICS[a] || a;
        };
        return text.replace(/[^\u0000-\u007E]/g, match);
    };
    return Diacritics;
}());
Diacritics.DIACRITICS = {
    '\u24B6': 'A',
    '\uFF21': 'A',
    '\u00C0': 'A',
    '\u00C1': 'A',
    '\u00C2': 'A',
    '\u1EA6': 'A',
    '\u1EA4': 'A',
    '\u1EAA': 'A',
    '\u1EA8': 'A',
    '\u00C3': 'A',
    '\u0100': 'A',
    '\u0102': 'A',
    '\u1EB0': 'A',
    '\u1EAE': 'A',
    '\u1EB4': 'A',
    '\u1EB2': 'A',
    '\u0226': 'A',
    '\u01E0': 'A',
    '\u00C4': 'A',
    '\u01DE': 'A',
    '\u1EA2': 'A',
    '\u00C5': 'A',
    '\u01FA': 'A',
    '\u01CD': 'A',
    '\u0200': 'A',
    '\u0202': 'A',
    '\u1EA0': 'A',
    '\u1EAC': 'A',
    '\u1EB6': 'A',
    '\u1E00': 'A',
    '\u0104': 'A',
    '\u023A': 'A',
    '\u2C6F': 'A',
    '\uA732': 'AA',
    '\u00C6': 'AE',
    '\u01FC': 'AE',
    '\u01E2': 'AE',
    '\uA734': 'AO',
    '\uA736': 'AU',
    '\uA738': 'AV',
    '\uA73A': 'AV',
    '\uA73C': 'AY',
    '\u24B7': 'B',
    '\uFF22': 'B',
    '\u1E02': 'B',
    '\u1E04': 'B',
    '\u1E06': 'B',
    '\u0243': 'B',
    '\u0182': 'B',
    '\u0181': 'B',
    '\u24B8': 'C',
    '\uFF23': 'C',
    '\u0106': 'C',
    '\u0108': 'C',
    '\u010A': 'C',
    '\u010C': 'C',
    '\u00C7': 'C',
    '\u1E08': 'C',
    '\u0187': 'C',
    '\u023B': 'C',
    '\uA73E': 'C',
    '\u24B9': 'D',
    '\uFF24': 'D',
    '\u1E0A': 'D',
    '\u010E': 'D',
    '\u1E0C': 'D',
    '\u1E10': 'D',
    '\u1E12': 'D',
    '\u1E0E': 'D',
    '\u0110': 'D',
    '\u018B': 'D',
    '\u018A': 'D',
    '\u0189': 'D',
    '\uA779': 'D',
    '\u01F1': 'DZ',
    '\u01C4': 'DZ',
    '\u01F2': 'Dz',
    '\u01C5': 'Dz',
    '\u24BA': 'E',
    '\uFF25': 'E',
    '\u00C8': 'E',
    '\u00C9': 'E',
    '\u00CA': 'E',
    '\u1EC0': 'E',
    '\u1EBE': 'E',
    '\u1EC4': 'E',
    '\u1EC2': 'E',
    '\u1EBC': 'E',
    '\u0112': 'E',
    '\u1E14': 'E',
    '\u1E16': 'E',
    '\u0114': 'E',
    '\u0116': 'E',
    '\u00CB': 'E',
    '\u1EBA': 'E',
    '\u011A': 'E',
    '\u0204': 'E',
    '\u0206': 'E',
    '\u1EB8': 'E',
    '\u1EC6': 'E',
    '\u0228': 'E',
    '\u1E1C': 'E',
    '\u0118': 'E',
    '\u1E18': 'E',
    '\u1E1A': 'E',
    '\u0190': 'E',
    '\u018E': 'E',
    '\u24BB': 'F',
    '\uFF26': 'F',
    '\u1E1E': 'F',
    '\u0191': 'F',
    '\uA77B': 'F',
    '\u24BC': 'G',
    '\uFF27': 'G',
    '\u01F4': 'G',
    '\u011C': 'G',
    '\u1E20': 'G',
    '\u011E': 'G',
    '\u0120': 'G',
    '\u01E6': 'G',
    '\u0122': 'G',
    '\u01E4': 'G',
    '\u0193': 'G',
    '\uA7A0': 'G',
    '\uA77D': 'G',
    '\uA77E': 'G',
    '\u24BD': 'H',
    '\uFF28': 'H',
    '\u0124': 'H',
    '\u1E22': 'H',
    '\u1E26': 'H',
    '\u021E': 'H',
    '\u1E24': 'H',
    '\u1E28': 'H',
    '\u1E2A': 'H',
    '\u0126': 'H',
    '\u2C67': 'H',
    '\u2C75': 'H',
    '\uA78D': 'H',
    '\u24BE': 'I',
    '\uFF29': 'I',
    '\u00CC': 'I',
    '\u00CD': 'I',
    '\u00CE': 'I',
    '\u0128': 'I',
    '\u012A': 'I',
    '\u012C': 'I',
    '\u0130': 'I',
    '\u00CF': 'I',
    '\u1E2E': 'I',
    '\u1EC8': 'I',
    '\u01CF': 'I',
    '\u0208': 'I',
    '\u020A': 'I',
    '\u1ECA': 'I',
    '\u012E': 'I',
    '\u1E2C': 'I',
    '\u0197': 'I',
    '\u24BF': 'J',
    '\uFF2A': 'J',
    '\u0134': 'J',
    '\u0248': 'J',
    '\u24C0': 'K',
    '\uFF2B': 'K',
    '\u1E30': 'K',
    '\u01E8': 'K',
    '\u1E32': 'K',
    '\u0136': 'K',
    '\u1E34': 'K',
    '\u0198': 'K',
    '\u2C69': 'K',
    '\uA740': 'K',
    '\uA742': 'K',
    '\uA744': 'K',
    '\uA7A2': 'K',
    '\u24C1': 'L',
    '\uFF2C': 'L',
    '\u013F': 'L',
    '\u0139': 'L',
    '\u013D': 'L',
    '\u1E36': 'L',
    '\u1E38': 'L',
    '\u013B': 'L',
    '\u1E3C': 'L',
    '\u1E3A': 'L',
    '\u0141': 'L',
    '\u023D': 'L',
    '\u2C62': 'L',
    '\u2C60': 'L',
    '\uA748': 'L',
    '\uA746': 'L',
    '\uA780': 'L',
    '\u01C7': 'LJ',
    '\u01C8': 'Lj',
    '\u24C2': 'M',
    '\uFF2D': 'M',
    '\u1E3E': 'M',
    '\u1E40': 'M',
    '\u1E42': 'M',
    '\u2C6E': 'M',
    '\u019C': 'M',
    '\u24C3': 'N',
    '\uFF2E': 'N',
    '\u01F8': 'N',
    '\u0143': 'N',
    '\u00D1': 'N',
    '\u1E44': 'N',
    '\u0147': 'N',
    '\u1E46': 'N',
    '\u0145': 'N',
    '\u1E4A': 'N',
    '\u1E48': 'N',
    '\u0220': 'N',
    '\u019D': 'N',
    '\uA790': 'N',
    '\uA7A4': 'N',
    '\u01CA': 'NJ',
    '\u01CB': 'Nj',
    '\u24C4': 'O',
    '\uFF2F': 'O',
    '\u00D2': 'O',
    '\u00D3': 'O',
    '\u00D4': 'O',
    '\u1ED2': 'O',
    '\u1ED0': 'O',
    '\u1ED6': 'O',
    '\u1ED4': 'O',
    '\u00D5': 'O',
    '\u1E4C': 'O',
    '\u022C': 'O',
    '\u1E4E': 'O',
    '\u014C': 'O',
    '\u1E50': 'O',
    '\u1E52': 'O',
    '\u014E': 'O',
    '\u022E': 'O',
    '\u0230': 'O',
    '\u00D6': 'O',
    '\u022A': 'O',
    '\u1ECE': 'O',
    '\u0150': 'O',
    '\u01D1': 'O',
    '\u020C': 'O',
    '\u020E': 'O',
    '\u01A0': 'O',
    '\u1EDC': 'O',
    '\u1EDA': 'O',
    '\u1EE0': 'O',
    '\u1EDE': 'O',
    '\u1EE2': 'O',
    '\u1ECC': 'O',
    '\u1ED8': 'O',
    '\u01EA': 'O',
    '\u01EC': 'O',
    '\u00D8': 'O',
    '\u01FE': 'O',
    '\u0186': 'O',
    '\u019F': 'O',
    '\uA74A': 'O',
    '\uA74C': 'O',
    '\u01A2': 'OI',
    '\uA74E': 'OO',
    '\u0222': 'OU',
    '\u24C5': 'P',
    '\uFF30': 'P',
    '\u1E54': 'P',
    '\u1E56': 'P',
    '\u01A4': 'P',
    '\u2C63': 'P',
    '\uA750': 'P',
    '\uA752': 'P',
    '\uA754': 'P',
    '\u24C6': 'Q',
    '\uFF31': 'Q',
    '\uA756': 'Q',
    '\uA758': 'Q',
    '\u024A': 'Q',
    '\u24C7': 'R',
    '\uFF32': 'R',
    '\u0154': 'R',
    '\u1E58': 'R',
    '\u0158': 'R',
    '\u0210': 'R',
    '\u0212': 'R',
    '\u1E5A': 'R',
    '\u1E5C': 'R',
    '\u0156': 'R',
    '\u1E5E': 'R',
    '\u024C': 'R',
    '\u2C64': 'R',
    '\uA75A': 'R',
    '\uA7A6': 'R',
    '\uA782': 'R',
    '\u24C8': 'S',
    '\uFF33': 'S',
    '\u1E9E': 'S',
    '\u015A': 'S',
    '\u1E64': 'S',
    '\u015C': 'S',
    '\u1E60': 'S',
    '\u0160': 'S',
    '\u1E66': 'S',
    '\u1E62': 'S',
    '\u1E68': 'S',
    '\u0218': 'S',
    '\u015E': 'S',
    '\u2C7E': 'S',
    '\uA7A8': 'S',
    '\uA784': 'S',
    '\u24C9': 'T',
    '\uFF34': 'T',
    '\u1E6A': 'T',
    '\u0164': 'T',
    '\u1E6C': 'T',
    '\u021A': 'T',
    '\u0162': 'T',
    '\u1E70': 'T',
    '\u1E6E': 'T',
    '\u0166': 'T',
    '\u01AC': 'T',
    '\u01AE': 'T',
    '\u023E': 'T',
    '\uA786': 'T',
    '\uA728': 'TZ',
    '\u24CA': 'U',
    '\uFF35': 'U',
    '\u00D9': 'U',
    '\u00DA': 'U',
    '\u00DB': 'U',
    '\u0168': 'U',
    '\u1E78': 'U',
    '\u016A': 'U',
    '\u1E7A': 'U',
    '\u016C': 'U',
    '\u00DC': 'U',
    '\u01DB': 'U',
    '\u01D7': 'U',
    '\u01D5': 'U',
    '\u01D9': 'U',
    '\u1EE6': 'U',
    '\u016E': 'U',
    '\u0170': 'U',
    '\u01D3': 'U',
    '\u0214': 'U',
    '\u0216': 'U',
    '\u01AF': 'U',
    '\u1EEA': 'U',
    '\u1EE8': 'U',
    '\u1EEE': 'U',
    '\u1EEC': 'U',
    '\u1EF0': 'U',
    '\u1EE4': 'U',
    '\u1E72': 'U',
    '\u0172': 'U',
    '\u1E76': 'U',
    '\u1E74': 'U',
    '\u0244': 'U',
    '\u24CB': 'V',
    '\uFF36': 'V',
    '\u1E7C': 'V',
    '\u1E7E': 'V',
    '\u01B2': 'V',
    '\uA75E': 'V',
    '\u0245': 'V',
    '\uA760': 'VY',
    '\u24CC': 'W',
    '\uFF37': 'W',
    '\u1E80': 'W',
    '\u1E82': 'W',
    '\u0174': 'W',
    '\u1E86': 'W',
    '\u1E84': 'W',
    '\u1E88': 'W',
    '\u2C72': 'W',
    '\u24CD': 'X',
    '\uFF38': 'X',
    '\u1E8A': 'X',
    '\u1E8C': 'X',
    '\u24CE': 'Y',
    '\uFF39': 'Y',
    '\u1EF2': 'Y',
    '\u00DD': 'Y',
    '\u0176': 'Y',
    '\u1EF8': 'Y',
    '\u0232': 'Y',
    '\u1E8E': 'Y',
    '\u0178': 'Y',
    '\u1EF6': 'Y',
    '\u1EF4': 'Y',
    '\u01B3': 'Y',
    '\u024E': 'Y',
    '\u1EFE': 'Y',
    '\u24CF': 'Z',
    '\uFF3A': 'Z',
    '\u0179': 'Z',
    '\u1E90': 'Z',
    '\u017B': 'Z',
    '\u017D': 'Z',
    '\u1E92': 'Z',
    '\u1E94': 'Z',
    '\u01B5': 'Z',
    '\u0224': 'Z',
    '\u2C7F': 'Z',
    '\u2C6B': 'Z',
    '\uA762': 'Z',
    '\u24D0': 'a',
    '\uFF41': 'a',
    '\u1E9A': 'a',
    '\u00E0': 'a',
    '\u00E1': 'a',
    '\u00E2': 'a',
    '\u1EA7': 'a',
    '\u1EA5': 'a',
    '\u1EAB': 'a',
    '\u1EA9': 'a',
    '\u00E3': 'a',
    '\u0101': 'a',
    '\u0103': 'a',
    '\u1EB1': 'a',
    '\u1EAF': 'a',
    '\u1EB5': 'a',
    '\u1EB3': 'a',
    '\u0227': 'a',
    '\u01E1': 'a',
    '\u00E4': 'a',
    '\u01DF': 'a',
    '\u1EA3': 'a',
    '\u00E5': 'a',
    '\u01FB': 'a',
    '\u01CE': 'a',
    '\u0201': 'a',
    '\u0203': 'a',
    '\u1EA1': 'a',
    '\u1EAD': 'a',
    '\u1EB7': 'a',
    '\u1E01': 'a',
    '\u0105': 'a',
    '\u2C65': 'a',
    '\u0250': 'a',
    '\uA733': 'aa',
    '\u00E6': 'ae',
    '\u01FD': 'ae',
    '\u01E3': 'ae',
    '\uA735': 'ao',
    '\uA737': 'au',
    '\uA739': 'av',
    '\uA73B': 'av',
    '\uA73D': 'ay',
    '\u24D1': 'b',
    '\uFF42': 'b',
    '\u1E03': 'b',
    '\u1E05': 'b',
    '\u1E07': 'b',
    '\u0180': 'b',
    '\u0183': 'b',
    '\u0253': 'b',
    '\u24D2': 'c',
    '\uFF43': 'c',
    '\u0107': 'c',
    '\u0109': 'c',
    '\u010B': 'c',
    '\u010D': 'c',
    '\u00E7': 'c',
    '\u1E09': 'c',
    '\u0188': 'c',
    '\u023C': 'c',
    '\uA73F': 'c',
    '\u2184': 'c',
    '\u24D3': 'd',
    '\uFF44': 'd',
    '\u1E0B': 'd',
    '\u010F': 'd',
    '\u1E0D': 'd',
    '\u1E11': 'd',
    '\u1E13': 'd',
    '\u1E0F': 'd',
    '\u0111': 'd',
    '\u018C': 'd',
    '\u0256': 'd',
    '\u0257': 'd',
    '\uA77A': 'd',
    '\u01F3': 'dz',
    '\u01C6': 'dz',
    '\u24D4': 'e',
    '\uFF45': 'e',
    '\u00E8': 'e',
    '\u00E9': 'e',
    '\u00EA': 'e',
    '\u1EC1': 'e',
    '\u1EBF': 'e',
    '\u1EC5': 'e',
    '\u1EC3': 'e',
    '\u1EBD': 'e',
    '\u0113': 'e',
    '\u1E15': 'e',
    '\u1E17': 'e',
    '\u0115': 'e',
    '\u0117': 'e',
    '\u00EB': 'e',
    '\u1EBB': 'e',
    '\u011B': 'e',
    '\u0205': 'e',
    '\u0207': 'e',
    '\u1EB9': 'e',
    '\u1EC7': 'e',
    '\u0229': 'e',
    '\u1E1D': 'e',
    '\u0119': 'e',
    '\u1E19': 'e',
    '\u1E1B': 'e',
    '\u0247': 'e',
    '\u025B': 'e',
    '\u01DD': 'e',
    '\u24D5': 'f',
    '\uFF46': 'f',
    '\u1E1F': 'f',
    '\u0192': 'f',
    '\uA77C': 'f',
    '\u24D6': 'g',
    '\uFF47': 'g',
    '\u01F5': 'g',
    '\u011D': 'g',
    '\u1E21': 'g',
    '\u011F': 'g',
    '\u0121': 'g',
    '\u01E7': 'g',
    '\u0123': 'g',
    '\u01E5': 'g',
    '\u0260': 'g',
    '\uA7A1': 'g',
    '\u1D79': 'g',
    '\uA77F': 'g',
    '\u24D7': 'h',
    '\uFF48': 'h',
    '\u0125': 'h',
    '\u1E23': 'h',
    '\u1E27': 'h',
    '\u021F': 'h',
    '\u1E25': 'h',
    '\u1E29': 'h',
    '\u1E2B': 'h',
    '\u1E96': 'h',
    '\u0127': 'h',
    '\u2C68': 'h',
    '\u2C76': 'h',
    '\u0265': 'h',
    '\u0195': 'hv',
    '\u24D8': 'i',
    '\uFF49': 'i',
    '\u00EC': 'i',
    '\u00ED': 'i',
    '\u00EE': 'i',
    '\u0129': 'i',
    '\u012B': 'i',
    '\u012D': 'i',
    '\u00EF': 'i',
    '\u1E2F': 'i',
    '\u1EC9': 'i',
    '\u01D0': 'i',
    '\u0209': 'i',
    '\u020B': 'i',
    '\u1ECB': 'i',
    '\u012F': 'i',
    '\u1E2D': 'i',
    '\u0268': 'i',
    '\u0131': 'i',
    '\u24D9': 'j',
    '\uFF4A': 'j',
    '\u0135': 'j',
    '\u01F0': 'j',
    '\u0249': 'j',
    '\u24DA': 'k',
    '\uFF4B': 'k',
    '\u1E31': 'k',
    '\u01E9': 'k',
    '\u1E33': 'k',
    '\u0137': 'k',
    '\u1E35': 'k',
    '\u0199': 'k',
    '\u2C6A': 'k',
    '\uA741': 'k',
    '\uA743': 'k',
    '\uA745': 'k',
    '\uA7A3': 'k',
    '\u24DB': 'l',
    '\uFF4C': 'l',
    '\u0140': 'l',
    '\u013A': 'l',
    '\u013E': 'l',
    '\u1E37': 'l',
    '\u1E39': 'l',
    '\u013C': 'l',
    '\u1E3D': 'l',
    '\u1E3B': 'l',
    '\u017F': 'l',
    '\u0142': 'l',
    '\u019A': 'l',
    '\u026B': 'l',
    '\u2C61': 'l',
    '\uA749': 'l',
    '\uA781': 'l',
    '\uA747': 'l',
    '\u01C9': 'lj',
    '\u24DC': 'm',
    '\uFF4D': 'm',
    '\u1E3F': 'm',
    '\u1E41': 'm',
    '\u1E43': 'm',
    '\u0271': 'm',
    '\u026F': 'm',
    '\u24DD': 'n',
    '\uFF4E': 'n',
    '\u01F9': 'n',
    '\u0144': 'n',
    '\u00F1': 'n',
    '\u1E45': 'n',
    '\u0148': 'n',
    '\u1E47': 'n',
    '\u0146': 'n',
    '\u1E4B': 'n',
    '\u1E49': 'n',
    '\u019E': 'n',
    '\u0272': 'n',
    '\u0149': 'n',
    '\uA791': 'n',
    '\uA7A5': 'n',
    '\u01CC': 'nj',
    '\u24DE': 'o',
    '\uFF4F': 'o',
    '\u00F2': 'o',
    '\u00F3': 'o',
    '\u00F4': 'o',
    '\u1ED3': 'o',
    '\u1ED1': 'o',
    '\u1ED7': 'o',
    '\u1ED5': 'o',
    '\u00F5': 'o',
    '\u1E4D': 'o',
    '\u022D': 'o',
    '\u1E4F': 'o',
    '\u014D': 'o',
    '\u1E51': 'o',
    '\u1E53': 'o',
    '\u014F': 'o',
    '\u022F': 'o',
    '\u0231': 'o',
    '\u00F6': 'o',
    '\u022B': 'o',
    '\u1ECF': 'o',
    '\u0151': 'o',
    '\u01D2': 'o',
    '\u020D': 'o',
    '\u020F': 'o',
    '\u01A1': 'o',
    '\u1EDD': 'o',
    '\u1EDB': 'o',
    '\u1EE1': 'o',
    '\u1EDF': 'o',
    '\u1EE3': 'o',
    '\u1ECD': 'o',
    '\u1ED9': 'o',
    '\u01EB': 'o',
    '\u01ED': 'o',
    '\u00F8': 'o',
    '\u01FF': 'o',
    '\u0254': 'o',
    '\uA74B': 'o',
    '\uA74D': 'o',
    '\u0275': 'o',
    '\u01A3': 'oi',
    '\u0223': 'ou',
    '\uA74F': 'oo',
    '\u24DF': 'p',
    '\uFF50': 'p',
    '\u1E55': 'p',
    '\u1E57': 'p',
    '\u01A5': 'p',
    '\u1D7D': 'p',
    '\uA751': 'p',
    '\uA753': 'p',
    '\uA755': 'p',
    '\u24E0': 'q',
    '\uFF51': 'q',
    '\u024B': 'q',
    '\uA757': 'q',
    '\uA759': 'q',
    '\u24E1': 'r',
    '\uFF52': 'r',
    '\u0155': 'r',
    '\u1E59': 'r',
    '\u0159': 'r',
    '\u0211': 'r',
    '\u0213': 'r',
    '\u1E5B': 'r',
    '\u1E5D': 'r',
    '\u0157': 'r',
    '\u1E5F': 'r',
    '\u024D': 'r',
    '\u027D': 'r',
    '\uA75B': 'r',
    '\uA7A7': 'r',
    '\uA783': 'r',
    '\u24E2': 's',
    '\uFF53': 's',
    '\u00DF': 's',
    '\u015B': 's',
    '\u1E65': 's',
    '\u015D': 's',
    '\u1E61': 's',
    '\u0161': 's',
    '\u1E67': 's',
    '\u1E63': 's',
    '\u1E69': 's',
    '\u0219': 's',
    '\u015F': 's',
    '\u023F': 's',
    '\uA7A9': 's',
    '\uA785': 's',
    '\u1E9B': 's',
    '\u24E3': 't',
    '\uFF54': 't',
    '\u1E6B': 't',
    '\u1E97': 't',
    '\u0165': 't',
    '\u1E6D': 't',
    '\u021B': 't',
    '\u0163': 't',
    '\u1E71': 't',
    '\u1E6F': 't',
    '\u0167': 't',
    '\u01AD': 't',
    '\u0288': 't',
    '\u2C66': 't',
    '\uA787': 't',
    '\uA729': 'tz',
    '\u24E4': 'u',
    '\uFF55': 'u',
    '\u00F9': 'u',
    '\u00FA': 'u',
    '\u00FB': 'u',
    '\u0169': 'u',
    '\u1E79': 'u',
    '\u016B': 'u',
    '\u1E7B': 'u',
    '\u016D': 'u',
    '\u00FC': 'u',
    '\u01DC': 'u',
    '\u01D8': 'u',
    '\u01D6': 'u',
    '\u01DA': 'u',
    '\u1EE7': 'u',
    '\u016F': 'u',
    '\u0171': 'u',
    '\u01D4': 'u',
    '\u0215': 'u',
    '\u0217': 'u',
    '\u01B0': 'u',
    '\u1EEB': 'u',
    '\u1EE9': 'u',
    '\u1EEF': 'u',
    '\u1EED': 'u',
    '\u1EF1': 'u',
    '\u1EE5': 'u',
    '\u1E73': 'u',
    '\u0173': 'u',
    '\u1E77': 'u',
    '\u1E75': 'u',
    '\u0289': 'u',
    '\u24E5': 'v',
    '\uFF56': 'v',
    '\u1E7D': 'v',
    '\u1E7F': 'v',
    '\u028B': 'v',
    '\uA75F': 'v',
    '\u028C': 'v',
    '\uA761': 'vy',
    '\u24E6': 'w',
    '\uFF57': 'w',
    '\u1E81': 'w',
    '\u1E83': 'w',
    '\u0175': 'w',
    '\u1E87': 'w',
    '\u1E85': 'w',
    '\u1E98': 'w',
    '\u1E89': 'w',
    '\u2C73': 'w',
    '\u24E7': 'x',
    '\uFF58': 'x',
    '\u1E8B': 'x',
    '\u1E8D': 'x',
    '\u24E8': 'y',
    '\uFF59': 'y',
    '\u1EF3': 'y',
    '\u00FD': 'y',
    '\u0177': 'y',
    '\u1EF9': 'y',
    '\u0233': 'y',
    '\u1E8F': 'y',
    '\u00FF': 'y',
    '\u1EF7': 'y',
    '\u1E99': 'y',
    '\u1EF5': 'y',
    '\u01B4': 'y',
    '\u024F': 'y',
    '\u1EFF': 'y',
    '\u24E9': 'z',
    '\uFF5A': 'z',
    '\u017A': 'z',
    '\u1E91': 'z',
    '\u017C': 'z',
    '\u017E': 'z',
    '\u1E93': 'z',
    '\u1E95': 'z',
    '\u01B6': 'z',
    '\u0225': 'z',
    '\u0240': 'z',
    '\u2C6C': 'z',
    '\uA763': 'z',
    '\u0386': '\u0391',
    '\u0388': '\u0395',
    '\u0389': '\u0397',
    '\u038A': '\u0399',
    '\u03AA': '\u0399',
    '\u038C': '\u039F',
    '\u038E': '\u03A5',
    '\u03AB': '\u03A5',
    '\u038F': '\u03A9',
    '\u03AC': '\u03B1',
    '\u03AD': '\u03B5',
    '\u03AE': '\u03B7',
    '\u03AF': '\u03B9',
    '\u03CA': '\u03B9',
    '\u0390': '\u03B9',
    '\u03CC': '\u03BF',
    '\u03CD': '\u03C5',
    '\u03CB': '\u03C5',
    '\u03B0': '\u03C5',
    '\u03C9': '\u03C9',
    '\u03C2': '\u03C3'
};
var OptionList = /** @class */ (function () {
    /**
     * @param {?} options
     */
    function OptionList(options) {
        this._highlightedOption = null;
        if (typeof options === 'undefined' || options === null) {
            options = [];
        }
        this._options = options.map(function (option) {
            var o = new Option(option);
            if (option.disabled) {
                o.disabled = true;
            }
            return o;
        });
        this._hasShown = this._options.length > 0;
        this.highlight();
    }
    Object.defineProperty(OptionList.prototype, "hasShown", {
        /**
         * @return {?}
         */
        get: function () {
            return this._hasShown;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OptionList.prototype, "hasSelected", {
        /**
         * @return {?}
         */
        get: function () {
            return this._hasSelected;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OptionList.prototype, "options", {
        /**
         * Options. *
         * @return {?}
         */
        get: function () {
            return this._options;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} value
     * @return {?}
     */
    OptionList.prototype.getOptionsByValue = function (value) {
        return this.options.filter(function (option) {
            return option.value === value;
        });
    };
    Object.defineProperty(OptionList.prototype, "value", {
        /**
         * Value. *
         * @return {?}
         */
        get: function () {
            return this.selection.map(function (option) { return option.value; });
        },
        /**
         * @param {?} v
         * @return {?}
         */
        set: function (v) {
            v = typeof v === 'undefined' || v === null ? [] : v;
            this.options.forEach(function (option) {
                option.selected = v.indexOf(option.value) > -1;
            });
            this.updateHasSelected();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OptionList.prototype, "selection", {
        /**
         * Selection. *
         * @return {?}
         */
        get: function () {
            return this.options.filter(function (option) { return option.selected; });
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} option
     * @param {?} multiple
     * @return {?}
     */
    OptionList.prototype.select = function (option, multiple) {
        if (!multiple) {
            this.clearSelection();
        }
        option.selected = true;
        this.updateHasSelected();
    };
    /**
     * @param {?} option
     * @return {?}
     */
    OptionList.prototype.deselect = function (option) {
        option.selected = false;
        this.updateHasSelected();
    };
    /**
     * @return {?}
     */
    OptionList.prototype.clearSelection = function () {
        this.options.forEach(function (option) {
            option.selected = false;
        });
        this._hasSelected = false;
    };
    /**
     * @return {?}
     */
    OptionList.prototype.updateHasSelected = function () {
        this._hasSelected = this.options.some(function (option) { return option.selected; });
    };
    Object.defineProperty(OptionList.prototype, "filtered", {
        /**
         * Filter. *
         * @return {?}
         */
        get: function () {
            return this.options.filter(function (option) { return option.shown; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OptionList.prototype, "filteredEnabled", {
        /**
         * @return {?}
         */
        get: function () {
            return this.options.filter(function (option) { return option.shown && !option.disabled; });
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} term
     * @return {?}
     */
    OptionList.prototype.filter = function (term) {
        var /** @type {?} */ anyShown = false;
        if (term.trim() === '') {
            this.resetFilter();
            anyShown = this.options.length > 0;
        }
        else {
            this.options.forEach(function (option) {
                var /** @type {?} */ l = Diacritics.strip(option.label).toUpperCase();
                var /** @type {?} */ t = Diacritics.strip(term).toUpperCase();
                option.shown = l.indexOf(t) > -1;
                if (option.shown) {
                    anyShown = true;
                }
            });
        }
        this.highlight();
        this._hasShown = anyShown;
        return anyShown;
    };
    /**
     * @return {?}
     */
    OptionList.prototype.resetFilter = function () {
        this.options.forEach(function (option) {
            option.shown = true;
        });
    };
    Object.defineProperty(OptionList.prototype, "highlightedOption", {
        /**
         * Highlight. *
         * @return {?}
         */
        get: function () {
            return this._highlightedOption;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    OptionList.prototype.highlight = function () {
        var /** @type {?} */ option = this.hasShownSelected() ?
            this.getFirstShownSelected() : this.getFirstShown();
        this.highlightOption(option);
    };
    /**
     * @param {?} option
     * @return {?}
     */
    OptionList.prototype.highlightOption = function (option) {
        this.clearHighlightedOption();
        if (option !== null) {
            option.highlighted = true;
            this._highlightedOption = option;
        }
    };
    /**
     * @return {?}
     */
    OptionList.prototype.highlightNextOption = function () {
        var /** @type {?} */ shownEnabledOptions = this.filteredEnabled;
        var /** @type {?} */ index = this.getHighlightedIndexFromList(shownEnabledOptions);
        if (index > -1 && index < shownEnabledOptions.length - 1) {
            this.highlightOption(shownEnabledOptions[index + 1]);
        }
    };
    /**
     * @return {?}
     */
    OptionList.prototype.highlightPreviousOption = function () {
        var /** @type {?} */ shownEnabledOptions = this.filteredEnabled;
        var /** @type {?} */ index = this.getHighlightedIndexFromList(shownEnabledOptions);
        if (index > 0) {
            this.highlightOption(shownEnabledOptions[index - 1]);
        }
    };
    /**
     * @return {?}
     */
    OptionList.prototype.clearHighlightedOption = function () {
        if (this.highlightedOption !== null) {
            this.highlightedOption.highlighted = false;
            this._highlightedOption = null;
        }
    };
    /**
     * @param {?} options
     * @return {?}
     */
    OptionList.prototype.getHighlightedIndexFromList = function (options) {
        for (var /** @type {?} */ i = 0; i < options.length; i++) {
            if (options[i].highlighted) {
                return i;
            }
        }
        return -1;
    };
    /**
     * @return {?}
     */
    OptionList.prototype.getHighlightedIndex = function () {
        return this.getHighlightedIndexFromList(this.filtered);
    };
    /**
     * Util. *
     * @return {?}
     */
    OptionList.prototype.hasShownSelected = function () {
        return this.options.some(function (option) {
            return option.shown && option.selected;
        });
    };
    /**
     * @return {?}
     */
    OptionList.prototype.getFirstShown = function () {
        for (var _i = 0, _a = this.options; _i < _a.length; _i++) {
            var option = _a[_i];
            if (option.shown) {
                return option;
            }
        }
        return null;
    };
    /**
     * @return {?}
     */
    OptionList.prototype.getFirstShownSelected = function () {
        for (var _i = 0, _a = this.options; _i < _a.length; _i++) {
            var option = _a[_i];
            if (option.shown && option.selected) {
                return option;
            }
        }
        return null;
    };
    /**
     * @param {?} v0
     * @param {?} v1
     * @return {?}
     */
    OptionList.equalValues = function (v0, v1) {
        if (v0.length !== v1.length) {
            return false;
        }
        var /** @type {?} */ a = v0.slice().sort();
        var /** @type {?} */ b = v1.slice().sort();
        return a.every(function (v, i) {
            return v === b[i];
        });
    };
    return OptionList;
}());
var SELECT_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_2__angular_forms__["NG_VALUE_ACCESSOR"],
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return SelectComponent; }),
    multi: true
};
var SelectComponent = /** @class */ (function () {
    /**
     * @param {?} hostElement
     */
    function SelectComponent(hostElement) {
        this.hostElement = hostElement;
        // Data input.
        this.options = [];
        // Functionality settings.
        this.allowClear = false;
        this.disabled = false;
        this.multiple = false;
        this.noFilter = 0;
        // Text settings.
        this.notFoundMsg = 'No results found';
        this.placeholder = '';
        this.filterPlaceholder = '';
        this.label = '';
        // Output events.
        this.opened = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.closed = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.selected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.deselected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.focus = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.blur = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.noOptionsFound = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this._value = [];
        this.optionList = new OptionList([]);
        // View state variables.
        this.hasFocus = false;
        this.isOpen = false;
        this.isBelow = true;
        this.filterEnabled = true;
        this.filterInputWidth = 1;
        this.isDisabled = false;
        this.placeholderView = '';
        this.clearClicked = false;
        this.selectContainerClicked = false;
        this.optionListClicked = false;
        this.optionClicked = false;
        this.onChange = function (_) { };
        this.onTouched = function () { };
        /**
         * Keys. *
         */
        this.KEYS = {
            BACKSPACE: 8,
            TAB: 9,
            ENTER: 13,
            ESC: 27,
            SPACE: 32,
            UP: 38,
            DOWN: 40
        };
    }
    /**
     * Event handlers. *
     * @return {?}
     */
    SelectComponent.prototype.ngOnInit = function () {
        this.placeholderView = this.placeholder;
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    SelectComponent.prototype.ngOnChanges = function (changes) {
        this.handleInputChanges(changes);
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.ngAfterViewInit = function () {
        this.updateState();
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.onWindowBlur = function () {
        this._blur();
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.onWindowClick = function () {
        if (!this.selectContainerClicked &&
            (!this.optionListClicked || (this.optionListClicked && this.optionClicked))) {
            this.closeDropdown(this.optionClicked);
            if (!this.optionClicked) {
                this._blur();
            }
        }
        this.clearClicked = false;
        this.selectContainerClicked = false;
        this.optionListClicked = false;
        this.optionClicked = false;
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.onWindowResize = function () {
        this.updateWidth();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SelectComponent.prototype.onSelectContainerClick = function (event) {
        this.selectContainerClicked = true;
        if (!this.clearClicked) {
            this.toggleDropdown();
        }
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.onSelectContainerFocus = function () {
        this._focus();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SelectComponent.prototype.onSelectContainerKeydown = function (event) {
        this.handleSelectContainerKeydown(event);
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.onOptionsListClick = function () {
        this.optionListClicked = true;
    };
    /**
     * @param {?} option
     * @return {?}
     */
    SelectComponent.prototype.onDropdownOptionClicked = function (option) {
        this.optionClicked = true;
        this.multiple ? this.toggleSelectOption(option) : this.selectOption(option);
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.onSingleFilterClick = function () {
        this.selectContainerClicked = true;
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.onSingleFilterFocus = function () {
        this._focus();
    };
    /**
     * @param {?} term
     * @return {?}
     */
    SelectComponent.prototype.onFilterInput = function (term) {
        this.filter(term);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SelectComponent.prototype.onSingleFilterKeydown = function (event) {
        this.handleSingleFilterKeydown(event);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SelectComponent.prototype.onMultipleFilterKeydown = function (event) {
        this.handleMultipleFilterKeydown(event);
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.onMultipleFilterFocus = function () {
        this._focus();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SelectComponent.prototype.onClearSelectionClick = function (event) {
        this.clearClicked = true;
        this.clearSelection();
        this.closeDropdown(true);
    };
    /**
     * @param {?} option
     * @return {?}
     */
    SelectComponent.prototype.onDeselectOptionClick = function (option) {
        this.clearClicked = true;
        this.deselectOption(option);
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.open = function () {
        this.openDropdown();
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.close = function () {
        this.closeDropdown(false);
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.clear = function () {
        this.clearSelection();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    SelectComponent.prototype.select = function (value) {
        this.writeValue(value);
    };
    /**
     * ControlValueAccessor interface methods. *
     * @param {?} value
     * @return {?}
     */
    SelectComponent.prototype.writeValue = function (value) {
        this.value = value;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    SelectComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    SelectComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    SelectComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    /**
     * Input change handling. *
     * @param {?} changes
     * @return {?}
     */
    SelectComponent.prototype.handleInputChanges = function (changes) {
        var /** @type {?} */ optionsChanged = changes.hasOwnProperty('options');
        var /** @type {?} */ noFilterChanged = changes.hasOwnProperty('noFilter');
        var /** @type {?} */ placeholderChanged = changes.hasOwnProperty('placeholder');
        if (optionsChanged) {
            this.updateOptionList(changes.options.currentValue);
            this.updateState();
        }
        if (optionsChanged || noFilterChanged) {
            this.updateFilterEnabled();
        }
        if (placeholderChanged) {
            this.updateState();
        }
    };
    /**
     * @param {?} options
     * @return {?}
     */
    SelectComponent.prototype.updateOptionList = function (options) {
        this.optionList = new OptionList(options);
        this.optionList.value = this._value;
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.updateFilterEnabled = function () {
        this.filterEnabled = this.optionList.options.length >= this.noFilter;
    };
    Object.defineProperty(SelectComponent.prototype, "value", {
        /**
         * Value. *
         * @return {?}
         */
        get: function () {
            return this.multiple ? this._value : this._value[0];
        },
        /**
         * @param {?} v
         * @return {?}
         */
        set: function (v) {
            if (typeof v === 'undefined' || v === null || v === '') {
                v = [];
            }
            else if (typeof v === 'string') {
                v = [v];
            }
            else if (!Array.isArray(v)) {
                throw new TypeError('Value must be a string or an array.');
            }
            this.optionList.value = v;
            this._value = v;
            this.updateState();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    SelectComponent.prototype.valueChanged = function () {
        this._value = this.optionList.value;
        this.updateState();
        this.onChange(this.value);
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.updateState = function () {
        var _this = this;
        this.placeholderView = this.optionList.hasSelected ? '' : this.placeholder;
        setTimeout(function () {
            _this.updateFilterWidth();
        });
    };
    /**
     * Select. *
     * @param {?} option
     * @return {?}
     */
    SelectComponent.prototype.selectOption = function (option) {
        if (!option.selected && !option.disabled) {
            this.optionList.select(option, this.multiple);
            this.valueChanged();
            this.selected.emit(option.wrappedOption);
        }
    };
    /**
     * @param {?} option
     * @return {?}
     */
    SelectComponent.prototype.deselectOption = function (option) {
        var _this = this;
        if (option.selected) {
            this.optionList.deselect(option);
            this.valueChanged();
            this.deselected.emit(option.wrappedOption);
            setTimeout(function () {
                if (_this.multiple) {
                    _this.updatePosition();
                    _this.optionList.highlight();
                    if (_this.isOpen) {
                        _this.dropdown.moveHighlightedIntoView();
                    }
                }
            });
        }
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.clearSelection = function () {
        var /** @type {?} */ selection = this.optionList.selection;
        if (selection.length > 0) {
            this.optionList.clearSelection();
            this.valueChanged();
            if (selection.length === 1) {
                this.deselected.emit(selection[0].wrappedOption);
            }
            else {
                this.deselected.emit(selection.map(function (option) { return option.wrappedOption; }));
            }
        }
    };
    /**
     * @param {?} option
     * @return {?}
     */
    SelectComponent.prototype.toggleSelectOption = function (option) {
        option.selected ? this.deselectOption(option) : this.selectOption(option);
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.selectHighlightedOption = function () {
        var /** @type {?} */ option = this.optionList.highlightedOption;
        if (option !== null) {
            this.selectOption(option);
            this.closeDropdown(true);
        }
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.deselectLast = function () {
        var /** @type {?} */ sel = this.optionList.selection;
        if (sel.length > 0) {
            var /** @type {?} */ option = sel[sel.length - 1];
            this.deselectOption(option);
            this.setMultipleFilterInput(option.label + ' ');
        }
    };
    /**
     * Dropdown. *
     * @return {?}
     */
    SelectComponent.prototype.toggleDropdown = function () {
        if (!this.isDisabled) {
            this.isOpen ? this.closeDropdown(true) : this.openDropdown();
        }
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.openDropdown = function () {
        if (!this.isOpen) {
            this.updateWidth();
            this.updatePosition();
            this.isOpen = true;
            if (this.multiple && this.filterEnabled) {
                this.filterInput.nativeElement.focus();
            }
            this.opened.emit(null);
        }
    };
    /**
     * @param {?} focus
     * @return {?}
     */
    SelectComponent.prototype.closeDropdown = function (focus) {
        if (this.isOpen) {
            this.clearFilterInput();
            this.updateFilterWidth();
            this.isOpen = false;
            if (focus) {
                this._focusSelectContainer();
            }
            this.closed.emit(null);
        }
    };
    /**
     * Filter. *
     * @param {?} term
     * @return {?}
     */
    SelectComponent.prototype.filter = function (term) {
        var _this = this;
        if (this.multiple) {
            if (!this.isOpen) {
                this.openDropdown();
            }
            this.updateFilterWidth();
        }
        setTimeout(function () {
            var /** @type {?} */ hasShown = _this.optionList.filter(term);
            if (!hasShown) {
                _this.noOptionsFound.emit(term);
            }
        });
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.clearFilterInput = function () {
        if (this.multiple && this.filterEnabled) {
            this.filterInput.nativeElement.value = '';
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    SelectComponent.prototype.setMultipleFilterInput = function (value) {
        if (this.filterEnabled) {
            this.filterInput.nativeElement.value = value;
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SelectComponent.prototype.handleSelectContainerKeydown = function (event) {
        var _this = this;
        var /** @type {?} */ key = event.which;
        if (this.isOpen) {
            if (key === this.KEYS.ESC || (key === this.KEYS.UP && event.altKey)) {
                this.closeDropdown(true);
            }
            else if (key === this.KEYS.TAB) {
                this.closeDropdown(event.shiftKey);
                this._blur();
            }
            else if (key === this.KEYS.ENTER) {
                this.selectHighlightedOption();
            }
            else if (key === this.KEYS.UP) {
                this.optionList.highlightPreviousOption();
                this.dropdown.moveHighlightedIntoView();
                if (!this.filterEnabled) {
                    event.preventDefault();
                }
            }
            else if (key === this.KEYS.DOWN) {
                this.optionList.highlightNextOption();
                this.dropdown.moveHighlightedIntoView();
                if (!this.filterEnabled) {
                    event.preventDefault();
                }
            }
        }
        else {
            // DEPRICATED --> SPACE
            if (key === this.KEYS.ENTER || key === this.KEYS.SPACE ||
                (key === this.KEYS.DOWN && event.altKey)) {
                /* FIREFOX HACK:
                 *
                 * The setTimeout is added to prevent the enter keydown event
                 * to be triggered for the filter input field, which causes
                 * the dropdown to be closed again.
                 */
                setTimeout(function () { _this.openDropdown(); });
            }
            else if (key === this.KEYS.TAB) {
                this._blur();
            }
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SelectComponent.prototype.handleMultipleFilterKeydown = function (event) {
        var /** @type {?} */ key = event.which;
        if (key === this.KEYS.BACKSPACE) {
            if (this.optionList.hasSelected && this.filterEnabled &&
                this.filterInput.nativeElement.value === '') {
                this.deselectLast();
            }
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SelectComponent.prototype.handleSingleFilterKeydown = function (event) {
        var /** @type {?} */ key = event.which;
        if (key === this.KEYS.ESC || key === this.KEYS.TAB
            || key === this.KEYS.UP || key === this.KEYS.DOWN
            || key === this.KEYS.ENTER) {
            this.handleSelectContainerKeydown(event);
        }
    };
    /**
     * View. *
     * @return {?}
     */
    SelectComponent.prototype._blur = function () {
        if (this.hasFocus) {
            this.hasFocus = false;
            this.onTouched();
            this.blur.emit(null);
        }
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype._focus = function () {
        if (!this.hasFocus) {
            this.hasFocus = true;
            this.focus.emit(null);
        }
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype._focusSelectContainer = function () {
        this.selectionSpan.nativeElement.focus();
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.updateWidth = function () {
        this.width = this.selectionSpan.nativeElement.getBoundingClientRect().width;
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.updatePosition = function () {
        var /** @type {?} */ hostRect = this.hostElement.nativeElement.getBoundingClientRect();
        var /** @type {?} */ spanRect = this.selectionSpan.nativeElement.getBoundingClientRect();
        this.left = spanRect.left - hostRect.left;
        this.top = (spanRect.top - hostRect.top) + spanRect.height;
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.updateFilterWidth = function () {
        if (typeof this.filterInput !== 'undefined') {
            var /** @type {?} */ value = this.filterInput.nativeElement.value;
            this.filterInputWidth = value.length === 0 ?
                1 + this.placeholderView.length * 10 : 1 + value.length * 10;
        }
    };
    return SelectComponent;
}());
SelectComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'ng-select',
                template: "\n      <label\n          *ngIf=\"label !== ''\">\n          {{label}}\n      </label>\n      <div\n          #selection\n          [attr.tabindex]=\"disabled ? null : 0\"\n          [ngClass]=\"{'open': isOpen, 'focus': hasFocus, 'below': isBelow, 'disabled': disabled}\"\n          (click)=\"onSelectContainerClick($event)\"\n          (focus)=\"onSelectContainerFocus()\"\n          (keydown)=\"onSelectContainerKeydown($event)\">\n\n          <div class=\"single\"\n              *ngIf=\"!multiple\">\n              <div class=\"value\"\n                  *ngIf=\"optionList.hasSelected\">\n                  <ng-container *ngTemplateOutlet=\"optionTemplate; context:{option: optionList.selection[0].wrappedOption, onDeselectOptionClick: onDeselectOptionClick}\"></ng-container>\n                  <span *ngIf=\"!optionTemplate\">{{optionList.selection[0].label}}</span>\n              </div>\n              <div class=\"placeholder\"\n                  *ngIf=\"!optionList.hasSelected\">\n                  {{placeholderView}}\n              </div>\n              <div class=\"clear\"\n                  *ngIf=\"allowClear && optionList.hasSelected\"\n                  (click)=\"onClearSelectionClick($event)\">\n                  &#x2715;\n              </div>\n              <div class=\"toggle\"\n                  *ngIf=\"isOpen\">\n                  &#x25B2;\n              </div>\n              <div class=\"toggle\"\n                  *ngIf=\"!isOpen\">\n                  &#x25BC;\n              </div>\n          </div>\n\n          <div class=\"multiple\"\n              *ngIf=\"multiple\">\n              <div class=\"option\"\n                  *ngFor=\"let option of optionList.selection\">\n                  <span class=\"deselect-option\"\n                      (click)=onDeselectOptionClick(option)>\n                      &#x2715;\n                  </span>\n                  {{option.label}}\n              </div>\n              <div class=\"placeholder\"\n                  *ngIf=\"!filterEnabled && !optionList.hasSelected\">\n                  {{placeholderView}}\n              </div>\n              <input\n                  *ngIf=\"filterEnabled\"\n                  #filterInput\n                  autocomplete=\"off\"\n                  tabindex=\"-1\"\n                  [placeholder]=\"placeholderView\"\n                  [ngStyle]=\"{'width.px': filterInputWidth}\"\n                  (input)=\"onFilterInput($event.target.value)\"\n                  (keydown)=\"onMultipleFilterKeydown($event)\"\n                  (focus)=\"onMultipleFilterFocus()\"/>\n          </div>\n\n      </div>\n      <select-dropdown\n          *ngIf=\"isOpen\"\n          #dropdown\n          [multiple]=\"multiple\"\n          [optionList]=\"optionList\"\n          [notFoundMsg]=\"notFoundMsg\"\n          [highlightColor]=\"highlightColor\"\n          [highlightTextColor]=\"highlightTextColor\"\n          [filterEnabled]=\"filterEnabled\"\n          [placeholder]=\"filterPlaceholder\"\n          [width]=\"width\"\n          [top]=\"top\"\n          [left]=\"left\"\n          [optionTemplate]=\"optionTemplate\"\n          (optionClicked)=\"onDropdownOptionClicked($event)\"\n          (optionsListClick)=\"onOptionsListClick()\"\n          (singleFilterClick)=\"onSingleFilterClick()\"\n          (singleFilterFocus)=\"onSingleFilterFocus()\"\n          (singleFilterInput)=\"onFilterInput($event)\"\n          (singleFilterKeydown)=\"onSingleFilterKeydown($event)\">\n      </select-dropdown>\n    ",
                styles: ["\n      ng-select {\n        display: inline-block;\n        margin: 0;\n        position: relative;\n        vertical-align: middle;\n        width: 100%; }\n        ng-select * {\n          -webkit-box-sizing: border-box;\n                  box-sizing: border-box; }\n        ng-select > div {\n          border: 1px solid #ddd;\n          -webkit-box-sizing: border-box;\n                  box-sizing: border-box;\n          cursor: pointer;\n          -webkit-user-select: none;\n             -moz-user-select: none;\n              -ms-user-select: none;\n                  user-select: none;\n          width: 100%; }\n          ng-select > div.disabled {\n            background-color: #eee;\n            color: #aaa;\n            cursor: default;\n            pointer-events: none; }\n          ng-select > div > div.single {\n            display: -webkit-box;\n            display: -ms-flexbox;\n            display: flex;\n            height: 30px;\n            width: 100%; }\n            ng-select > div > div.single > div.value,\n            ng-select > div > div.single > div.placeholder {\n              -webkit-box-flex: 1;\n                  -ms-flex: 1;\n                      flex: 1;\n              line-height: 30px;\n              overflow: hidden;\n              padding: 0 10px;\n              white-space: nowrap; }\n            ng-select > div > div.single > div.placeholder {\n              color: #757575; }\n            ng-select > div > div.single > div.clear,\n            ng-select > div > div.single > div.toggle {\n              color: #aaa;\n              line-height: 30px;\n              text-align: center;\n              width: 30px; }\n              ng-select > div > div.single > div.clear:hover,\n              ng-select > div > div.single > div.toggle:hover {\n                background-color: #ececec; }\n            ng-select > div > div.single > div.clear {\n              font-size: 18px; }\n            ng-select > div > div.single > div.toggle {\n              font-size: 14px; }\n          ng-select > div > div.multiple {\n            display: -webkit-box;\n            display: -ms-flexbox;\n            display: flex;\n            -webkit-box-orient: horizontal;\n            -webkit-box-direction: normal;\n                -ms-flex-flow: row wrap;\n                    flex-flow: row wrap;\n            height: 100%;\n            min-height: 30px;\n            padding: 0 10px;\n            width: 100%; }\n            ng-select > div > div.multiple > div.option {\n              background-color: #eee;\n              border: 1px solid #aaa;\n              border-radius: 4px;\n              color: #333;\n              cursor: default;\n              display: inline-block;\n              -ms-flex-negative: 0;\n                  flex-shrink: 0;\n              font-size: 14px;\n              line-height: 22px;\n              margin: 3px 5px 3px 0;\n              padding: 0 4px; }\n              ng-select > div > div.multiple > div.option span.deselect-option {\n                color: #aaa;\n                cursor: pointer;\n                font-size: 14px;\n                height: 20px;\n                line-height: 20px; }\n                ng-select > div > div.multiple > div.option span.deselect-option:hover {\n                  color: #555; }\n            ng-select > div > div.multiple input {\n              background-color: transparent;\n              border: none;\n              cursor: pointer;\n              height: 30px;\n              line-height: 30px;\n              padding: 0; }\n              ng-select > div > div.multiple input:focus {\n                outline: none; }\n        ng-select label {\n          color: rgba(0, 0, 0, 0.38);\n          display: block;\n          font-size: 13px;\n          padding: 4px 0; }\n    "],
                providers: [SELECT_VALUE_ACCESSOR],
                encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
            },] },
];
/**
 * @nocollapse
 */
SelectComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
]; };
SelectComponent.propDecorators = {
    'options': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'allowClear': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'disabled': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'multiple': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'noFilter': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'highlightColor': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'highlightTextColor': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'notFoundMsg': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'placeholder': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'filterPlaceholder': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'label': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'opened': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'closed': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'selected': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'deselected': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'focus': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'blur': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'noOptionsFound': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'selectionSpan': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"], args: ['selection',] },],
    'dropdown': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"], args: ['dropdown',] },],
    'filterInput': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"], args: ['filterInput',] },],
    'optionTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ContentChild"], args: ['optionTemplate',] },],
    'onWindowBlur': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['window:blur',] },],
    'onWindowClick': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['window:click',] },],
    'onWindowResize': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['window:resize',] },],
};
var SelectDropdownComponent = /** @class */ (function () {
    function SelectDropdownComponent() {
        this.optionClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.optionsListClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.singleFilterClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.singleFilterFocus = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.singleFilterInput = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.singleFilterKeydown = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.disabledColor = '#fff';
        this.disabledTextColor = '9e9e9e';
    }
    /**
     * Event handlers. *
     * @return {?}
     */
    SelectDropdownComponent.prototype.ngOnInit = function () {
        this.optionsReset();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    SelectDropdownComponent.prototype.ngOnChanges = function (changes) {
        if (changes.hasOwnProperty('optionList')) {
            this.optionsReset();
        }
    };
    /**
     * @return {?}
     */
    SelectDropdownComponent.prototype.ngAfterViewInit = function () {
        this.moveHighlightedIntoView();
        if (!this.multiple && this.filterEnabled) {
            this.filterInput.nativeElement.focus();
        }
    };
    /**
     * @return {?}
     */
    SelectDropdownComponent.prototype.onOptionsListClick = function () {
        this.optionsListClick.emit(null);
    };
    /**
     * @return {?}
     */
    SelectDropdownComponent.prototype.onSingleFilterClick = function () {
        this.singleFilterClick.emit(null);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SelectDropdownComponent.prototype.onSingleFilterInput = function (event) {
        this.singleFilterInput.emit(event.target.value);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SelectDropdownComponent.prototype.onSingleFilterKeydown = function (event) {
        this.singleFilterKeydown.emit(event);
    };
    /**
     * @return {?}
     */
    SelectDropdownComponent.prototype.onSingleFilterFocus = function () {
        this.singleFilterFocus.emit(null);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SelectDropdownComponent.prototype.onOptionsWheel = function (event) {
        this.handleOptionsWheel(event);
    };
    /**
     * @param {?} option
     * @return {?}
     */
    SelectDropdownComponent.prototype.onOptionMouseover = function (option) {
        this.optionList.highlightOption(option);
    };
    /**
     * @param {?} option
     * @return {?}
     */
    SelectDropdownComponent.prototype.onOptionClick = function (option) {
        this.optionClicked.emit(option);
    };
    /**
     * Initialization. *
     * @return {?}
     */
    SelectDropdownComponent.prototype.optionsReset = function () {
        this.optionList.filter('');
        this.optionList.highlight();
    };
    /**
     * View. *
     * @param {?} option
     * @return {?}
     */
    SelectDropdownComponent.prototype.getOptionStyle = function (option) {
        if (option.highlighted) {
            var /** @type {?} */ style = {};
            if (typeof this.highlightColor !== 'undefined') {
                style['background-color'] = this.highlightColor;
            }
            if (typeof this.highlightTextColor !== 'undefined') {
                style['color'] = this.highlightTextColor;
            }
            return style;
        }
        else {
            return {};
        }
    };
    /**
     * @return {?}
     */
    SelectDropdownComponent.prototype.moveHighlightedIntoView = function () {
        var /** @type {?} */ list = this.optionsList.nativeElement;
        var /** @type {?} */ listHeight = list.offsetHeight;
        var /** @type {?} */ itemIndex = this.optionList.getHighlightedIndex();
        if (itemIndex > -1) {
            var /** @type {?} */ item = list.children[0].children[itemIndex];
            var /** @type {?} */ itemHeight = item.offsetHeight;
            var /** @type {?} */ itemTop = itemIndex * itemHeight;
            var /** @type {?} */ itemBottom = itemTop + itemHeight;
            var /** @type {?} */ viewTop = list.scrollTop;
            var /** @type {?} */ viewBottom = viewTop + listHeight;
            if (itemBottom > viewBottom) {
                list.scrollTop = itemBottom - listHeight;
            }
            else if (itemTop < viewTop) {
                list.scrollTop = itemTop;
            }
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    SelectDropdownComponent.prototype.handleOptionsWheel = function (e) {
        var /** @type {?} */ div = this.optionsList.nativeElement;
        var /** @type {?} */ atTop = div.scrollTop === 0;
        var /** @type {?} */ atBottom = div.offsetHeight + div.scrollTop === div.scrollHeight;
        if (atTop && e.deltaY < 0) {
            e.preventDefault();
        }
        else if (atBottom && e.deltaY > 0) {
            e.preventDefault();
        }
    };
    return SelectDropdownComponent;
}());
SelectDropdownComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'select-dropdown',
                template: "\n      <div\n          [ngStyle]=\"{'top.px': top, 'left.px': left, 'width.px': width}\">\n\n          <div class=\"filter\"\n              *ngIf=\"!multiple && filterEnabled\">\n              <input\n                  #filterInput\n                  autocomplete=\"off\"\n                  [placeholder]=\"placeholder\"\n                  (click)=\"onSingleFilterClick()\"\n                  (input)=\"onSingleFilterInput($event)\"\n                  (keydown)=\"onSingleFilterKeydown($event)\"\n                  (focus)=\"onSingleFilterFocus()\">\n          </div>\n\n          <div class=\"options\"\n              (click)=\"onOptionsListClick()\"\n              #optionsList>\n              <ul\n                  (wheel)=\"onOptionsWheel($event)\">\n                  <li *ngFor=\"let option of optionList.filtered\"\n                      [ngClass]=\"{'highlighted': option.highlighted, 'selected': option.selected, 'disabled': option.disabled}\"\n                      [ngStyle]=\"getOptionStyle(option)\"\n                      (click)=\"onOptionClick(option)\"\n                      (mouseover)=\"onOptionMouseover(option)\">\n                      <ng-container *ngTemplateOutlet=\"optionTemplate; context:{option: option.wrappedOption}\"></ng-container>\n                      <span *ngIf=\"!optionTemplate\">{{option.label}}</span>\n                  </li>\n                  <li\n                      *ngIf=\"!optionList.hasShown\"\n                      class=\"message\">\n                      {{notFoundMsg}}\n                  </li>\n              </ul>\n          </div>\n      </div>\n    ",
                styles: ["\n      select-dropdown {\n        -webkit-box-sizing: border-box;\n                box-sizing: border-box; }\n        select-dropdown * {\n          -webkit-box-sizing: border-box;\n                  box-sizing: border-box; }\n        select-dropdown > div {\n          background-color: #fff;\n          border: 1px solid #ccc;\n          border-top: none;\n          -webkit-box-sizing: border-box;\n                  box-sizing: border-box;\n          position: absolute;\n          z-index: 1; }\n          select-dropdown > div .filter {\n            padding: 3px;\n            width: 100%; }\n            select-dropdown > div .filter input {\n              border: 1px solid #eee;\n              -webkit-box-sizing: border-box;\n                      box-sizing: border-box;\n              padding: 4px;\n              width: 100%; }\n          select-dropdown > div .options {\n            max-height: 200px;\n            overflow-y: auto; }\n            select-dropdown > div .options ul {\n              list-style: none;\n              margin: 0;\n              padding: 0; }\n              select-dropdown > div .options ul li {\n                padding: 4px 8px;\n                cursor: pointer;\n                -webkit-user-select: none;\n                   -moz-user-select: none;\n                    -ms-user-select: none;\n                        user-select: none; }\n        select-dropdown .selected {\n          background-color: #e0e0e0; }\n          select-dropdown .selected.highlighted {\n            background-color: #2196F3;\n            color: #fff; }\n        select-dropdown .highlighted {\n          background-color: #2196F3;\n          color: #fff; }\n        select-dropdown .disabled {\n          background-color: #fff;\n          color: #9e9e9e;\n          cursor: default;\n          pointer-events: none; }\n    "],
                encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
            },] },
];
/**
 * @nocollapse
 */
SelectDropdownComponent.ctorParameters = function () { return []; };
SelectDropdownComponent.propDecorators = {
    'filterEnabled': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'highlightColor': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'highlightTextColor': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'left': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'multiple': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'notFoundMsg': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'optionList': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'top': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'width': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'placeholder': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'optionTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'optionClicked': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'optionsListClick': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'singleFilterClick': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'singleFilterFocus': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'singleFilterInput': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'singleFilterKeydown': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'filterInput': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"], args: ['filterInput',] },],
    'optionsList': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"], args: ['optionsList',] },],
};
var SelectModule = /** @class */ (function () {
    function SelectModule() {
    }
    return SelectModule;
}());
SelectModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                declarations: [
                    SelectComponent,
                    SelectDropdownComponent
                ],
                exports: [
                    SelectComponent
                ],
                imports: [
                    __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"]
                ]
            },] },
];
/**
 * @nocollapse
 */
SelectModule.ctorParameters = function () { return []; };
/**
 * Generated bundle index. Do not edit.
 */

//# sourceMappingURL=ng-select.es5.js.map


/***/ }),

/***/ "../../../../rxjs/_esm5/add/observable/of.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._observable_of PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].of = __WEBPACK_IMPORTED_MODULE_1__observable_of__["a" /* of */];
//# sourceMappingURL=of.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/add/operator/debounceTime.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_debounceTime__ = __webpack_require__("../../../../rxjs/_esm5/operator/debounceTime.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_debounceTime PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.debounceTime = __WEBPACK_IMPORTED_MODULE_1__operator_debounceTime__["a" /* debounceTime */];
//# sourceMappingURL=debounceTime.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/add/operator/distinctUntilChanged.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_distinctUntilChanged__ = __webpack_require__("../../../../rxjs/_esm5/operator/distinctUntilChanged.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_distinctUntilChanged PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.distinctUntilChanged = __WEBPACK_IMPORTED_MODULE_1__operator_distinctUntilChanged__["a" /* distinctUntilChanged */];
//# sourceMappingURL=distinctUntilChanged.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/add/operator/do.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_do__ = __webpack_require__("../../../../rxjs/_esm5/operator/do.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_do PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.do = __WEBPACK_IMPORTED_MODULE_1__operator_do__["a" /* _do */];
__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype._do = __WEBPACK_IMPORTED_MODULE_1__operator_do__["a" /* _do */];
//# sourceMappingURL=do.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/add/operator/first.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_first__ = __webpack_require__("../../../../rxjs/_esm5/operator/first.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_first PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.first = __WEBPACK_IMPORTED_MODULE_1__operator_first__["a" /* first */];
//# sourceMappingURL=first.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/add/operator/switchMap.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_switchMap__ = __webpack_require__("../../../../rxjs/_esm5/operator/switchMap.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_switchMap PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.switchMap = __WEBPACK_IMPORTED_MODULE_1__operator_switchMap__["a" /* switchMap */];
//# sourceMappingURL=switchMap.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operator/debounceTime.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = debounceTime;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scheduler_async__ = __webpack_require__("../../../../rxjs/_esm5/scheduler/async.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operators_debounceTime__ = __webpack_require__("../../../../rxjs/_esm5/operators/debounceTime.js");
/** PURE_IMPORTS_START .._scheduler_async,.._operators_debounceTime PURE_IMPORTS_END */


/**
 * Emits a value from the source Observable only after a particular time span
 * has passed without another source emission.
 *
 * <span class="informal">It's like {@link delay}, but passes only the most
 * recent value from each burst of emissions.</span>
 *
 * <img src="./img/debounceTime.png" width="100%">
 *
 * `debounceTime` delays values emitted by the source Observable, but drops
 * previous pending delayed emissions if a new value arrives on the source
 * Observable. This operator keeps track of the most recent value from the
 * source Observable, and emits that only when `dueTime` enough time has passed
 * without any other value appearing on the source Observable. If a new value
 * appears before `dueTime` silence occurs, the previous value will be dropped
 * and will not be emitted on the output Observable.
 *
 * This is a rate-limiting operator, because it is impossible for more than one
 * value to be emitted in any time window of duration `dueTime`, but it is also
 * a delay-like operator since output emissions do not occur at the same time as
 * they did on the source Observable. Optionally takes a {@link IScheduler} for
 * managing timers.
 *
 * @example <caption>Emit the most recent click after a burst of clicks</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.debounceTime(1000);
 * result.subscribe(x => console.log(x));
 *
 * @see {@link auditTime}
 * @see {@link debounce}
 * @see {@link delay}
 * @see {@link sampleTime}
 * @see {@link throttleTime}
 *
 * @param {number} dueTime The timeout duration in milliseconds (or the time
 * unit determined internally by the optional `scheduler`) for the window of
 * time required to wait for emission silence before emitting the most recent
 * source value.
 * @param {Scheduler} [scheduler=async] The {@link IScheduler} to use for
 * managing the timers that handle the timeout for each value.
 * @return {Observable} An Observable that delays the emissions of the source
 * Observable by the specified `dueTime`, and may drop some values if they occur
 * too frequently.
 * @method debounceTime
 * @owner Observable
 */
function debounceTime(dueTime, scheduler) {
    if (scheduler === void 0) {
        scheduler = __WEBPACK_IMPORTED_MODULE_0__scheduler_async__["a" /* async */];
    }
    return Object(__WEBPACK_IMPORTED_MODULE_1__operators_debounceTime__["a" /* debounceTime */])(dueTime, scheduler)(this);
}
//# sourceMappingURL=debounceTime.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operator/distinctUntilChanged.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = distinctUntilChanged;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_distinctUntilChanged__ = __webpack_require__("../../../../rxjs/_esm5/operators/distinctUntilChanged.js");
/** PURE_IMPORTS_START .._operators_distinctUntilChanged PURE_IMPORTS_END */

/* tslint:enable:max-line-length */
/**
 * Returns an Observable that emits all items emitted by the source Observable that are distinct by comparison from the previous item.
 *
 * If a comparator function is provided, then it will be called for each item to test for whether or not that value should be emitted.
 *
 * If a comparator function is not provided, an equality check is used by default.
 *
 * @example <caption>A simple example with numbers</caption>
 * Observable.of(1, 1, 2, 2, 2, 1, 1, 2, 3, 3, 4)
 *   .distinctUntilChanged()
 *   .subscribe(x => console.log(x)); // 1, 2, 1, 2, 3, 4
 *
 * @example <caption>An example using a compare function</caption>
 * interface Person {
 *    age: number,
 *    name: string
 * }
 *
 * Observable.of<Person>(
 *     { age: 4, name: 'Foo'},
 *     { age: 7, name: 'Bar'},
 *     { age: 5, name: 'Foo'})
 *     { age: 6, name: 'Foo'})
 *     .distinctUntilChanged((p: Person, q: Person) => p.name === q.name)
 *     .subscribe(x => console.log(x));
 *
 * // displays:
 * // { age: 4, name: 'Foo' }
 * // { age: 7, name: 'Bar' }
 * // { age: 5, name: 'Foo' }
 *
 * @see {@link distinct}
 * @see {@link distinctUntilKeyChanged}
 *
 * @param {function} [compare] Optional comparison function called to test if an item is distinct from the previous item in the source.
 * @return {Observable} An Observable that emits items from the source Observable with distinct values.
 * @method distinctUntilChanged
 * @owner Observable
 */
function distinctUntilChanged(compare, keySelector) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__operators_distinctUntilChanged__["a" /* distinctUntilChanged */])(compare, keySelector)(this);
}
//# sourceMappingURL=distinctUntilChanged.js.map 


/***/ })

});
//# sourceMappingURL=form-select.module.chunk.js.map