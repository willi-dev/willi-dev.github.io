webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_service__ = __webpack_require__("../../../../../src/app/providers/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_auth_guard_service__ = __webpack_require__("../../../../../src/app/providers/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_mainprofile_service__ = __webpack_require__("../../../../../src/app/providers/mainprofile.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_personaldetail_service__ = __webpack_require__("../../../../../src/app/providers/personaldetail.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_work_service__ = __webpack_require__("../../../../../src/app/providers/work.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_projects_service__ = __webpack_require__("../../../../../src/app/providers/projects.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_education_service__ = __webpack_require__("../../../../../src/app/providers/education.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_publication_service__ = __webpack_require__("../../../../../src/app/providers/publication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_training_service__ = __webpack_require__("../../../../../src/app/providers/training.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_message_service__ = __webpack_require__("../../../../../src/app/providers/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angularfire2_database_deprecated__ = __webpack_require__("../../../../angularfire2/database-deprecated/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_header_header_component__ = __webpack_require__("../../../../../src/app/components/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_cv_cv_component__ = __webpack_require__("../../../../../src/app/components/cv/cv.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_dashboard_projects_projects_component__ = __webpack_require__("../../../../../src/app/components/dashboard/projects/projects.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_dashboard_work_work_component__ = __webpack_require__("../../../../../src/app/components/dashboard/work/work.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_dashboard_training_training_component__ = __webpack_require__("../../../../../src/app/components/dashboard/training/training.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_dashboard_educations_educations_component__ = __webpack_require__("../../../../../src/app/components/dashboard/educations/educations.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_dashboard_publication_publication_component__ = __webpack_require__("../../../../../src/app/components/dashboard/publication/publication.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_dashboard_skill_skill_component__ = __webpack_require__("../../../../../src/app/components/dashboard/skill/skill.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_dashboard_personal_detail_personal_detail_component__ = __webpack_require__("../../../../../src/app/components/dashboard/personal-detail/personal-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_dashboard_main_profile_main_profile_component__ = __webpack_require__("../../../../../src/app/components/dashboard/main-profile/main-profile.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
































var firebaseConfig = {
    apiKey: 'AIzaSyBMGKToIWVhqy8ITCz3M2Im3ZFO3-9RZqc',
    authDomain: 'ng-willi-cv.firebaseapp.com',
    databaseURL: 'https://ng-willi-cv.firebaseio.com',
    projectId: 'ng-willi-cv',
    storageBucket: 'ng-willi-cv.appspot.com',
    messagingSenderId: '94894335534',
};
var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_23__components_cv_cv_component__["a" /* CvComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_22__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'dashboard',
        component: __WEBPACK_IMPORTED_MODULE_21__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_6__providers_auth_guard_service__["a" /* AuthGuard */]],
        children: [
            {
                path: '',
                redirectTo: '/dashboard/work',
                pathMatch: 'full'
            },
            {
                path: 'main-profile',
                component: __WEBPACK_IMPORTED_MODULE_31__components_dashboard_main_profile_main_profile_component__["a" /* MainProfileComponent */]
            },
            {
                path: 'personal-detail',
                component: __WEBPACK_IMPORTED_MODULE_30__components_dashboard_personal_detail_personal_detail_component__["a" /* PersonalDetailComponent */]
            },
            {
                path: 'work',
                component: __WEBPACK_IMPORTED_MODULE_25__components_dashboard_work_work_component__["a" /* WorkComponent */]
            },
            {
                path: 'projects',
                component: __WEBPACK_IMPORTED_MODULE_24__components_dashboard_projects_projects_component__["a" /* ProjectsComponent */]
            },
            {
                path: 'educations',
                component: __WEBPACK_IMPORTED_MODULE_27__components_dashboard_educations_educations_component__["a" /* EducationsComponent */]
            },
            {
                path: 'skill',
                component: __WEBPACK_IMPORTED_MODULE_29__components_dashboard_skill_skill_component__["a" /* SkillComponent */]
            },
            {
                path: 'training',
                component: __WEBPACK_IMPORTED_MODULE_26__components_dashboard_training_training_component__["a" /* TrainingComponent */]
            },
            {
                path: 'publication',
                component: __WEBPACK_IMPORTED_MODULE_28__components_dashboard_publication_publication_component__["a" /* PublicationComponent */]
            }
        ]
    }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_19__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_22__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_23__components_cv_cv_component__["a" /* CvComponent */],
            __WEBPACK_IMPORTED_MODULE_24__components_dashboard_projects_projects_component__["a" /* ProjectsComponent */],
            __WEBPACK_IMPORTED_MODULE_25__components_dashboard_work_work_component__["a" /* WorkComponent */],
            __WEBPACK_IMPORTED_MODULE_26__components_dashboard_training_training_component__["a" /* TrainingComponent */],
            __WEBPACK_IMPORTED_MODULE_27__components_dashboard_educations_educations_component__["a" /* EducationsComponent */],
            __WEBPACK_IMPORTED_MODULE_28__components_dashboard_publication_publication_component__["a" /* PublicationComponent */],
            __WEBPACK_IMPORTED_MODULE_29__components_dashboard_skill_skill_component__["a" /* SkillComponent */],
            __WEBPACK_IMPORTED_MODULE_30__components_dashboard_personal_detail_personal_detail_component__["a" /* PersonalDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_31__components_dashboard_main_profile_main_profile_component__["a" /* MainProfileComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_15_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */].forRoot(routes, { useHash: true }),
            __WEBPACK_IMPORTED_MODULE_16_angularfire2_database__["a" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_18_angularfire2_auth__["b" /* AngularFireAuthModule */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_14__providers_message_service__["a" /* MessageService */],
            __WEBPACK_IMPORTED_MODULE_5__providers_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_6__providers_auth_guard_service__["a" /* AuthGuard */],
            __WEBPACK_IMPORTED_MODULE_17_angularfire2_database_deprecated__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_7__providers_mainprofile_service__["a" /* MainprofileService */],
            __WEBPACK_IMPORTED_MODULE_8__providers_personaldetail_service__["a" /* PersonaldetailService */],
            __WEBPACK_IMPORTED_MODULE_9__providers_work_service__["a" /* WorkService */],
            __WEBPACK_IMPORTED_MODULE_10__providers_projects_service__["a" /* ProjectsService */],
            __WEBPACK_IMPORTED_MODULE_11__providers_education_service__["a" /* EducationService */],
            __WEBPACK_IMPORTED_MODULE_12__providers_publication_service__["a" /* PublicationService */],
            __WEBPACK_IMPORTED_MODULE_13__providers_training_service__["a" /* TrainingService */],
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_19__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/cv/cv.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>\n  cv works!\n</h1>\n"

/***/ }),

/***/ "../../../../../src/app/components/cv/cv.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/cv/cv.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CvComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CvComponent = (function () {
    function CvComponent() {
    }
    CvComponent.prototype.ngOnInit = function () {
    };
    return CvComponent;
}());
CvComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-cv',
        template: __webpack_require__("../../../../../src/app/components/cv/cv.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/cv/cv.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], CvComponent);

//# sourceMappingURL=cv.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" [class.container-hidden]=\"menuOpen\">\n\t<div class=\"row\">\n\t\t<div class=\"side-menu side-menu__offcanvas\" [class.side-menu--open]=\"menuOpen\">\n\t\t\t<ul class=\"side-menu__dashboard\">\n\t\t\t\t<li class=\"side-menu__item\">\n\t\t\t\t\t<a routerLink=\"main-profile\">Main Profile</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"side-menu__item\">\n\t\t\t\t\t<a routerLink=\"personal-detail\">Personal Detail</a>\n\t\t\t\t</li>\n\t\t\t  <li class=\"side-menu__item\">\n\t\t\t\t\t<a routerLink=\"work\">Work Experiences</a>\n\t\t\t  </li>\n\t\t\t  <li class=\"side-menu__item\">\n\t\t\t  \t<a routerLink=\"projects\">Projects</a>\n\t\t\t  </li>\n\t\t\t  <li class=\"side-menu__item\">\n\t\t\t\t\t<a routerLink=\"educations\">Education</a>\n\t\t\t  </li>\n\t\t\t  <li class=\"side-menu__item\">\n\t\t\t  \t<a routerLink=\"skill\">Skill</a>\n\t\t\t  </li>\n\t\t\t  <li class=\"side-menu__item\">\n\t\t\t  \t<a routerLink=\"training\">Training</a>\n\t\t\t  </li>\n\t\t\t  <li class=\"side-menu__item\">\n\t\t\t\t\t<a routerLink=\"publication\">Publication & Research</a>\n\t\t\t  </li>\n\t\t\t  <li class=\"side-menu__item\">\n\t\t\t  \t<a  href=\"javascript:void(0)\" (click)=\"this.authService.logout()\">Logout</a>\n\t\t\t  </li>\n\t\t\t</ul>\n\t\t</div>\n\n\t\t<div class=\"col-md-12 main-content\" [class.main-content--resize]=\"menuOpen\">\n\t\t\t <span class=\"open-menu\t\" (click)=\"menuOpen = !menuOpen;\">&#9776;</span>\n\t\t\t<router-outlet></router-outlet>\n\t\t</div>\t\n\t</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container-fluid.container-hidden {\n  overflow-x: hidden; }\n\n.side-menu__offcanvas {\n  height: 100%;\n  width: 0;\n  position: fixed;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  background-color: #111;\n  transition: display .6s;\n  display: none; }\n\n.side-menu--open {\n  display: block;\n  width: 20%; }\n\n.side-menu__dashboard {\n  list-style: none;\n  margin-top: 85px; }\n  .side-menu__dashboard a {\n    color: #ffffff; }\n\n.main-content {\n  padding: 20px 60px;\n  transition: margin-left .3s; }\n  .main-content--resize {\n    max-width: 80%;\n    margin-left: 20%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_auth_service__ = __webpack_require__("../../../../../src/app/providers/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = (function () {
    function DashboardComponent(authService) {
        this.authService = authService;
        this.menuOpen = false;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        console.log(this.authService.isLoggedIn);
    };
    /*
    * logout
    */
    DashboardComponent.prototype.logout = function () {
        this.authService.logout();
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__providers_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__providers_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], DashboardComponent);

var _a;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/dashboard/educations/educations.component.html":
/***/ (function(module, exports) {

module.exports = "\n<h1 class=\"display-4 dashboard-title\">Educations</h1>\n<hr>\n\n<form>\n  <div class=\"form-group\">\n    <label for=\"education-school\">School</label>\n    <input type=\"text\" [(ngModel)]=\"education.school\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" id=\"education-school\" placeholder=\"Example: SMA Negeri 19 Bandung\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"education-period\">Education Period</label>\n    <input type=\"text\" [(ngModel)]=\"education.period\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" id=\"education-period\" placeholder=\"Example: January 2016 - February 2017\">\n  </div>\n  \n  <div class=\"form-group\">\n    <label for=\"education-description\">Education Description</label>\n    <textarea [(ngModel)]=\"education.description\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" id=\"work-description\" rows=\"3\"></textarea>\n  </div>\n  <div class=\"form-group\">\n  \t<button class=\"btn btn-default\" type=\"submit\" (click)=\"createEducation()\">\n  \t\tSubmit\n  \t</button>\n  </div>\n</form>\n\n<hr>\n\n<table class=\"table\">\n  <thead class=\"thead-dark\">\n    <tr>\n      <th scope=\"col\">#</th>\n      <th scope=\"col\">School</th>\n      <th scope=\"col\">Period</th>\n      <th scope=\"col\">Description</th>\n      <th scope=\"col\">Action</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let e of educations | async\">\n      <th scope=\"row\"></th>\n      <td>{{e.school}}</td>\n      <td>{{e.period}}</td>\n      <td>{{e.description}}</td>\n      <td>\n        \n      </td>\n    </tr>\n  </tbody>\n</table>"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/educations/educations.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/educations/educations.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EducationsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__educations__ = __webpack_require__("../../../../../src/app/components/dashboard/educations/educations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_education_service__ = __webpack_require__("../../../../../src/app/providers/education.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EducationsComponent = (function () {
    function EducationsComponent(educationService) {
        this.educationService = educationService;
        this.education = new __WEBPACK_IMPORTED_MODULE_1__educations__["a" /* Educations */]();
    }
    EducationsComponent.prototype.ngOnInit = function () {
        this.educations = this.educationService.getListEducations({ orderByKey: true });
        // .map( (array) => { return array.reverse() }) as FirebaseListObservable<Educations[]>;
        console.log(this.educations);
    };
    EducationsComponent.prototype.createEducation = function () {
        this.educationService.createEducation(this.education);
        this.education = new __WEBPACK_IMPORTED_MODULE_1__educations__["a" /* Educations */]();
    };
    EducationsComponent.prototype.deleteEducation = function (key) {
        this.educationService.deleteEducation(key);
    };
    return EducationsComponent;
}());
EducationsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-educations',
        template: __webpack_require__("../../../../../src/app/components/dashboard/educations/educations.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/dashboard/educations/educations.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__providers_education_service__["a" /* EducationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_education_service__["a" /* EducationService */]) === "function" && _a || Object])
], EducationsComponent);

var _a;
//# sourceMappingURL=educations.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/dashboard/educations/educations.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Educations; });
var Educations = (function () {
    function Educations() {
    }
    return Educations;
}());

//# sourceMappingURL=educations.js.map

/***/ }),

/***/ "../../../../../src/app/components/dashboard/main-profile/main-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"display-4 dashboard-title\">Main Profile</h1>\n<hr>\n\n<div *ngIf=\"(mainProfileList | async)?.length == 0\">\n\t<form>\n\t  <div class=\"form-group\">\n\t    <label for=\"main-profile-name\">Name</label>\n\t    <input type=\"text\" [(ngModel)]=\"mainProfile.nameProfile\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" id=\"main-profile-name\" placeholder=\"Example: Willi\">\n\t  </div>\n\t  <div class=\"form-group\">\n\t    <label for=\"main-profile-job\">Job Title</label>\n\t    <input type=\"text\" [(ngModel)]=\"mainProfile.jobTitle\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" id=\"main-profile-job\" placeholder=\"Example: Front End Developer\">\n\t  </div>\n\t\t<div class=\"form-group\">\n\t  \t<label for=\"main-profile-phone\">Phone</label>\n\t  \t<input type=\"text\" [(ngModel)]=\"mainProfile.phone\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" id=\"main-profile-phone\" placeholder=\"Example: 0857 2233 8899\">\n\t  </div>\n\t  <div class=\"form-group\">\n\t    <label for=\"main-profile-address\">Address</label>\n\t    <textarea [(ngModel)]=\"mainProfile.address\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" id=\"main-profile-address\" rows=\"3\"></textarea>\n\t  </div>\n\t  <div class=\"form-group\">\n\t  \t<label for=\"main-profile-email\">Email</label>\n\t  \t<input type=\"text\" [(ngModel)]=\"mainProfile.email\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" id=\"mian-profile-email\" placeholder=\"Example: willi.dev.id@gmail.com\">\n\t  </div>\n\t  <div class=\"form-group\">\n\t  \t<label for=\"main-profile-linkedin\">Linkedin</label>\n\t  \t<input type=\"text\" [(ngModel)]=\"mainProfile.linkedin\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" id=\"main-profile-linkedin\" placeholder=\"Example: https://www.linkedin.com/in/willidev/\">\n\t  </div>\n\t  <div class=\"form-group\">\n\t  \t<label for=\"main-profile-github\">Github</label>\n\t  \t<input type=\"text\" [(ngModel)]=\"mainProfile.github\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" id=\"main-profile-github\" placeholder=\"Example: https://github.com/willi-dev\">\n\t  </div>\n\t  <div class=\"form-group\">\n\t  \t<button class=\"btn btn-default\" type=\"submit\" (click)=\"createProfile()\">\n\t  \t\tSubmit\n\t  \t</button>\n\t  </div>\n\t</form>\n</div>\n\n<div *ngIf=\"(mainProfileList | async)?.length > 0\">\n\t<div *ngFor=\"let mp of mainProfileList | async\">\n\t\t<div *ngIf=\"formEdit\">\n\t\t\t<h2 class=\"lead\">Edit Main Profile</h2>\n\t\t\t<form>\n\t\t\t  <div class=\"form-group\">\n\t\t\t    <label for=\"main-profile-name\">Name</label>\n\t\t\t    <input type=\"text\" [(ngModel)]=\"mainProfile.nameProfile\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" id=\"main-profile-name\" placeholder=\"Example: Willi\">\n\t\t\t  </div>\n\t\t\t  <div class=\"form-group\">\n\t\t\t    <label for=\"main-profile-job\">Job Title</label>\n\t\t\t    <input type=\"text\" [(ngModel)]=\"mainProfile.jobTitle\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" id=\"main-profile-job\" placeholder=\"Example: Front End Developer\">\n\t\t\t  </div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t  \t<label for=\"main-profile-phone\">Phone</label>\n\t\t\t  \t<input type=\"text\" [(ngModel)]=\"mainProfile.phone\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" id=\"main-profile-phone\" placeholder=\"Example: 0857 2233 8899\">\n\t\t\t  </div>\n\t\t\t  <div class=\"form-group\">\n\t\t\t    <label for=\"main-profile-address\">Address</label>\n\t\t\t    <textarea [(ngModel)]=\"mainProfile.address\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" id=\"main-profile-address\" rows=\"3\"></textarea>\n\t\t\t  </div>\n\t\t\t  <div class=\"form-group\">\n\t\t\t  \t<label for=\"main-profile-email\">Email</label>\n\t\t\t  \t<input type=\"text\" [(ngModel)]=\"mainProfile.email\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" id=\"mian-profile-email\" placeholder=\"Example: willi.dev.id@gmail.com\">\n\t\t\t  </div>\n\t\t\t  <div class=\"form-group\">\n\t\t\t  \t<label for=\"main-profile-linkedin\">Linkedin</label>\n\t\t\t  \t<input type=\"text\" [(ngModel)]=\"mainProfile.linkedin\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" id=\"main-profile-linkedin\" placeholder=\"Example: https://www.linkedin.com/in/willidev/\">\n\t\t\t  </div>\n\t\t\t  <div class=\"form-group\">\n\t\t\t  \t<label for=\"main-profile-github\">Github</label>\n\t\t\t  \t<input type=\"text\" [(ngModel)]=\"mainProfile.github\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" id=\"main-profile-github\" placeholder=\"Example: https://github.com/willi-dev\">\n\t\t\t  </div>\n\t\t\t  <div class=\"form-group\">\n\t\t\t  \t<button class=\"btn btn-primary\" type=\"submit\" (click)=\"updateProfile(!formEdit, mp)\">\n\t\t\t  \t\tSubmit\n\t\t\t  \t</button>\n\t\t\t  \t<button class=\"btn btn-light\" (click)=\"showFormEdit(!formEdit, mp)\">\n\t\t\t\t\t\tCancel\n\t\t\t\t\t</button>\n\t\t\t  </div>\n\t\t\t</form>\n\t\t</div>\n\n\t\t<div *ngIf=\"!formEdit\">\n\t\t\t<div class=\"row main-profile__row mt-md-5\">\n\t\t\t\t<div class=\"col-md-6 main-profile__col--left\">\n\t\t\t\t\t<h3>Name</h3>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6 main-profile__col--right\">\n\t\t\t\t\t<h3 class=\"font-weight-light\">{{mp.nameProfile}}</h3>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col-md-6 main-profile__col--left\">\n\t\t\t\t\t<h3>Job Title</h3>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6 main-profile__col--right\">\n\t\t\t\t\t<h3 class=\"font-weight-light\">{{mp.jobTitle}}</h3>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col-md-6 main-profile__col--left\">\n\t\t\t\t\t<h3>Phone</h3>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6 main-profile__col--right\">\n\t\t\t\t\t<h3 class=\"font-weight-light\">{{mp.phone}}</h3>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col-md-6 main-profile__col--left\">\n\t\t\t\t\t<h3>Address</h3>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6 main-profile__col--right\">\n\t\t\t\t\t<h3 class=\"font-weight-light\">{{mp.address}}</h3>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col-md-6 main-profile__col--left\">\n\t\t\t\t\t<h3>Email</h3>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6 main-profile__col--right\">\n\t\t\t\t\t<h3 class=\"font-weight-light\">{{mp.email}}</h3>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col-md-6 main-profile__col--left\">\n\t\t\t\t\t<h3>Linkedin</h3>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6 main-profile__col--right\">\n\t\t\t\t\t<h3 class=\"font-weight-light\">{{mp.linkedin}}</h3>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col-md-6 main-profile__col--left\">\n\t\t\t\t\t<h3>Github</h3>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6 main-profile__col--right\">\n\t\t\t\t\t<h3 class=\"font-weight-light\">{{mp.github}}</h3>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"main-profile__row-edit\">\n\t\t\t\t<button class=\"btn btn-default\" (click)=\"showFormEdit(!formEdit, mp)\">\n\t\t\t\t\tEdit\n\t\t\t\t</button>\t\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/main-profile/main-profile.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main-profile__col--left {\n  text-align: right; }\n\n.main-profile__col--right {\n  text-align: left; }\n\n.main-profile__row-edit {\n  text-align: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/main-profile/main-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__main_profile__ = __webpack_require__("../../../../../src/app/components/dashboard/main-profile/main-profile.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_mainprofile_service__ = __webpack_require__("../../../../../src/app/providers/mainprofile.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MainProfileComponent = (function () {
    function MainProfileComponent(mainprofileService) {
        this.mainprofileService = mainprofileService;
        this.mainProfile = new __WEBPACK_IMPORTED_MODULE_1__main_profile__["a" /* Mainprofile */]();
        this.formEdit = false;
    }
    MainProfileComponent.prototype.ngOnInit = function () {
        this.mainProfileList = this.mainprofileService.getListProfile({ orderByKey: true });
    };
    MainProfileComponent.prototype.createProfile = function () {
        this.mainprofileService.createProfile(this.mainProfile);
    };
    MainProfileComponent.prototype.updateProfile = function (key, value) {
        this.mainprofileService.updateProfile(key, value);
        this.formEdit = false;
    };
    MainProfileComponent.prototype.deleteProfile = function (key) {
        this.mainprofileService.deleteProfile(key);
    };
    MainProfileComponent.prototype.showFormEdit = function (status, mp) {
        this.formEdit = status;
        if (this.formEdit) {
            this.mainProfile = mp;
        }
    };
    return MainProfileComponent;
}());
MainProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-main-profile',
        template: __webpack_require__("../../../../../src/app/components/dashboard/main-profile/main-profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/dashboard/main-profile/main-profile.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__providers_mainprofile_service__["a" /* MainprofileService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_mainprofile_service__["a" /* MainprofileService */]) === "function" && _a || Object])
], MainProfileComponent);

var _a;
//# sourceMappingURL=main-profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/dashboard/main-profile/main-profile.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Mainprofile; });
var Mainprofile = (function () {
    function Mainprofile() {
    }
    return Mainprofile;
}());

//# sourceMappingURL=main-profile.js.map

/***/ }),

/***/ "../../../../../src/app/components/dashboard/personal-detail/personal-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"display-4 dashboard-title\">Personal Details</h1>\n<hr>\n\n<div *ngIf=\"(personalDetails | async)?.length == 0\">\n\t<form>\n\t  <div class=\"form-group\">\n\t    <label for=\"personal-detail-place\">Place of Birth</label>\n\t    <input type=\"text\" [(ngModel)]=\"personalDetail.placeBirth\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" id=\"personal-detail-place\" placeholder=\"Example: Padang\">\n\t  </div>\n\t  <div class=\"form-group\">\n\t    <label for=\"personal-detail-date\">Date of Birth</label>\n\t    <input type=\"text\" [(ngModel)]=\"personalDetail.dateOfBirth\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" id=\"personal-detail-date\" placeholder=\"Example: 05 April 1989\">\n\t  </div>\n\t  <div class=\"form-group\">\n\t  \t<label for=\"personal-detail-gender\">Gender</label>\n\t  \t<select class=\"form-control\" id=\"personal-detail-gender\" [(ngModel)]=\"personalDetail.gender\" [ngModelOptions]=\"{standalone: true}\">\n\t\t\t  <option value=\"male\">Male</option>\n\t\t\t  <option value=\"female\">Female</option>\n\t\t\t</select>\n\t  </div>\n\t  <div class=\"form-group\">\n\t  \t<label for=\"personal-detail-language\">Language</label>\n\t  \t<input type=\"text\" [(ngModel)]=\"personalDetail.language\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" id=\"personal-detail-language\" placeholder=\"Example: Bahasa, English\">\n\t  </div>\n\t  <div class=\"form-group\">\n\t  \t<label for=\"personal-detail-language\">Religion</label>\n\t  \t<input type=\"text\" [(ngModel)]=\"personalDetail.religion\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" id=\"personal-detail-religion\" placeholder=\"Example: Islam\">\n\t  </div>\n\t  <div class=\"form-group\">\n\t  \t<button class=\"btn btn-default\" type=\"submit\" (click)=\"createDetail()\">\n\t  \t\tSubmit\n\t  \t</button>\n\t  </div>\n\t</form>\n</div>\n\n<div *ngIf=\"(personalDetails | async)?.length > 0\">\n\t<div *ngFor=\"let pd of personalDetails | async\">\n\t\t<!-- form editor when edit value of personal detail -->\n\t\t<div *ngIf=\"formEdit\">\n\t\t\t<h2 class=\"lead\">Edit Personal Detail</h2>\n\t\t\t<form>\n\t\t\t  <div class=\"form-group\">\n\t\t\t    <label for=\"personal-detail-place\">Place of Birth </label>\n\t\t\t    <input type=\"text\" [(ngModel)]=\"personalDetail.placeBirth\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" id=\"personal-detail-place\" placeholder=\"Example: Padang\">\n\t\t\t  </div>\n\t\t\t  <div class=\"form-group\">\n\t\t\t    <label for=\"personal-detail-date\">Date of Birth</label>\n\t\t\t    <input type=\"text\" [(ngModel)]=\"personalDetail.dateOfBirth\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" id=\"personal-detail-date\" placeholder=\"Example: 05 April 1989\">\n\t\t\t  </div>\n\t\t\t  <div class=\"form-group\">\n\t\t\t  \t<label for=\"personal-detail-gender\">Gender</label>\n\t\t\t  \t<select class=\"form-control\" id=\"personal-detail-gender\" [(ngModel)]=\"personalDetail.gender\" [ngModelOptions]=\"{standalone: true}\">\n\t\t\t\t\t  <option value=\"male\">Male</option>\n\t\t\t\t\t  <option value=\"female\">Female</option>\n\t\t\t\t\t</select>\n\t\t\t  </div>\n\t\t\t  <div class=\"form-group\">\n\t\t\t  \t<label for=\"personal-detail-language\">Language</label>\n\t\t\t  \t<input type=\"text\" [(ngModel)]=\"personalDetail.language\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" id=\"personal-detail-language\" placeholder=\"Example: Bahasa, English\">\n\t\t\t  </div>\n\t\t\t  <div class=\"form-group\">\n\t\t\t  \t<label for=\"personal-detail-language\">Religion</label>\n\t\t\t  \t<input type=\"text\" [(ngModel)]=\"personalDetail.religion\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" id=\"personal-detail-religion\" placeholder=\"Example: Islam\">\n\t\t\t  </div>\n\t\t\t  <div class=\"form-group\">\n\t\t\t  \t<button class=\"btn btn-primary\" type=\"submit\" (click)=\"updateDetail(pd.$key, personalDetail)\">\n\t\t\t  \t\tSubmit\n\t\t\t  \t</button>\n\t\t\t  \t<button class=\"btn btn-light\" (click)=\"showFormEdit(!formEdit, pd)\">\n\t\t\t\t\t\tCancel\n\t\t\t\t\t</button>\n\t\t\t  </div>\n\t\t\t</form>\n\t\t</div>\n\t\t<!-- end form editor -->\n\n\t\t<div *ngIf=\"!formEdit\">\n\t\t\t<div class=\"row personal-detail__row mt-md-5\">\n\t\t\t\t<div class=\"col-md-6 personal-detail__col--left\">\n\t\t\t\t\t<h3>Place of Birth</h3>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6 personal-detail__col--right\">\n\t\t\t\t\t<h3 class=\"font-weight-light\">{{pd.placeBirth}}</h3>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col-md-6 personal-detail__col--left\">\n\t\t\t\t\t<h3>Date of Birth</h3>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6 personal-detail__col--right\">\n\t\t\t\t\t<h3 class=\"font-weight-light\">{{pd.dateOfBirth}}</h3>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col-md-6 personal-detail__col--left\">\n\t\t\t\t\t<h3>Language</h3>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6 personal-detail__col--right\">\n\t\t\t\t\t<h3 class=\"font-weight-light\">{{pd.language}}</h3>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col-md-6 personal-detail__col--left\">\n\t\t\t\t\t<h3>Religion</h3>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-6 personal-detail__col--right\">\n\t\t\t\t\t<h3 class=\"font-weight-light\">{{pd.religion}}</h3>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"personal-detail__row-edit\">\n\t\t\t\t<button class=\"btn btn-default\" (click)=\"showFormEdit(!formEdit, pd)\">\n\t\t\t\t\tEdit\n\t\t\t\t</button>\t\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/personal-detail/personal-detail.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".personal-detail__col--left {\n  text-align: right; }\n\n.personal-detail__col--right {\n  text-align: left; }\n\n.personal-detail__row-edit {\n  text-align: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/personal-detail/personal-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonalDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_personaldetail_service__ = __webpack_require__("../../../../../src/app/providers/personaldetail.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PersonalDetailComponent = (function () {
    function PersonalDetailComponent(personaldetailService) {
        this.personaldetailService = personaldetailService;
        this.formEdit = false;
    }
    PersonalDetailComponent.prototype.ngOnInit = function () {
        this.personalDetails = this.personaldetailService.getListDetail({ orderByKey: true });
    };
    PersonalDetailComponent.prototype.createDetail = function () {
        this.personaldetailService.createDetail(this.personalDetail);
    };
    PersonalDetailComponent.prototype.updateDetail = function (key, value) {
        this.personaldetailService.updateDetail(key, value);
        this.formEdit = false;
    };
    PersonalDetailComponent.prototype.deleteDetail = function (key) {
        this.personaldetailService.deleteDetail(key);
    };
    PersonalDetailComponent.prototype.showFormEdit = function (status, pd) {
        this.formEdit = status;
        if (this.formEdit) {
            this.personalDetail = pd;
        }
    };
    return PersonalDetailComponent;
}());
PersonalDetailComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-personal-detail',
        template: __webpack_require__("../../../../../src/app/components/dashboard/personal-detail/personal-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/dashboard/personal-detail/personal-detail.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__providers_personaldetail_service__["a" /* PersonaldetailService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__providers_personaldetail_service__["a" /* PersonaldetailService */]) === "function" && _a || Object])
], PersonalDetailComponent);

var _a;
//# sourceMappingURL=personal-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/dashboard/projects/projects.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"display-4 dashboard-title\">Projects</h1>\n<hr>\n<form>\n  <div class=\"form-group\">\n    <label for=\"project-name\">Project Name</label>\n    <input type=\"text\" [(ngModel)]=\"project.project\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" id=\"project-name\" placeholder=\"Example: Website Company Profile\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"project-company\">Company</label>\n    <input type=\"text\" [(ngModel)]=\"project.company\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" id=\"project-company\" placeholder=\"Example: Mirum Agency\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"project-period\">Project Period</label>\n    <input type=\"text\" [(ngModel)]=\"project.period\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" id=\"project-period\" placeholder=\"Example: January 2016 - February 2017\">\n  </div>\n  \n  <div class=\"form-group\">\n    <label for=\"project-description\">Project Description</label>\n    <textarea [(ngModel)]=\"project.description\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" id=\"project-description\" rows=\"3\"></textarea>\n  </div>\n  <div class=\"form-group\">\n  \t<button class=\"btn btn-default\" type=\"submit\" (click)=\"createProject()\">\n  \t\tSubmit\n  \t</button>\n  </div>\n</form>\n<hr>\n\n<div class=\"col-md-12\">\n  <div class=\"row\">\n    <div class=\"col-md-6\" *ngFor=\"let p of projects | async\">\n      <div class=\"card mb-3\" style=\"width: 100%;\">\n        <div class=\"card-body\">\n          <h4 class=\"card-title\">{{p.project}}</h4>\n          <h6 class=\"card-subtitle mb-2 text-muted\">{{p.company}}</h6>\n          <h6 class=\"card-subtitle mb-2 text-muted\">{{p.period}}</h6>\n          <p class=\"card-text\">\n            {{p.description}}\n          </p>\n          <a class=\"card-link\">Edit</a>\n          <a class=\"card-link\" (click)=\"deleteProject(p.$key)\">Delete</a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/projects/projects.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/projects/projects.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__projects__ = __webpack_require__("../../../../../src/app/components/dashboard/projects/projects.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_projects_service__ = __webpack_require__("../../../../../src/app/providers/projects.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProjectsComponent = (function () {
    function ProjectsComponent(projectsService) {
        this.projectsService = projectsService;
        this.project = new __WEBPACK_IMPORTED_MODULE_1__projects__["a" /* Projects */]();
    }
    ProjectsComponent.prototype.ngOnInit = function () {
        this.projects = this.projectsService.getListProjects({ orderByKey: true });
        // .map( (array) => {return array.reverse()}) as FirebaseListObservable<Projects[]>;
    };
    ProjectsComponent.prototype.createProject = function () {
        this.projectsService.createProject(this.project);
        this.project = new __WEBPACK_IMPORTED_MODULE_1__projects__["a" /* Projects */]();
    };
    ProjectsComponent.prototype.deleteProject = function (key) {
        this.projectsService.deleteProject(key);
    };
    return ProjectsComponent;
}());
ProjectsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-projects',
        template: __webpack_require__("../../../../../src/app/components/dashboard/projects/projects.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/dashboard/projects/projects.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__providers_projects_service__["a" /* ProjectsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_projects_service__["a" /* ProjectsService */]) === "function" && _a || Object])
], ProjectsComponent);

