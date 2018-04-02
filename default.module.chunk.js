webpackJsonp(["default.module"],{

/***/ "../../../../../src/app/theme/dashboard/default/default-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DefaultRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__default_component__ = __webpack_require__("../../../../../src/app/theme/dashboard/default/default.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__default_component__["a" /* DefaultComponent */],
        data: {
            title: 'Default',
            icon: 'icon-home',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
            status: false
        }
    }
];
var DefaultRoutingModule = (function () {
    function DefaultRoutingModule() {
    }
    DefaultRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
        })
    ], DefaultRoutingModule);
    return DefaultRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/theme/dashboard/default/default.component.html":
/***/ (function(module, exports) {

module.exports = "<simple-notifications [options]=\"options\"></simple-notifications>\r\n<div class=\"page-body\">\r\n  <div class=\"row\">\r\n    <!-- order-card start -->\r\n    <div class=\"col-md-6 col-xl-3\">\r\n      <div class=\"card bg-c-blue order-card\">\r\n        <div class=\"card-block\">\r\n          <h6 class=\"m-b-20\">BTC Received</h6>\r\n          <h2 class=\"text-right\"><img class=\"coin-images\" src=\"assets/images/btc.png\"><span>32</span></h2>\r\n         <!--  <p class=\"m-b-0\">Completed Orders<span class=\"f-right\">351</span></p> -->\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-6 col-xl-3\">\r\n      <div class=\"card bg-c-green order-card\">\r\n        <div class=\"card-block\">\r\n          <h6 class=\"m-b-20\">LTC Received</h6>\r\n          <h2 class=\"text-right\"><img class=\"coin-images\" src=\"assets/images/ltc.png\"><span>24</span></h2>\r\n        <!--   <p class=\"m-b-0\">This Month<span class=\"f-right\">213</span></p> -->\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-6 col-xl-3\">\r\n      <div class=\"card bg-c-yellow order-card\">\r\n        <div class=\"card-block\">\r\n          <h6 class=\"m-b-20\">ETH Recieved</h6>\r\n          <h2 class=\"text-right\"><img class=\"coin-images\" src=\"assets/images/eth.png\"><span>108</span></h2>\r\n        <!--   <p class=\"m-b-0\">This Month<span class=\"f-right\">$5,032</span></p> -->\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-6 col-xl-3\">\r\n      <div class=\"card bg-c-pink order-card\">\r\n        <div class=\"card-block\">\r\n          <h6 class=\"m-b-20\">BCH Recieved</h6>\r\n          <h2 class=\"text-right\"><img class=\"coin-images\" src=\"assets/images/bch.png\"><span>12</span></h2>\r\n        <!--   <p class=\"m-b-0\">This Month<span class=\"f-right\">$542</span></p> -->\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- order-card end -->\r\n\r\n    <!-- statustic and process start -->\r\n    <div class=\"col-lg-8 col-md-12\">\r\n     <!--  <app-card [title]=\"'Statistics'\" [cardOptionBlock]=\"true\">\r\n        <div #statisticsChart >\r\n          <div id=\"statistics_chart\" style=\"height: 350px\"></div>\r\n        </div>\r\n      </app-card> -->\r\n\r\n      <app-card [title]=\"'Investment Stats'\">\r\n          <div #studentChart>\r\n            <chart id=\"student_chart\" [type]=\"'line'\" [data]=\"studentChartData\" [options]=\"studentChartOption\"></chart>\r\n          </div>\r\n        </app-card>\r\n\r\n    </div>\r\n    <div class=\"col-lg-4 col-md-12\">\r\n\r\n        <div class=\"card seo-card\">\r\n            <img src=\"assets/images/widget/seoimg2.jpg\" alt=\"seo bg\" class=\"img-fluid\">\r\n            <div class=\"overlay-bg\"></div>\r\n            <div class=\"card-block seo-content\">\r\n              <h6>Tokens Sold</h6>\r\n              <p class=\"m-b-5 m-t-30\">1000000</p>\r\n              <p class=\"m-b-0\"></p>\r\n            </div>\r\n          </div>\r\n\r\n     <!--  <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h5>Customer Feedback</h5>\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <span class=\"d-block text-c-blue f-24 f-w-600 text-center\">365247</span>\r\n          <div #feedbackChart>\r\n            <chart id=\"feedback_chart\" [type]=\"'doughnut'\" [data]=\"feedbackData\" [options]=\"feedbackOption\"></chart>\r\n          </div>\r\n          <div class=\"row justify-content-center m-t-15\">\r\n            <div class=\"col-auto b-r-default m-t-5 m-b-5\">\r\n              <h4>83%</h4>\r\n              <p class=\"text-success m-b-0\"><i class=\"icon-hand-point-up m-r-5\"></i>Positive</p>\r\n            </div>\r\n            <div class=\"col-auto m-t-5 m-b-5\">\r\n              <h4>17%</h4>\r\n              <p class=\"text-danger m-b-0\"><i class=\"icon-hand-point-down m-r-5\"></i>Negative</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div> -->\r\n    </div>\r\n    <!-- statistic and process end -->\r\n   <!--  <div class=\"col-md-6 col-xl-3\">\r\n      <div class=\"card seo-card o-hidden\">\r\n        <div class=\"card-block seo-statustic\">\r\n          <i class=\"icon-server text-c-green\"></i>\r\n          <h5>65%</h5>\r\n          <p>Memory Usage</p>\r\n        </div>\r\n        <div class=\"seo-chart\" #seoCard1Chart>\r\n          <chart id=\"seo-card1\" [type]=\"'line'\" [data]=\"seoCard1Data\" [options]=\"seoCard1Option\"></chart>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-6 col-xl-3\">\r\n      <div class=\"card seo-card o-hidden\">\r\n        <div class=\"card-block seo-statustic\">\r\n          <i class=\"icon-reload text-c-blue\"></i>\r\n          <h5>$46,845</h5>\r\n          <p>Revenue</p>\r\n        </div>\r\n        <div class=\"seo-chart\" #seoCard2Chart>\r\n          <chart id=\"seo-card2\" [type]=\"'line'\" [data]=\"seoCard2Data\" [options]=\"seoCard2Option\"></chart>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-6 col-xl-3\">\r\n      <div class=\"card seo-card\">\r\n        <img src=\"assets/images/widget/seoimg2.jpg\" alt=\"seo bg\" class=\"img-fluid\">\r\n        <div class=\"overlay-bg\"></div>\r\n        <div class=\"card-block seo-content\">\r\n          <h6>New Users</h6>\r\n          <p class=\"m-b-5 m-t-30\"><i class=\"fa fa-caret-up text-c-green m-r-10\"></i> +52%</p>\r\n          <p class=\"m-b-0\">Calculated in 7 days</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-md-6 col-xl-3\">\r\n      <div class=\"card seo-card\">\r\n        <img src=\"assets/images/widget/seoimg3.jpg\" alt=\"seo bg\" class=\"img-fluid\">\r\n        <div class=\"overlay-bg\"></div>\r\n        <div class=\"card-block seo-content\">\r\n          <h6>Bounce Rate</h6>\r\n          <p class=\"m-b-5 m-t-30\"><i class=\"fa fa-caret-down text-c-pink m-r-10\"></i> -82%</p>\r\n          <p class=\"m-b-0\">Calculated in 7 days</p>\r\n        </div>\r\n      </div>\r\n    </div> -->\r\n\r\n    <!-- tabs card start -->\r\n  <!--   <div class=\"col-sm-12\">\r\n      <app-card [cardClass]=\"'tab-card'\" [cardOptionBlock]=\"true\">\r\n        <div class=\"md-tabs\">\r\n          <ngb-tabset>\r\n            <ngb-tab title=\"Home\">\r\n              <ng-template ngbTabContent>\r\n                <div [@fadeInOutTranslate] class=\"m-t-15\">\r\n                  <div class=\"table-responsive\">\r\n                    <table class=\"table\">\r\n                      <tr>\r\n                        <th>Image</th>\r\n                        <th>Product Code</th>\r\n                        <th>Customer</th>\r\n                        <th>Purchased On</th>\r\n                        <th>Status</th>\r\n                        <th>Transaction ID</th>\r\n                      </tr>\r\n                      <tr>\r\n                        <td><img src=\"assets/images/product/prod2.jpg\" alt=\"prod img\" class=\"img-fluid\"></td>\r\n                        <td>PNG002344</td>\r\n                        <td>John Deo</td>\r\n                        <td>05-01-2017</td>\r\n                        <td><span class=\"label label-danger\">Failed</span></td>\r\n                        <td>#7234486</td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td><img src=\"assets/images/product/prod3.jpg\" alt=\"prod img\" class=\"img-fluid\"></td>\r\n                        <td>PNG002653</td>\r\n                        <td>Eugine Turner</td>\r\n                        <td>04-01-2017</td>\r\n                        <td><span class=\"label label-success\">Delivered</span></td>\r\n                        <td>#7234417</td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td><img src=\"assets/images/product/prod4.jpg\" alt=\"prod img\" class=\"img-fluid\"></td>\r\n                        <td>PNG002156</td>\r\n                        <td>Jacqueline Howell</td>\r\n                        <td>03-01-2017</td>\r\n                        <td><span class=\"label label-warning\">Pending</span></td>\r\n                        <td>#7234454</td>\r\n                      </tr>\r\n                    </table>\r\n                  </div>\r\n                  <div class=\"text-center\">\r\n                    <button class=\"btn btn-outline-primary btn-round btn-sm\">Load More</button>\r\n                  </div>\r\n                </div>\r\n              </ng-template>\r\n            </ngb-tab>\r\n            <ngb-tab title=\"Security\">\r\n              <ng-template ngbTabContent>\r\n                <div [@fadeInOutTranslate] class=\"m-t-15\">\r\n                  <div class=\"table-responsive\">\r\n                    <table class=\"table\">\r\n                      <tr>\r\n                        <th>Image</th>\r\n                        <th>Product Code</th>\r\n                        <th>Customer</th>\r\n                        <th>Purchased On</th>\r\n                        <th>Status</th>\r\n                        <th>Transaction ID</th>\r\n                      </tr>\r\n                      <tr>\r\n                        <td><img src=\"assets/images/product/prod3.jpg\" alt=\"prod img\" class=\"img-fluid\"></td>\r\n                        <td>PNG002653</td>\r\n                        <td>Eugine Turner</td>\r\n                        <td>04-01-2017</td>\r\n                        <td><span class=\"label label-success\">Delivered</span></td>\r\n                        <td>#7234417</td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td><img src=\"assets/images/product/prod4.jpg\" alt=\"prod img\" class=\"img-fluid\"></td>\r\n                        <td>PNG002156</td>\r\n                        <td>Jacqueline Howell</td>\r\n                        <td>03-01-2017</td>\r\n                        <td><span class=\"label label-warning\">Pending</span></td>\r\n                        <td>#7234454</td>\r\n                      </tr>\r\n                    </table>\r\n                  </div>\r\n                  <div class=\"text-center\">\r\n                    <button class=\"btn btn-outline-primary btn-round btn-sm\">Load More</button>\r\n                  </div>\r\n                </div>\r\n              </ng-template>\r\n            </ngb-tab>\r\n            <ngb-tab title=\"Entertainment\">\r\n              <ng-template ngbTabContent>\r\n                <div [@fadeInOutTranslate] class=\"m-t-15\">\r\n                  <div class=\"table-responsive\">\r\n                    <table class=\"table\">\r\n                      <tr>\r\n                        <th>Image</th>\r\n                        <th>Product Code</th>\r\n                        <th>Customer</th>\r\n                        <th>Purchased On</th>\r\n                        <th>Status</th>\r\n                        <th>Transaction ID</th>\r\n                      </tr>\r\n                      <tr>\r\n                        <td><img src=\"assets/images/product/prod1.jpg\" alt=\"prod img\" class=\"img-fluid\"></td>\r\n                        <td>PNG002413</td>\r\n                        <td>Jane Elliott</td>\r\n                        <td>06-01-2017</td>\r\n                        <td><span class=\"label label-primary\">Shipping</span></td>\r\n                        <td>#7234421</td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td><img src=\"assets/images/product/prod4.jpg\" alt=\"prod img\" class=\"img-fluid\"></td>\r\n                        <td>PNG002156</td>\r\n                        <td>Jacqueline Howell</td>\r\n                        <td>03-01-2017</td>\r\n                        <td><span class=\"label label-warning\">Pending</span></td>\r\n                        <td>#7234454</td>\r\n                      </tr>\r\n                    </table>\r\n                  </div>\r\n                  <div class=\"text-center\">\r\n                    <button class=\"btn btn-outline-primary btn-round btn-sm\">Load More</button>\r\n                  </div>\r\n                </div>\r\n              </ng-template>\r\n            </ngb-tab>\r\n            <ngb-tab title=\"Big Data\">\r\n              <ng-template ngbTabContent>\r\n                <div [@fadeInOutTranslate] class=\"m-t-15\">\r\n                  <div class=\"table-responsive\">\r\n                    <table class=\"table\">\r\n                      <tr>\r\n                        <th>Image</th>\r\n                        <th>Product Code</th>\r\n                        <th>Customer</th>\r\n                        <th>Purchased On</th>\r\n                        <th>Status</th>\r\n                        <th>Transaction ID</th>\r\n                      </tr>\r\n                      <tr>\r\n                        <td><img src=\"assets/images/product/prod1.jpg\" alt=\"prod img\" class=\"img-fluid\"></td>\r\n                        <td>PNG002413</td>\r\n                        <td>Jane Elliott</td>\r\n                        <td>06-01-2017</td>\r\n                        <td><span class=\"label label-primary\">Shipping</span></td>\r\n                        <td>#7234421</td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td><img src=\"assets/images/product/prod2.jpg\" alt=\"prod img\" class=\"img-fluid\"></td>\r\n                        <td>PNG002344</td>\r\n                        <td>John Deo</td>\r\n                        <td>05-01-2017</td>\r\n                        <td><span class=\"label label-danger\">Failed</span></td>\r\n                        <td>#7234486</td>\r\n                      </tr>\r\n                    </table>\r\n                  </div>\r\n                  <div class=\"text-center\">\r\n                    <button class=\"btn btn-outline-primary btn-round btn-sm\">Load More</button>\r\n                  </div>\r\n                </div>\r\n              </ng-template>\r\n            </ngb-tab>\r\n          </ngb-tabset>\r\n        </div>\r\n      </app-card>\r\n    </div> -->\r\n    <!-- tabs card end -->\r\n\r\n    <!-- social statustic start -->\r\n   <!--  <div class=\"col-md-12 col-lg-4\">\r\n      <div class=\"card\">\r\n        <div class=\"card-block text-center\">\r\n          <i class=\"fa fa-envelope text-c-blue d-block f-40\"></i>\r\n          <h4 class=\"m-t-20\"><span class=\"text-c-blue\">8.62k</span> Subscribers</h4>\r\n          <p class=\"m-b-20\">Your main list is growing</p>\r\n          <button class=\"btn btn-primary btn-sm btn-round\">Manage List</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-6 col-lg-4\">\r\n      <div class=\"card\">\r\n        <div class=\"card-block text-center\">\r\n          <i class=\"fa fa-twitter text-c-green d-block f-40\"></i>\r\n          <h4 class=\"m-t-20\"><span class=\"text-c-green\">+40</span> Followers</h4>\r\n          <p class=\"m-b-20\">Your main list is growing</p>\r\n          <button class=\"btn btn-success btn-sm btn-round\">Check them out</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-6 col-lg-4\">\r\n      <div class=\"card\">\r\n        <div class=\"card-block text-center\">\r\n          <i class=\"fa fa-puzzle-piece text-c-pink d-block f-40\"></i>\r\n          <h4 class=\"m-t-20\">Business Plan</h4>\r\n          <p class=\"m-b-20\">This is your current active plan</p>\r\n          <button class=\"btn btn-danger btn-sm btn-round\">Upgrade to VIP</button>\r\n        </div>\r\n      </div>\r\n    </div> -->\r\n    <!-- social statustic end -->\r\n\r\n    <!-- users visite and profile start -->\r\n    <!--\r\n    <div class=\"col-lg-4 col-md-12\">\r\n      <div class=\"card user-card\">\r\n        <div class=\"card-header\">\r\n          <h5>Profile</h5>\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <div class=\"usre-image\">\r\n            <img src=\"assets/images/avatar-4.jpg\" class=\"img-radius\" alt=\"User-Profile-Image\">\r\n          </div>\r\n          <h6 class=\"f-w-600 m-t-25 m-b-10\">Alessa Robert</h6>\r\n          <p class=\"text-muted\">Active | Male | Born 23.05.1992</p>\r\n          <hr/>\r\n          <p class=\"text-muted m-t-15\">Activity Level: 87%</p>\r\n          <ul class=\"list-unstyled activity-leval\">\r\n            <li class=\"active\"></li>\r\n            <li class=\"active\"></li>\r\n            <li class=\"active\"></li>\r\n            <li></li>\r\n            <li></li>\r\n          </ul>\r\n          <div class=\"bg-c-blue counter-block m-t-10 p-20\">\r\n            <div class=\"row\">\r\n              <div class=\"col-4\">\r\n                <i class=\"icon-comments\"></i>\r\n                <p>1256</p>\r\n              </div>\r\n              <div class=\"col-4\">\r\n                <i class=\"icon-user\"></i>\r\n                <p>8562</p>\r\n              </div>\r\n              <div class=\"col-4\">\r\n                <i class=\"icon-bag\"></i>\r\n                <p>189</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <p class=\"m-t-15 text-muted\">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>\r\n          <hr/>\r\n          <div class=\"row justify-content-center user-social-link\">\r\n            <div class=\"col-auto\"><a href=\"javascript:\"><i class=\"fa fa-facebook text-facebook\"></i></a></div>\r\n            <div class=\"col-auto\"><a href=\"javascript:\"><i class=\"fa fa-twitter text-twitter\"></i></a></div>\r\n            <div class=\"col-auto\"><a href=\"javascript:\"><i class=\"fa fa-dribbble text-dribbble\"></i></a></div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-lg-8 col-md-12\">\r\n      <app-card [title]=\"'Activity Feed'\" [cardOptionBlock]=\"true\">\r\n        <ul class=\"feed-blog\">\r\n          <li class=\"active-feed\">\r\n            <div class=\"feed-user-img\">\r\n              <img src=\"assets/images/avatar-3.jpg\" class=\"img-radius \" alt=\"User-Profile-Image\">\r\n            </div>\r\n            <h6><span class=\"label label-danger\">File</span> Eddie uploaded new files: <small class=\"text-muted\">2 hours ago</small></h6>\r\n            <p class=\"m-b-15 m-t-15\">hii <b> @everone</b> Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>\r\n            <div class=\"row\">\r\n              <div class=\"col-auto text-center\">\r\n                <img src=\"assets/images/blog/blog-r-1.jpg\" alt=\"img\" class=\"img-fluid img-100\">\r\n                <h6 class=\"m-t-15 m-b-0\">Old Scooter</h6>\r\n                <p class=\"text-muted m-b-0\"><small>PNG-100KB</small></p>\r\n              </div>\r\n              <div class=\"col-auto text-center\">\r\n                <img src=\"assets/images/blog/blog-r-2.jpg\" alt=\"img\" class=\"img-fluid img-100\">\r\n                <h6 class=\"m-t-15 m-b-0\">Wall Art</h6>\r\n                <p class=\"text-muted m-b-0\"><small>PNG-150KB</small></p>\r\n              </div>\r\n              <div class=\"col-auto text-center\">\r\n                <img src=\"assets/images/blog/blog-r-3.jpg\" alt=\"img\" class=\"img-fluid img-100\">\r\n                <h6 class=\"m-t-15 m-b-0\">Microphone</h6>\r\n                <p class=\"text-muted m-b-0\"><small>PNG-150KB</small></p>\r\n              </div>\r\n            </div>\r\n          </li>\r\n          <li class=\"diactive-feed\">\r\n            <div class=\"feed-user-img\">\r\n              <img src=\"assets/images/avatar-4.jpg\" class=\"img-radius \" alt=\"User-Profile-Image\">\r\n            </div>\r\n            <h6><span class=\"label label-success\">Task</span>Sarah marked the Pending Review: <span class=\"text-c-green\"> Trash Can Icon Design</span><small class=\"text-muted\"> 2 hours ago</small></h6>\r\n          </li>\r\n          <li class=\"diactive-feed\">\r\n            <div class=\"feed-user-img\">\r\n              <img src=\"assets/images/avatar-2.jpg\" class=\"img-radius \" alt=\"User-Profile-Image\">\r\n            </div>\r\n            <h6><span class=\"label label-primary\">comment</span> abc posted a task:  <span class=\"text-c-green\">Design a new Homepage</span>  <small class=\"text-muted\">6 hours ago</small></h6>\r\n            <p class=\"m-b-15 m-t-15\">hii <b> @everone</b> Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>\r\n          </li>\r\n          <li class=\"active-feed\">\r\n            <div class=\"feed-user-img\">\r\n              <img src=\"assets/images/avatar-3.jpg\" class=\"img-radius \" alt=\"User-Profile-Image\">\r\n            </div>\r\n            <h6><span class=\"label label-warning\">Task</span>Sarah marked : <span class=\"text-c-green\"> do Icon Design</span><small class=\"text-muted\"> 10 hours ago</small></h6>\r\n          </li>\r\n        </ul>\r\n      </app-card>\r\n    </div> -->\r\n    <!-- users visite and profile end -->\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/theme/dashboard/default/default.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#seo-card1 canvas,\n#seo-card2 canvas {\n  height: 150px !important;\n  border-bottom-right-radius: 5px;\n  border-bottom-left-radius: 5px; }\n  @media only screen and (max-width: 768px) {\n    #seo-card1 canvas,\n    #seo-card2 canvas {\n      padding-bottom: 30px; } }\n\n.coin-images {\n  width: 30px;\n  float: left; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/theme/dashboard/default/default.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DefaultComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_dashboard_service__ = __webpack_require__("../../../../../src/services/dashboard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_takeWhile__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/takeWhile.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__assets_charts_amchart_amcharts_js__ = __webpack_require__("../../../../../src/assets/charts/amchart/amcharts.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__assets_charts_amchart_amcharts_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__assets_charts_amchart_amcharts_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__assets_charts_amchart_gauge_js__ = __webpack_require__("../../../../../src/assets/charts/amchart/gauge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__assets_charts_amchart_gauge_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__assets_charts_amchart_gauge_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__assets_charts_amchart_pie_js__ = __webpack_require__("../../../../../src/assets/charts/amchart/pie.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__assets_charts_amchart_pie_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__assets_charts_amchart_pie_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__assets_charts_amchart_serial_js__ = __webpack_require__("../../../../../src/assets/charts/amchart/serial.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__assets_charts_amchart_serial_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__assets_charts_amchart_serial_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__assets_charts_amchart_light_js__ = __webpack_require__("../../../../../src/assets/charts/amchart/light.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__assets_charts_amchart_light_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__assets_charts_amchart_light_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__assets_charts_amchart_ammap_js__ = __webpack_require__("../../../../../src/assets/charts/amchart/ammap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__assets_charts_amchart_ammap_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__assets_charts_amchart_ammap_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__assets_charts_amchart_worldLow_js__ = __webpack_require__("../../../../../src/assets/charts/amchart/worldLow.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__assets_charts_amchart_worldLow_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__assets_charts_amchart_worldLow_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__assets_charts_amchart_continentsLow_js__ = __webpack_require__("../../../../../src/assets/charts/amchart/continentsLow.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__assets_charts_amchart_continentsLow_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__assets_charts_amchart_continentsLow_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angular2_notifications__ = __webpack_require__("../../../../angular2-notifications/dist/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var DefaultComponent = (function () {
    function DefaultComponent(servicePNotify, _dashboardService, router) {
        this.servicePNotify = servicePNotify;
        this._dashboardService = _dashboardService;
        this.router = router;
        this._alive = true;
        this.options = {
            position: ['bottom', 'right'],
        };
    }
    DefaultComponent.prototype.ngOnInit = function () {
        this.dashboard_obj = {
            bch: 0,
            ethers: 0,
            litcoins: 0,
            bitcoins: 0,
        };
    };
    DefaultComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            /* student chart start */
            var student_tag = ((_this.studentChart.nativeElement.children));
            _this.studentChartTag = ((student_tag['student_chart']).lastChild).getContext('2d');
            var hij = (_this.studentChartTag).createLinearGradient(500, 0, 100, 0);
            hij.addColorStop(1, '#eaed38');
            hij.addColorStop(0, '#fcd823');
            var efg = (_this.studentChartTag).createLinearGradient(500, 0, 100, 0);
            efg.addColorStop(0, '#fd93a8');
            efg.addColorStop(1, '#FC6180');
            var def = (_this.studentChartTag).createLinearGradient(500, 0, 100, 0);
            def.addColorStop(0, '#2ed8b6');
            def.addColorStop(1, '#7cffe5');
            var abc = (_this.studentChartTag).createLinearGradient(500, 0, 100, 0);
            abc.addColorStop(1, '#56CCF2');
            abc.addColorStop(0, '#2F80ED');
            _this.userObject = JSON.parse(localStorage.getItem('userObject'));
            if (_this.userObject == null || _this.userObject === undefined) {
                _this.router.navigateByUrl('/login');
            }
            else {
                _this._dashboardService.getDashboardData(_this.userObject.token)
                    .takeWhile(function () { return _this._alive; })
                    .subscribe(function (response) {
                    console.log(response);
                    _this.dashboard_obj = response.data;
                    _this.studentChartData = {
                        labels: response.data.datesArray.reverse(),
                        datasets: [{
                                label: 'BTC',
                                borderColor: efg,
                                pointBorderColor: '#fff',
                                pointBackgroundColor: efg,
                                pointHoverBackgroundColor: efg,
                                pointHoverBorderColor: efg,
                                pointBorderWidth: 2,
                                pointHoverRadius: 10,
                                pointHoverBorderWidth: 1,
                                pointRadius: 8,
                                fill: false,
                                borderWidth: 2,
                                data: response.data.BTCData.reverse()
                            }, {
                                label: 'LTC',
                                borderColor: def,
                                pointBorderColor: '#fff',
                                pointBackgroundColor: def,
                                pointHoverBackgroundColor: def,
                                pointHoverBorderColor: def,
                                pointBorderWidth: 2,
                                pointHoverRadius: 10,
                                pointHoverBorderWidth: 1,
                                pointRadius: 8,
                                fill: false,
                                borderWidth: 2,
                                data: response.data.LTCData.reverse()
                            }, {
                                label: 'ETH',
                                borderColor: abc,
                                pointBorderColor: '#fff',
                                pointBackgroundColor: abc,
                                pointHoverBackgroundColor: abc,
                                pointHoverBorderColor: abc,
                                pointBorderWidth: 2,
                                pointHoverRadius: 10,
                                pointHoverBorderWidth: 1,
                                pointRadius: 8,
                                fill: false,
                                borderWidth: 2,
                                data: response.data.ETHData.reverse()
                            }, {
                                label: 'BCH',
                                borderColor: hij,
                                pointBorderColor: '#fff',
                                pointBackgroundColor: hij,
                                pointHoverBackgroundColor: hij,
                                pointHoverBorderColor: hij,
                                pointBorderWidth: 2,
                                pointHoverRadius: 10,
                                pointHoverBorderWidth: 1,
                                pointRadius: 8,
                                fill: false,
                                borderWidth: 2,
                                data: response.data.BCHData.reverse()
                            }]
                    };
                });
            }
            /* student chart end */
        });
        setTimeout(function () {
            _this.options = {
                position: ['bottom', 'right'],
                maxStack: 8,
                timeOut: 5000,
                showProgressBar: true,
                pauseOnHover: true,
                lastOnBottom: true,
                clickToClose: true,
                preventDuplicates: false,
                preventLastDuplicates: false,
                theClass: 'bg-c-pink no-icon',
                rtl: false,
                animate: 'rotate',
                yAxes: [{
                        display: true,
                        ticks: {
                            beginAtZero: true // minimum value will be 0.
                        }
                    }]
            };
            /*this.servicePNotify.html(
              '<h4>Live customizer</h4> <p>Click on Right Gear icon <i class="icon-settings"></i> for apply live styles very first time in Angular 5.</p>',
              'success'
            );*/
            AmCharts.makeChart('statistics_chart', {
                'type': 'serial',
                'theme': 'light',
                // 'hideCredits': true,
                'dataDateFormat': 'YYYY-MM-DD',
                'precision': 2,
                'valueAxes': [{
                        'id': 'v1',
                        'title': 'Sales',
                        'position': 'left',
                        'autoGridCount': false,
                        'labelFunction': function (value) {
                            return '$' + Math.round(value) + 'M';
                        }
                    }, {
                        'id': 'v2',
                        'gridAlpha': 0.1,
                        'autoGridCount': false
                    }],
                'graphs': [{
                        'id': 'g1',
                        'valueAxis': 'v2',
                        'lineThickness': 0,
                        'fillAlphas': 0.2,
                        'lineColor': '#4099ff',
                        'type': 'line',
                        'title': 'Laptop',
                        'useLineColorForBulletBorder': true,
                        'valueField': 'market1',
                        'balloonText': '[[title]]<br /><b style="font-size: 130%">[[value]]</b>'
                    }, {
                        'id': 'g2',
                        'valueAxis': 'v2',
                        'fillAlphas': 0.6,
                        'lineThickness': 0,
                        'lineColor': '#4099ff',
                        'type': 'line',
                        'title': 'TV',
                        'useLineColorForBulletBorder': true,
                        'valueField': 'market2',
                        'balloonText': '[[title]]<br /><b style="font-size: 130%">[[value]]</b>'
                    }],
                'chartCursor': {
                    'pan': true,
                    'valueLineEnabled': true,
                    'valueLineBalloonEnabled': true,
                    'cursorAlpha': 0,
                    'valueLineAlpha': 0.2
                },
                'categoryField': 'date',
                'categoryAxis': {
                    'parseDates': true,
                    'gridAlpha': 0,
                    'minorGridEnabled': true
                },
                'legend': {
                    'position': 'top',
                },
                'balloon': {
                    'borderThickness': 1,
                    'shadowAlpha': 0
                },
                'export': {
                    'enabled': true
                },
                'dataProvider': [{
                        'date': '2013-01-01',
                        'market1': 0,
                        'market2': 0,
                        'sales1': 0
                    }, {
                        'date': '2013-02-01',
                        'market1': 130,
                        'market2': 110,
                        'sales1': 0
                    }, {
                        'date': '2013-03-01',
                        'market1': 80,
                        'market2': 60,
                        'sales1': 0
                    }, {
                        'date': '2013-04-01',
                        'market1': 70,
                        'market2': 200,
                        'sales1': 0
                    }, {
                        'date': '2013-05-01',
                        'market1': 180,
                        'market2': 150,
                        'sales1': 0
                    }, {
                        'date': '2013-06-01',
                        'market1': 105,
                        'market2': 90,
                        'sales1': 0
                    }, {
                        'date': '2013-07-01',
                        'market1': 250,
                        'market2': 150,
                        'sales1': 0
                    }]
            });
            /* feedback chart start */
            _this.feedbackData = {
                datasets: [{
                        data: [83, 17],
                        backgroundColor: ['#4099ff', '#81c1fd'],
                        label: 'Dataset 1',
                        borderWidth: 0
                    }], labels: ['Positive', 'Negative']
            };
            _this.feedbackOption = {
                responsive: true,
                legend: { display: false },
                title: { display: false, text: 'Chart.js Doughnut Chart' },
                animation: { animateScale: true, animateRotate: true }
            };
            /* feedback chart end */
            /* seo card start */
            // const seo1_tag = (((<HTMLCanvasElement>this.seoCard1Chart.nativeElement).children));
            // this.seoCard1Tag = ((seo1_tag['seo-card1']).lastChild).getContext('2d');
            // const d = (this.seoCard1Tag).createLinearGradient(300, 0, 0, 300);
            // d.addColorStop(0, '#b9fdef');
            // d.addColorStop(1, '#2ed8b6');
            // const seo2_tag = (((<HTMLCanvasElement>this.seoCard2Chart.nativeElement).children));
            // this.seoCard2Tag = ((seo2_tag['seo-card2']).lastChild).getContext('2d');
            // const x = (this.seoCard2Tag).createLinearGradient(300, 0, 0, 300);
            // x.addColorStop(0, '#b5d8ff');
            // x.addColorStop(1, '#4099ff');
            // this.seoCard1Data = e('#2ed8b6', [100, 80, 100, 150, 190, 200, 160], d);
            // this.seoCard1Option = f();
            // this.seoCard2Data = e('#4099ff', [100, 80, 100, 150, 190, 200, 160], x);
            // this.seoCard2Option = f();
            /* seo card end */
        }, 75);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('seoCard1Chart'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], DefaultComponent.prototype, "seoCard1Chart", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('seoCard2Chart'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], DefaultComponent.prototype, "seoCard2Chart", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('studentChart'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], DefaultComponent.prototype, "studentChart", void 0);
    DefaultComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-default',
            template: __webpack_require__("../../../../../src/app/theme/dashboard/default/default.component.html"),
            styles: [__webpack_require__("../../../../../src/app/theme/dashboard/default/default.component.scss"), __webpack_require__("../../../../../src/assets/icon/icofont/css/icofont.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_dashboard_service__["a" /* DashboardService */]],
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
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_13_angular2_notifications__["a" /* NotificationsService */], __WEBPACK_IMPORTED_MODULE_2__services_dashboard_service__["a" /* DashboardService */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["Router"]])
    ], DefaultComponent);
    return DefaultComponent;
}());

function e(h, g, i) {
    if (i == null) {
        i = 'rgba(0,0,0,0)';
    }
    return {
        labels: ['1', '2', '3', '4', '5', '6', '7'],
        datasets: [{
                label: '',
                borderColor: h,
                borderWidth: 2,
                hitRadius: 0,
                pointHoverRadius: 0,
                pointRadius: 3,
                pointBorderWidth: 2,
                pointHoverBorderWidth: 12,
                pointBackgroundColor: '#fff',
                pointBorderColor: h,
                pointHoverBackgroundColor: h,
                pointHoverBorderColor: '#000',
                fill: true,
                backgroundColor: i,
                data: g,
            }]
    };
}
function f() {
    return {
        title: { display: !1 },
        tooltips: { enabled: true, intersect: !1, mode: 'nearest', xPadding: 10, yPadding: 10, caretPadding: 10 },
        legend: { display: !1, labels: { usePointStyle: !1 } },
        responsive: !0,
        maintainAspectRatio: !0,
        hover: { mode: 'index' },
        scales: {
            xAxes: [{ display: !1, gridLines: !1, scaleLabel: { display: !0, labelString: 'Month' } }],
            yAxes: [{
                    display: !1,
                    gridLines: !1,
                    scaleLabel: { display: !0, labelString: 'Value' },
                    ticks: { beginAtZero: !0 }
                }]
        },
        elements: { point: { radius: 4, borderWidth: 12 } },
        layout: { padding: { left: 0, right: 0, top: 0, bottom: 0 } }
    };
}


/***/ }),