var _a;
//# sourceMappingURL=projects.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/dashboard/projects/projects.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Projects; });
var Projects = (function () {
    function Projects() {
    }
    return Projects;
}());

//# sourceMappingURL=projects.js.map

/***/ }),

/***/ "../../../../../src/app/components/dashboard/publication/publication.component.html":
/***/ (function(module, exports) {

module.exports = "\n<h1 class=\"display-4 dashboard-title\">Publications</h1>\n<hr>\n\n<form>\n  <div class=\"form-group\">\n    <label for=\"publication-name\">Publication</label>\n    <input type=\"text\" [(ngModel)]=\"publication.publication\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" id=\"publication-name\" placeholder=\"Example: Undergraduate Thesis\">\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"publication-description\">Publication Description</label>\n    <textarea [(ngModel)]=\"publication.description\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" id=\"publication-description\" rows=\"3\"></textarea>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"publication-link\">Link Publication</label>\n    <input [(ngModel)]=\"publication.link\" [ngModelOptions]=\"{standalone: true}\" type=\"text\" class=\"form-control\" id=\"publication-link\" placeholder=\"Example: http://repository.upi.edu/14288/\">\n  </div>\n  \n  <div class=\"form-group\">\n  \t<button class=\"btn btn-default\" type=\"submit\" (click)=\"createPublication()\">\n  \t\tSubmit\n  \t</button>\n  </div>\n</form>\n\n<hr>\n\n<table class=\"table\">\n  <thead class=\"thead-dark\">\n    <tr>\n      <th scope=\"col\">#</th>\n      <th scope=\"col\">Publication</th>\n      <th scope=\"col\">Description</th>\n      <th scope=\"col\">Link</th>\n      <th scope=\"col\">Action</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let p of publications | async\">\n      <th scope=\"row\"></th>\n      <td>{{p.publication}}</td>\n      <td>{{p.description}}</td>\n      <td>{{p.link}}</td>\n      <td>\n        \n      </td>\n    </tr>\n  </tbody>\n</table>"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/publication/publication.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/publication/publication.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublicationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__publication__ = __webpack_require__("../../../../../src/app/components/dashboard/publication/publication.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_publication_service__ = __webpack_require__("../../../../../src/app/providers/publication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PublicationComponent = (function () {
    function PublicationComponent(publicationService) {
        this.publicationService = publicationService;
        this.publication = new __WEBPACK_IMPORTED_MODULE_1__publication__["a" /* Publication */]();
    }
    PublicationComponent.prototype.ngOnInit = function () {
        this.publications = this.publicationService.getListPublication();
    };
    PublicationComponent.prototype.createPublication = function () {
        this.publicationService.createPublication(this.publication);
        this.publication = new __WEBPACK_IMPORTED_MODULE_1__publication__["a" /* Publication */]();
    };
    PublicationComponent.prototype.deletePublication = function (key) {
        this.publicationService.deletePublication(key);
    };
    return PublicationComponent;
}());
PublicationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-publication',
        template: __webpack_require__("../../../../../src/app/components/dashboard/publication/publication.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/dashboard/publication/publication.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__providers_publication_service__["a" /* PublicationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_publication_service__["a" /* PublicationService */]) === "function" && _a || Object])
], PublicationComponent);

var _a;
//# sourceMappingURL=publication.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/dashboard/publication/publication.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Publication; });
var Publication = (function () {
    function Publication() {
    }
    return Publication;
}());

//# sourceMappingURL=publication.js.map

/***/ }),