/***/ "../../../../../src/app/theme/dashboard/default/default.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultModule", function() { return DefaultModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__default_component__ = __webpack_require__("../../../../../src/app/theme/dashboard/default/default.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__default_routing_module__ = __webpack_require__("../../../../../src/app/theme/dashboard/default/default-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_chartjs__ = __webpack_require__("../../../../angular2-chartjs/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_chartjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_chartjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_notifications__ = __webpack_require__("../../../../angular2-notifications/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var DefaultModule = (function () {
    function DefaultModule() {
    }
    DefaultModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__default_routing_module__["a" /* DefaultRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_5_angular2_chartjs__["ChartModule"],
                __WEBPACK_IMPORTED_MODULE_7__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_6_angular2_notifications__["b" /* SimpleNotificationsModule */].forRoot()
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__default_component__["a" /* DefaultComponent */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__default_component__["a" /* DefaultComponent */]]
        })
    ], DefaultModule);
    return DefaultModule;
}());



/***/ }),

/***/ "../../../../../src/services/dashboard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardService; });
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




var DashboardService = (function () {
    function DashboardService(http) {
        this.http = http;
        this.serviceUrl = new __WEBPACK_IMPORTED_MODULE_3__service_url__["a" /* ServiceUrl */]();
    }
    DashboardService.prototype.getDashboardData = function (token) {
        var data;
        data = {};
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json; charset=UTF-8');
        headers.append("authorization", "JWT " + token);
        return this.http.post(this.serviceUrl.baseUrl + "admin/getDashboardData", data, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    DashboardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], DashboardService);
    return DashboardService;
}());



/***/ })

});
//# sourceMappingURL=default.module.chunk.js.map