/***/ "../../../../../src/app/components/dashboard/skill/skill.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"display-4 dashboard-title\">Skill</h1>\n<hr>"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/skill/skill.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/skill/skill.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SkillComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SkillComponent = (function () {
    function SkillComponent() {
    }
    SkillComponent.prototype.ngOnInit = function () {
    };
    return SkillComponent;
}());
SkillComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-skill',
        template: __webpack_require__("../../../../../src/app/components/dashboard/skill/skill.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/dashboard/skill/skill.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], SkillComponent);

//# sourceMappingURL=skill.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/dashboard/training/training.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"display-4 dashboard-title\">Training</h1>\n<hr>\n\n<form>\n  <div class=\"form-group\">\n    <label for=\"training-name\">Training Name</label>\n    <input type=\"text\" [(ngModel)]=\"training.name\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" id=\"training-name\" placeholder=\"Example: Pelatihan dasar action script 2.0\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"training-place\">Training Place</label>\n    <input type=\"text\" [(ngModel)]=\"training.place\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" id=\"training-place\" placeholder=\"Example: Ilmu Komputer UPI Bandung\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"training-year\">Year</label>\n    <input type=\"text\" [(ngModel)]=\"training.year\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" id=\"training-year\" placeholder=\"Example: 2012\">\n  </div>\n  <div class=\"form-group\">\n  \t<button class=\"btn btn-default\" type=\"submit\" (click)=\"createTraining()\">\n  \t\tSubmit\n  \t</button>\n  </div>\n</form>\n\n<hr>\n\n\n<table class=\"table\" *ngIf=\"(trainings | async)?.length > 0 \">\n  <thead class=\"thead-dark\">\n    <tr>\n      <th scope=\"col\">#</th>\n      <th scope=\"col\">Training</th>\n      <th scope=\"col\">Organizers / Place</th>\n      <th scope=\"col\">Year</th>\n      <th scope=\"col\">Action</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let t of trainings | async\">\n      <th scope=\"row\"></th>\n      <td>{{t.name}}</td>\n      <td>{{t.place}}</td>\n      <td>{{t.year}}</td>\n      <td>\n        \n      </td>\n    </tr>\n  </tbody>\n</table>"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/training/training.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/training/training.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrainingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__training__ = __webpack_require__("../../../../../src/app/components/dashboard/training/training.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_training_service__ = __webpack_require__("../../../../../src/app/providers/training.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TrainingComponent = (function () {
    function TrainingComponent(trainingService) {
        this.trainingService = trainingService;
        this.training = new __WEBPACK_IMPORTED_MODULE_1__training__["a" /* Training */]();
    }
    TrainingComponent.prototype.ngOnInit = function () {
        this.trainings = this.trainingService.getListTraining();
    };
    TrainingComponent.prototype.createTraining = function () {
        this.trainingService.createTraining(this.training);
        this.training = new __WEBPACK_IMPORTED_MODULE_1__training__["a" /* Training */]();
    };
    TrainingComponent.prototype.deleteTraining = function (key) {
        this.trainingService.deleteTraining(key);
    };
    return TrainingComponent;
}());
TrainingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-training',
        template: __webpack_require__("../../../../../src/app/components/dashboard/training/training.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/dashboard/training/training.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__providers_training_service__["a" /* TrainingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_training_service__["a" /* TrainingService */]) === "function" && _a || Object])
], TrainingComponent);

var _a;
//# sourceMappingURL=training.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/dashboard/training/training.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Training; });
var Training = (function () {
    function Training() {
    }
    return Training;
}());

//# sourceMappingURL=training.js.map

/***/ }),

/***/ "../../../../../src/app/components/dashboard/work/work.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"display-4 dashboard-title\">Work Experiences</h1>\n<hr>\n<form>\n  <div class=\"form-group\">\n    <label for=\"work-position\">Position</label>\n    <input type=\"text\" [(ngModel)]=\"work.position\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" id=\"work-position\" placeholder=\"Example: Web Developer\" >\n  </div>\n  <div class=\"form-group\">\n    <label for=\"work-company\">Company</label>\n    <input type=\"text\" [(ngModel)]=\"work.company\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" id=\"work-company\" placeholder=\"Example: Mirum Agency\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"work-period\">Period</label>\n    <input type=\"text\" [(ngModel)]=\"work.period\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" id=\"work-period\" placeholder=\"Example: January 2016 - February 2017\">\n  </div>\n  \n  <div class=\"form-group\">\n    <label for=\"work-description\">Work Description</label>\n    <textarea  [(ngModel)]=\"work.description\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" id=\"work-description\" rows=\"3\"></textarea>\n  </div>\n  <div class=\"form-group\">\n  \t<button class=\"btn btn-default\" type=\"submit\" (click)=\"createWork()\">\n  \t\tSubmit\n  \t</button>\n  </div>\n</form>\n<div></div>\n<hr>\n\n<div class=\"col-md-12\">\n  <div class=\"row\">\n    <div class=\"col-md-6\" *ngFor=\"let w of works | async\"> \n      <div class=\"card mb-3\" style=\"width: 100%;\">\n        <div class=\"card-body\">\n          <h4 class=\"card-title\">{{w.position}}</h4>\n          <h6 class=\"card-subtitle mb-2 text-muted\">{{w.company}}</h6>\n          <h6 class=\"card-subtitle mb-2 text-muted\">{{w.period}}</h6>\n          <p class=\"card-text\">\n            {{w.description}}\n          </p>\n          <a class=\"card-link\">Edit</a>\n          <a class=\"card-link\" (click)=\"deleteWork(w.$key)\">Delete</a>\n        </div>\n      </div>\n      \n     <!-- \n      \n      \n      <button class=\"btn btn-default\" >\n          \n        </button> -->\n  </div>\n \n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/work/work.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/work/work.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__work__ = __webpack_require__("../../../../../src/app/components/dashboard/work/work.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_work_service__ = __webpack_require__("../../../../../src/app/providers/work.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WorkComponent = (function () {
    function WorkComponent(workService) {
        this.workService = workService;
        this.work = new __WEBPACK_IMPORTED_MODULE_1__work__["a" /* Work */]();
    }
    WorkComponent.prototype.ngOnInit = function () {
        this.works = this.workService.getListWork({ orderByKey: true });
        // .map((array) => {return  array.reverse() }) as FirebaseListObservable<Work[]>;
        console.log(this.works);
    };
    WorkComponent.prototype.createWork = function () {
        this.workService.createWork(this.work);
        this.work = new __WEBPACK_IMPORTED_MODULE_1__work__["a" /* Work */]();
    };
    WorkComponent.prototype.deleteWork = function (key) {
        console.log(key);
        this.workService.deleteWork(key);
    };
    return WorkComponent;
}());
WorkComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-work',
        template: __webpack_require__("../../../../../src/app/components/dashboard/work/work.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/dashboard/work/work.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__providers_work_service__["a" /* WorkService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_work_service__["a" /* WorkService */]) === "function" && _a || Object])
], WorkComponent);

var _a;
//# sourceMappingURL=work.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/dashboard/work/work.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Work; });
var Work = (function () {
    function Work() {
    }
    return Work;
}());

//# sourceMappingURL=work.js.map

/***/ }),

/***/ "../../../../../src/app/components/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  header works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/header/header.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/components/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/header/header.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], HeaderComponent);

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container py-5\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <h2 class=\"text-center mb-5\">Dashboard Login</h2>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-6 mx-auto\">\r\n                    <span class=\"anchor\" id=\"formLogin\"></span>\r\n\r\n                    <!-- form card login -->\r\n                    <div class=\"card\">\r\n                        <div class=\"card-header\">\r\n                            <h3 class=\"mb-0\">Login</h3>\r\n                        </div>\r\n                        <div class=\"card-body\">\r\n                            <div *ngIf=\"this.authService.error\" class=\"alert alert-warning\" role=\"alert\">\r\n                              {{ this.authService.error }}\r\n                            </div>\r\n\r\n                            <form #formData='ngForm' class=\"form\" role=\"form\" autocomplete=\"off\" (ngSubmit)=\"loginEmail(formData)\">\r\n                                <div class=\"form-group\">\r\n                                    <label for=\"useremail\">Email</label>\r\n                                    <input type=\"email\" class=\"form-control\" [(ngModel)]=\"useremail\" name=\"useremail\" id=\"useremail\" required=\"\" placeholder=\"email...\">\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <label for=\"userpassword\">Password</label>\r\n                                    <input type=\"password\" class=\"form-control\" [(ngModel)]=\"userpassword\" name=\"userpassword\" id=\"userpassword\" required=\"\" placeholder=\"password...\" autocomplete=\"new-password\">\r\n                                </div>\r\n                                <button type=\"submit\" class=\"btn btn-outline-primary btn-block\">Login</button>\r\n                                <!-- <div class=\"form-check small\">\r\n                                    <label class=\"form-check-label\">\r\n                                        <input type=\"checkbox\" class=\"form-check-input\"> <span>Remember me on this computer</span>\r\n                                    </label>\r\n                                </div> -->\r\n                                <!-- <button type=\"button\" class=\"btn btn-outline-primary btn-block\" (click)=\"loginGoogle()\">Login</button> -->\r\n                            </form>\r\n                        </div>\r\n                        <!--/card-block-->\r\n                    </div>\r\n                    <!-- /form card login -->\r\n                </div>\r\n            </div>\r\n            <!--/row-->\r\n\r\n        </div>\r\n        <!--/col-->\r\n    </div>\r\n    <!--/row-->\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_auth_service__ = __webpack_require__("../../../../../src/app/providers/auth.service.ts");
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
    function LoginComponent(authService) {
        this.authService = authService;
        this.authService.loginRoute();
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.loginEmail = function (formData) {
        this.authService.loginEmail(formData);
    };
    LoginComponent.prototype.loginGoogle = function () {
        this.authService.loginWithGoogle();
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/login/login.component.scss")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__providers_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__providers_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], LoginComponent);

var _a;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/providers/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_take__ = __webpack_require__("../../../../rxjs/add/operator/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_take__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthGuard = (function () {
    function AuthGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        var _this = this;
        return this.auth.authState
            .take(1)
            .map(function (authState) { return !!authState; })
            .do(function (authenticated) {
            if (!authenticated) {
                _this.router.navigate(['/login']);
            }
        });
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth-guard.service.js.map

/***/ }),

/***/ "../../../../../src/app/providers/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app__ = __webpack_require__("../../../../firebase/app.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase_app__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(afAuth, router) {
        this.afAuth = afAuth;
        this.router = router;
        this.state = '';
        this.error = '';
    }
    AuthService.prototype.loginRoute = function () {
        var _this = this;
        this.afAuth
            .authState
            .subscribe(function (auth) {
            if (auth == null) {
                _this.router.navigate(['login']);
            }
            else {
                _this.router.navigate(['dashboard']);
                _this.error = '';
            }
        });
    };
    /*
     * loginAuth
     */
    AuthService.prototype.loginAuth = function () {
        var _this = this;
        this.afAuth
            .authState
            .subscribe(function (auth) {
            if (auth == null) {
                // this.router.navigate(['login']);
                _this.setLoginState(false);
                console.log('login state false');
            }
            else {
                // this.router.navigate(['dashboard']);
                _this.setLoginState(true);
                console.log('login state true');
            }
        });
    };
    /*
     * setLoginState
     */
    AuthService.prototype.setLoginState = function (state) {
        this.isLoggedIn = state;
        this.error = '';
    };
    /*
     * loginWithGoogle
     */
    AuthService.prototype.loginWithGoogle = function () {
        return this.afAuth
            .auth
            .signInWithPopup(new __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"].GoogleAuthProvider())
            .then(function (value) {
            console.log('Nice, it worked!');
        })
            .catch(function (err) {
            console.log('Something went wrong: ', err.message);
        });
    };
    /*
     * login with email and password
     */
    AuthService.prototype.loginEmail = function (formData) {
        var _this = this;
        if (formData.valid) {
            console.log(formData.value);
            this.afAuth.auth.signInWithEmailAndPassword(formData.value.useremail, formData.value.userpassword).then(function (success) {
                console.log(success);
                _this.setLoginState(true);
                _this.router.navigate(['/dashboard']);
            }).catch(function (error) {
                console.error('error : ' + error);
                _this.setLoginState(false);
                _this.error = error;
            });
        }
        else {
        }
    };
    /*
     * logout
     */
    AuthService.prototype.logout = function () {
        this.afAuth
            .auth
            .signOut();
        console.log('logged out');
        this.router.navigateByUrl('/login');
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], AuthService);

var _a, _b;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/providers/education.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EducationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database_deprecated__ = __webpack_require__("../../../../angularfire2/database-deprecated/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__message_service__ = __webpack_require__("../../../../../src/app/providers/message.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EducationService = (function () {
    function EducationService(db, m) {
        this.db = db;
        this.m = m;
        this.basePath = '/education';
        this.education = null;
        this.educations = null;
        this.educations = this.db.list(this.basePath);
    }
    /**
     * getEducation
     * @return this.education
     */
    EducationService.prototype.getEducation = function (key) {
        var educationsPath = this.basePath + "/" + key;
        this.education = this.db.object(educationsPath);
        return this.education;
    };
    /**
     * getListEducations
     * @return this.educations
     */
    EducationService.prototype.getListEducations = function (query) {
        if (query === void 0) { query = {}; }
        this.educations = this.db.list(this.basePath, {
            query: query
        });
        return this.educations;
    };
    /**
     * createEducation
     * @return void
     */
    EducationService.prototype.createEducation = function (education) {
        var _this = this;
        this.educations.push(education)
            .then(function (error) { return _this.m.handleError(error); });
    };
    /**
     * updateEducation
     * @return void
     */
    EducationService.prototype.updateEducation = function (key, value) {
        var _this = this;
        this.educations.update(key, value)
            .catch(function (error) { return _this.m.handleError(error); });
    };
    /**
     * deleteEducation
     * @return void
     */
    EducationService.prototype.deleteEducation = function (key) {
        var _this = this;
        this.educations.remove(key)
            .catch(function (error) { return _this.m.handleError(error); });
    };
    /**
     * deleteAllEducations
     * @return void
     */
    EducationService.prototype.deleteAllEducations = function () {
        var _this = this;
        this.educations.remove()
            .catch(function (error) { return _this.m.handleError(error); });
    };
    return EducationService;
}());
EducationService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database_deprecated__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database_deprecated__["a" /* AngularFireDatabase */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__message_service__["a" /* MessageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__message_service__["a" /* MessageService */]) === "function" && _b || Object])
], EducationService);

var _a, _b;
//# sourceMappingURL=education.service.js.map

/***/ }),

/***/ "../../../../../src/app/providers/mainprofile.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainprofileService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database_deprecated__ = __webpack_require__("../../../../angularfire2/database-deprecated/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__message_service__ = __webpack_require__("../../../../../src/app/providers/message.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MainprofileService = (function () {
    function MainprofileService(db, m) {
        this.db = db;
        this.m = m;
        this.basePath = '/mainprofile';
        this.mainProfile = null;
        this.mainProfileList = null;
        this.mainProfileList = this.db.list(this.basePath);
    }
    MainprofileService.prototype.getProfile = function (key) {
        var profilePath = this.basePath + "/" + key;
        this.mainProfile = this.db.object(profilePath);
        return this.mainProfile;
    };
    MainprofileService.prototype.getListProfile = function (query) {
        this.mainProfileList = this.db.list(this.basePath, {
            query: query
        });
        return this.mainProfileList;
    };
    MainprofileService.prototype.createProfile = function (profile) {
        var _this = this;
        this.mainProfileList.push(profile)
            .then(function (error) { return _this.m.handleError(error); });
    };
    MainprofileService.prototype.updateProfile = function (key, value) {
        var _this = this;
        this.mainProfileList.update(key, value)
            .catch(function (error) { return _this.m.handleError(error); });
    };
    MainprofileService.prototype.deleteProfile = function (key) {
        var _this = this;
        this.mainProfileList.remove(key)
            .catch(function (error) { return _this.m.handleError(error); });
    };
    MainprofileService.prototype.deleteAllProfile = function () {
        var _this = this;
        this.mainProfileList.remove()
            .catch(function (error) { return _this.m.handleError(error); });
    };
    return MainprofileService;
}());
MainprofileService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database_deprecated__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database_deprecated__["a" /* AngularFireDatabase */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__message_service__["a" /* MessageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__message_service__["a" /* MessageService */]) === "function" && _b || Object])
], MainprofileService);

var _a, _b;
//# sourceMappingURL=mainprofile.service.js.map

/***/ }),

/***/ "../../../../../src/app/providers/message.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MessageService = (function () {
    function MessageService() {
    }
    MessageService.prototype.handleError = function (error) {
        console.log(error);
    };
    return MessageService;
}());
MessageService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], MessageService);

//# sourceMappingURL=message.service.js.map

/***/ }),

/***/ "../../../../../src/app/providers/personaldetail.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonaldetailService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database_deprecated__ = __webpack_require__("../../../../angularfire2/database-deprecated/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__message_service__ = __webpack_require__("../../../../../src/app/providers/message.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PersonaldetailService = (function () {
    function PersonaldetailService(db, m) {
        this.db = db;
        this.m = m;
        this.basePath = '/personaldetail';
        this.personalDetail = null;
        this.personalDetails = null;
        this.personalDetails = this.db.list(this.basePath);
    }
    PersonaldetailService.prototype.getDetail = function (key) {
        var detailPath = this.basePath + "/" + key;
        this.personalDetail = this.db.object(detailPath);
        return this.personalDetail;
    };
    PersonaldetailService.prototype.getListDetail = function (query) {
        this.personalDetails = this.db.list(this.basePath, {
            query: query
        });
        return this.personalDetails;
    };
    PersonaldetailService.prototype.createDetail = function (detail) {
        var _this = this;
        this.personalDetails.push(detail)
            .then(function (error) { return _this.m.handleError(error); });
    };
    PersonaldetailService.prototype.updateDetail = function (key, value) {
        var _this = this;
        this.personalDetails.update(key, value)
            .catch(function (error) { return _this.m.handleError(error); });
    };
    PersonaldetailService.prototype.deleteDetail = function (key) {
        var _this = this;
        this.personalDetails.remove(key)
            .catch(function (error) { return _this.m.handleError(error); });
    };
    PersonaldetailService.prototype.deleteAllDetail = function () {
        var _this = this;
        this.personalDetails.remove()
            .catch(function (error) { return _this.m.handleError(error); });
    };
    return PersonaldetailService;
}());
PersonaldetailService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database_deprecated__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database_deprecated__["a" /* AngularFireDatabase */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__message_service__["a" /* MessageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__message_service__["a" /* MessageService */]) === "function" && _b || Object])
], PersonaldetailService);

var _a, _b;
//# sourceMappingURL=personaldetail.service.js.map

/***/ }),

/***/ "../../../../../src/app/providers/projects.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database_deprecated__ = __webpack_require__("../../../../angularfire2/database-deprecated/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__message_service__ = __webpack_require__("../../../../../src/app/providers/message.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProjectsService = (function () {
    function ProjectsService(db, m) {
        this.db = db;
        this.m = m;
        this.basePath = '/projects';
        this.project = null;
        this.projects = null;
        this.projects = this.db.list(this.basePath);
    }
    /**
     * getProject
     * @return this.project
     */
    ProjectsService.prototype.getProject = function (key) {
        var projectPath = this.basePath + "/" + key;
        this.project = this.db.object(projectPath);
        return this.project;
    };
    /**
     * getListProjects
     * @return this.projects
     */
    ProjectsService.prototype.getListProjects = function (query) {
        if (query === void 0) { query = {}; }
        this.projects = this.db.list(this.basePath, {
            query: query
        });
        return this.projects;
    };
    /**
     * createProject
     * @return void
     */
    ProjectsService.prototype.createProject = function (project) {
        var _this = this;
        this.projects.push(project)
            .then(function (error) { return _this.m.handleError(error); });
    };
    /**
     * updateProject
     * @return void
     */
    ProjectsService.prototype.updateProject = function (key, value) {
        var _this = this;
        this.projects.update(key, value)
            .catch(function (error) { return _this.m.handleError(error); });
    };
    /**
     * deleteProject
     * @return void
     */
    ProjectsService.prototype.deleteProject = function (key) {
        var _this = this;
        this.projects.remove(key)
            .catch(function (error) { return _this.m.handleError(error); });
    };
    /**
     * deleteAllProjects
     * @return void
     */
    ProjectsService.prototype.deleteAllProjects = function () {
        var _this = this;
        this.projects.remove()
            .catch(function (error) { return _this.m.handleError(error); });
    };
    return ProjectsService;
}());
ProjectsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database_deprecated__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database_deprecated__["a" /* AngularFireDatabase */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__message_service__["a" /* MessageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__message_service__["a" /* MessageService */]) === "function" && _b || Object])
], ProjectsService);

var _a, _b;
//# sourceMappingURL=projects.service.js.map

/***/ }),

/***/ "../../../../../src/app/providers/publication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublicationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database_deprecated__ = __webpack_require__("../../../../angularfire2/database-deprecated/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__message_service__ = __webpack_require__("../../../../../src/app/providers/message.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PublicationService = (function () {
    function PublicationService(db, m) {
        this.db = db;
        this.m = m;
        this.basePath = '/publication';
        this.publication = null;
        this.publications = null;
        this.publications = this.db.list(this.basePath);
    }
    PublicationService.prototype.getPublication = function (key) {
        var publicationPath = this.basePath + "/" + key;
        this.publication = this.db.object(publicationPath);
        return this.publication;
    };
    PublicationService.prototype.getListPublication = function (query) {
        if (query === void 0) { query = {}; }
        this.publications = this.db.list(this.basePath, {
            query: query
        });
        return this.publications;
    };
    PublicationService.prototype.createPublication = function (publication) {
        var _this = this;
        this.publications.push(publication)
            .then(function (error) { return _this.m.handleError(error); });
    };
    PublicationService.prototype.updatePublication = function (key, value) {
        var _this = this;
        this.publications.update(key, value)
            .catch(function (error) { return _this.m.handleError(error); });
    };
    PublicationService.prototype.deletePublication = function (key) {
        var _this = this;
        this.publications.remove(key)
            .catch(function (error) { return _this.m.handleError(error); });
    };
    PublicationService.prototype.deleteAllPublications = function () {
        var _this = this;
        this.publications.remove()
            .catch(function (error) { return _this.m.handleError(error); });
    };
    return PublicationService;
}());
PublicationService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database_deprecated__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database_deprecated__["a" /* AngularFireDatabase */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__message_service__["a" /* MessageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__message_service__["a" /* MessageService */]) === "function" && _b || Object])
], PublicationService);

var _a, _b;
//# sourceMappingURL=publication.service.js.map

/***/ }),

/***/ "../../../../../src/app/providers/training.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrainingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database_deprecated__ = __webpack_require__("../../../../angularfire2/database-deprecated/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__message_service__ = __webpack_require__("../../../../../src/app/providers/message.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TrainingService = (function () {
    function TrainingService(db, m) {
        this.db = db;
        this.m = m;
        this.basePath = '/training';
        this.training = null;
        this.trainings = null;
        this.trainings = this.db.list(this.basePath);
    }
    TrainingService.prototype.getTraining = function (key) {
        var trainingPath = this.basePath + "/" + key;
        this.training = this.db.object(trainingPath);
        return this.training;
    };
    TrainingService.prototype.getListTraining = function (query) {
        if (query === void 0) { query = {}; }
        this.trainings = this.db.list(this.basePath, {
            query: query
        });
        return this.trainings;
    };
    TrainingService.prototype.createTraining = function (training) {
        var _this = this;
        this.trainings.push(training)
            .then(function (error) { return _this.m.handleError(error); });
    };
    TrainingService.prototype.updateTraining = function (key, value) {
        var _this = this;
        this.trainings.update(key, value)
            .catch(function (error) { return _this.m.handleError(error); });
    };
    TrainingService.prototype.deleteTraining = function (key) {
        var _this = this;
        this.trainings.remove(key)
            .catch(function (error) { return _this.m.handleError(error); });
    };
    TrainingService.prototype.deleteAllTraining = function () {
        var _this = this;
        this.trainings.remove()
            .catch(function (error) { return _this.m.handleError(error); });
    };
    return TrainingService;
}());
TrainingService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database_deprecated__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database_deprecated__["a" /* AngularFireDatabase */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__message_service__["a" /* MessageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__message_service__["a" /* MessageService */]) === "function" && _b || Object])
], TrainingService);

var _a, _b;
//# sourceMappingURL=training.service.js.map

/***/ }),

/***/ "../../../../../src/app/providers/work.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database_deprecated__ = __webpack_require__("../../../../angularfire2/database-deprecated/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__message_service__ = __webpack_require__("../../../../../src/app/providers/message.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WorkService = (function () {
    function WorkService(db, m) {
        this.db = db;
        this.m = m;
        this.basePath = '/work';
        this.work = null;
        this.works = null;
        this.works = this.db.list(this.basePath);
    }
    /**
     * getWork
     * @return this.work
     */
    WorkService.prototype.getWork = function (key) {
        var workPath = this.basePath + "/" + key;
        this.work = this.db.object(workPath);
        return this.work;
    };
    /**
     * getListWork
     * @return this.works
     */
    WorkService.prototype.getListWork = function (query) {
        if (query === void 0) { query = {}; }
        this.works = this.db.list(this.basePath, {
            query: query
        });
        return this.works;
    };
    /**
     * createWork
     * @return void
     */
    WorkService.prototype.createWork = function (work) {
        var _this = this;
        this.works.push(work)
            .then(function (error) { return _this.m.handleError(error); });
    };
    /**
     * updateWork
     * @return void
     */
    WorkService.prototype.updateWork = function (key, value) {
        var _this = this;
        this.works.update(key, value)
            .catch(function (error) { return _this.m.handleError(error); });
    };
    /**
     * deleteWork
     * @return void
     */
    WorkService.prototype.deleteWork = function (key) {
        var _this = this;
        console.log("key: " + key);
        this.works.remove(key)
            .catch(function (error) { return _this.m.handleError(error); });
    };
    /**
     * deleteAllWorks
     * @return void
     */
    WorkService.prototype.deleteAllWork = function () {
        var _this = this;
        this.works.remove()
            .catch(function (error) { return _this.m.handleError(error); });
    };
    return WorkService;
}());
WorkService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database_deprecated__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database_deprecated__["a" /* AngularFireDatabase */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__message_service__["a" /* MessageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__message_service__["a" /* MessageService */]) === "function" && _b || Object])
], WorkService);

var _a, _b;
//# sourceMappingURL=work.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map