webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/AuthGuard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_user_service__ = __webpack_require__("./src/app/_services/user-service/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_storage_service_storage_service__ = __webpack_require__("./src/app/_services/storage-service/storage.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuard = /** @class */ (function () {
    function AuthGuard(userService, storage, router) {
        this.userService = userService;
        this.storage = storage;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (this.userService.getUserLoggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_user_service_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_3__services_storage_service_storage_service__["a" /* StorageService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/_dialogs/dialog-specific/dialog-specific.component.css":
/***/ (function(module, exports) {

module.exports = ".content {\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n"

/***/ }),

/***/ "./src/app/_dialogs/dialog-specific/dialog-specific.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-card-title>{{post.title}}</mat-card-title>\n\n  <div mat-dialog-content class=\"content\">\n    {{post.body}}\n  </div>\n  <div mat-dialog-actions>\n    <button mat-button [mat-dialog-close] cdkFocusInitial>Close</button>\n  </div>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/_dialogs/dialog-specific/dialog-specific.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogSpecificComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var DialogSpecificComponent = /** @class */ (function () {
    function DialogSpecificComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.post = data;
    }
    DialogSpecificComponent.prototype.ngOnInit = function () {
    };
    DialogSpecificComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DialogSpecificComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dialog-specific',
            template: __webpack_require__("./src/app/_dialogs/dialog-specific/dialog-specific.component.html"),
            styles: [__webpack_require__("./src/app/_dialogs/dialog-specific/dialog-specific.component.css")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatDialogRef */], Object])
    ], DialogSpecificComponent);
    return DialogSpecificComponent;
}());



/***/ }),

/***/ "./src/app/_services/api-service/api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
        this.API_URL = 'https://jsonplaceholder.typicode.com/posts';
        this.htttOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/json',
                'Token': 'token'
            })
        };
    }
    ApiService.prototype.getData = function () {
        return this.http.get(this.API_URL, this.htttOptions);
    };
    ApiService.prototype.getSpecificPost = function (id) {
        return this.http.get(this.API_URL + '/' + id, this.htttOptions);
    };
    ApiService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/_services/storage-service/storage.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_webstorage__ = __webpack_require__("./node_modules/ngx-webstorage/dist/app.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StorageService = /** @class */ (function () {
    function StorageService(storage) {
        this.storage = storage;
    }
    StorageService.prototype.stor = function (key, value) {
        this.storage.store(key, value);
    };
    StorageService.prototype.retrieve = function (key) {
        var value = this.storage.retrieve(key);
        if (value === null)
            return '';
        else
            return value;
    };
    StorageService.prototype.clear = function (key) {
        this.storage.clear(key);
    };
    StorageService.prototype.clearAll = function () {
        this.storage.clear();
    };
    StorageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ngx_webstorage__["a" /* LocalStorageService */]])
    ], StorageService);
    return StorageService;
}());



/***/ }),

/***/ "./src/app/_services/user-service/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__storage_service_storage_service__ = __webpack_require__("./src/app/_services/storage-service/storage.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = /** @class */ (function () {
    function UserService(storageService) {
        this.storageService = storageService;
        this.validUser = {
            "email": "eric@test.se",
            "password": "123"
        };
    }
    UserService.prototype.setUser = function (email, password) {
        if (email === this.validUser['email'] && password === this.validUser['password']) {
            console.log("LOGIN!");
            this.storageService.stor("email", email);
            this.storageService.stor("loggedIn", true);
        }
        else {
            console.log("invalid credentials");
        }
    };
    UserService.prototype.getUserLoggedIn = function () {
        return this.storageService.retrieve('loggedIn') === '' ? false : true;
    };
    UserService.prototype.getEmail = function () {
        return this.storageService.retrieve('email');
    };
    UserService.prototype.setUserLoggedOut = function () {
        this.storageService.clearAll();
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__storage_service_storage_service__["a" /* StorageService */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detailed_view_detailed_view_component__ = __webpack_require__("./src/app/detailed-view/detailed-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__AuthGuard__ = __webpack_require__("./src/app/AuthGuard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_3__home_home_component__["a" /* HomeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_5__AuthGuard__["a" /* AuthGuard */]] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_4__login_login_component__["a" /* LoginComponent */] },
    { path: 'detailed/:id', component: __WEBPACK_IMPORTED_MODULE_2__detailed_view_detailed_view_component__["a" /* DetailedViewComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_5__AuthGuard__["a" /* AuthGuard */]] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".card {\n  margin-left: auto;\n  margin-right: auto;\n  width: 80%;\n  text-align: center;\n}\n\n.card-avatar {\n  height: 100px;\n  width: 100px;\n}\n\n.post {\n  margin-left: auto;\n  margin-right: auto;\n  width: 50%;\n  text-align: center;\n  border: 1px solid black;\n  border-radius: 25px;\n  margin-top: 5px;\n}\n\n.example-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  min-width: 300px;\n}\n\n.mat-table {\n  overflow: auto;\n  max-height: 500px;\n}\n\n.mat-tab-label {\n  width: 50%;\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewEncapsulation */].None,
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_module__ = __webpack_require__("./src/app/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__agm_core__ = __webpack_require__("./node_modules/@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_api_service_api_service__ = __webpack_require__("./src/app/_services/api-service/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__dialogs_dialog_specific_dialog_specific_component__ = __webpack_require__("./src/app/_dialogs/dialog-specific/dialog-specific.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__detailed_view_detailed_view_component__ = __webpack_require__("./src/app/detailed-view/detailed-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_user_service_user_service__ = __webpack_require__("./src/app/_services/user-service/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_storage_service_storage_service__ = __webpack_require__("./src/app/_services/storage-service/storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ngx_webstorage__ = __webpack_require__("./node_modules/ngx-webstorage/dist/app.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__AuthGuard__ = __webpack_require__("./src/app/AuthGuard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_10__dialogs_dialog_specific_dialog_specific_component__["a" /* DialogSpecificComponent */],
                __WEBPACK_IMPORTED_MODULE_11__detailed_view_detailed_view_component__["a" /* DetailedViewComponent */],
                __WEBPACK_IMPORTED_MODULE_12__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_13__login_login_component__["a" /* LoginComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_4__material_module__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_6__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'AIzaSyDQlXYF1tEzBYjs7a2ELbtt6DxTUUu1miU'
                }),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* ReactiveFormsModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_8__services_api_service_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_14__services_user_service_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_15__services_storage_service_storage_service__["a" /* StorageService */], __WEBPACK_IMPORTED_MODULE_16_ngx_webstorage__["a" /* LocalStorageService */], __WEBPACK_IMPORTED_MODULE_17__AuthGuard__["a" /* AuthGuard */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_10__dialogs_dialog_specific_dialog_specific_component__["a" /* DialogSpecificComponent */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/detailed-view/detailed-view.component.css":
/***/ (function(module, exports) {

module.exports = ".gmap {\n  width: 50%;\n  height: 100%;\n}\n\nagm-map {\n  height: 40vh;\n  width: 79vw;\n}\n"

/***/ }),

/***/ "./src/app/detailed-view/detailed-view.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"card\">\n  <img mat-card-avatar class=\"card-avatar\" src=\"https://source.unsplash.com/random\">\n  <mat-card-title>Erics template for angular projects</mat-card-title>\n  <mat-card-subtitle>He is so cool!</mat-card-subtitle>\n  <mat-card-content>\n    <div *ngIf=\"post != undefined\">\n      <h2>{{post.title}}</h2>\n      <h5>{{post.body}}</h5>\n    </div>\n    <div *ngIf=\"post == undefined\">\n      <mat-spinner style=\"margin-right: auto; margin-left: auto\"></mat-spinner>\n    </div>\n\n    <div class=\"gmap\">\n      <agm-map [latitude]=\"lan\" [longitude]=\"lag\" [zoom]=\"12\">\n        <agm-marker [latitude]=\"lan\" [longitude]=\"lag\"\n                    [markerClickable]=\"true\" (markerClick)=\"openSnackBar()\"></agm-marker>\n      </agm-map>\n    </div>\n\n  </mat-card-content>\n\n\n</mat-card>\n"

/***/ }),

/***/ "./src/app/detailed-view/detailed-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailedViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_service_api_service__ = __webpack_require__("./src/app/_services/api-service/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DetailedViewComponent = /** @class */ (function () {
    function DetailedViewComponent(api, route, snackBar) {
        var _this = this;
        this.api = api;
        this.route = route;
        this.snackBar = snackBar;
        this.lan = 56.1814833;
        this.lag = 15.5922821;
        var id = this.route.snapshot.paramMap.get('id');
        console.log(id);
        this.api.getSpecificPost(id).subscribe(function (data) {
            _this.post = data;
            console.log(_this.post);
        }, function (error2) {
            console.log(error2);
        });
    }
    DetailedViewComponent.prototype.openSnackBar = function () {
        this.snackBar.open("Bth", "Nice", {
            duration: 2000,
        });
    };
    DetailedViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-detailed-view',
            template: __webpack_require__("./src/app/detailed-view/detailed-view.component.html"),
            styles: [__webpack_require__("./src/app/detailed-view/detailed-view.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_api_service_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["C" /* MatSnackBar */]])
    ], DetailedViewComponent);
    return DetailedViewComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"card\">\n\n  <img mat-card-avatar class=\"card-avatar\" src=\"https://source.unsplash.com/random\">\n  <i class=\"material-icons\" (click)=\"logOut()\" style=\"float: right\">exit_to_app</i>\n\n  <mat-card-title>Erics template for angular projects</mat-card-title>\n  <mat-card-subtitle>Logged In as: {{loggedInUser}}</mat-card-subtitle>\n\n  <mat-card-content>\n    <mat-tab-group>\n      <mat-tab label=\"View in row\">\n        <div *ngFor=\"let post of posts\" (click)=\"openDialog(post)\">\n          <div class=\"post\">\n            <h3>{{post.title}}</h3>\n            <p>{{post.body}}</p>\n          </div>\n        </div>\n      </mat-tab>\n      <mat-tab label=\"View in list\">\n        <div class=\"example-container mat-elevation-z8\">\n          <mat-table #table [dataSource]=\"dataSource\">\n\n            <ng-container matColumnDef=\"id\">\n              <mat-header-cell *matHeaderCellDef> No. </mat-header-cell>\n              <mat-cell *matCellDef=\"let element\">\n                <a routerLink=\"/detailed/{{element.id}}\" routerLinkActive=\"active\">{{element.id}}</a>\n              </mat-cell>\n            </ng-container>\n\n            <ng-container matColumnDef=\"title\">\n              <mat-header-cell *matHeaderCellDef> title </mat-header-cell>\n              <mat-cell *matCellDef=\"let element\" (click)=\"goToDetailedPost(element.id)\"> {{element.title}} </mat-cell>\n            </ng-container>\n\n\n            <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n            <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n          </mat-table>\n\n          <mat-paginator #paginator\n                         [pageSize]=\"10\"\n                         [pageSizeOptions]=\"[5, 10, 20]\"\n                         [showFirstLastButtons]=\"true\">\n          </mat-paginator>\n        </div>\n      </mat-tab>\n    </mat-tab-group>\n\n  </mat-card-content>\n</mat-card>\n\n\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_api_service_api_service__ = __webpack_require__("./src/app/_services/api-service/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dialogs_dialog_specific_dialog_specific_component__ = __webpack_require__("./src/app/_dialogs/dialog-specific/dialog-specific.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_user_service_user_service__ = __webpack_require__("./src/app/_services/user-service/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomeComponent = /** @class */ (function () {
    function HomeComponent(dialog, api, userService, router) {
        var _this = this;
        this.dialog = dialog;
        this.api = api;
        this.userService = userService;
        this.router = router;
        this.title = 'app';
        this.loggedInUser = "";
        this.displayedColumns = ['id', 'title'];
        this.loggedInUser = this.userService.getEmail();
        this.api.getData().subscribe(function (data) {
            _this.posts = data;
            _this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["G" /* MatTableDataSource */](_this.posts);
            _this.dataSource.paginator = _this.paginator;
        }, function (error2) {
            console.log(error2);
        });
    }
    HomeComponent.prototype.openDialog = function (post) {
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__dialogs_dialog_specific_dialog_specific_component__["a" /* DialogSpecificComponent */], {
            width: "100vw",
            height: "35vh",
            data: post
        });
    };
    HomeComponent.prototype.goToDetailedPost = function (id) {
        this.router.navigate(['/detailed', id]);
    };
    HomeComponent.prototype.logOut = function () {
        this.userService.setUserLoggedOut();
        this.router.navigate(["/login"]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["s" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["s" /* MatPaginator */])
    ], HomeComponent.prototype, "paginator", void 0);
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_2__services_api_service_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_5__services_user_service_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"card\">\n  <img mat-card-avatar class=\"card-avatar\" src=\"https://source.unsplash.com/random\">\n  <mat-card-title>Erics template for angular projects</mat-card-title>\n  <mat-card-subtitle>He is so cool!</mat-card-subtitle>\n  <mat-card-content>\n\n    <form (ngSubmit)=\"onSubmit()\" class=\"full-width\" [formGroup]=\"loginForm\">\n      <mat-form-field class=\"full-width\">\n        <input matInput placeholder=\"Email\" formControlName=\"email\">\n        <mat-error\n          *ngIf=\"loginForm.controls['email'].invalid && (loginForm.controls['email'].dirty || loginForm.controls['email'].touched) && loginForm.controls['email'].errors.email && !loginForm.controls['email'].errors.required\">Invalid\n          email.\n        </mat-error>\n        <mat-error *ngIf=\"loginForm.controls['email'].invalid && (loginForm.controls['email'].dirty || loginForm.controls['email'].touched) && loginForm.controls['email'].errors.required\">An email is\n          required.\n        </mat-error>\n      </mat-form-field>\n\n      <br>\n\n      <mat-form-field class=\"full-width\">\n        <input matInput type=\"password\" placeholder=\"Password\" formControlName=\"password\">\n        <mat-error *ngIf=\"loginForm.controls['password'].invalid && (loginForm.controls['password'].dirty || loginForm.controls['password'].touched) && loginForm.controls['password'].errors.required\">An password is\n          required.\n        </mat-error>\n      </mat-form-field>\n\n      <br>\n\n      <button mat-button type=\"submit\" [disabled]=\"!loginForm.valid\">Login!</button>\n    </form>\n\n\n  </mat-card-content>\n</mat-card>\n\n\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_user_service__ = __webpack_require__("./src/app/_services/user-service/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(userService, router, snackBar) {
        this.userService = userService;
        this.router = router;
        this.snackBar = snackBar;
        this.createForm();
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.createForm = function () {
        this.loginForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
            'email': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].email
            ]),
            'password': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required
            ])
        });
    };
    LoginComponent.prototype.onSubmit = function () {
        //mock since logout does not exist yet
        this.userService.setUserLoggedOut();
        this.userService.setUser(this.loginForm.controls['email'].value, this.loginForm.controls['password'].value);
        //check localstorage since i dont have a real api
        if (this.userService.getUserLoggedIn()) {
            this.router.navigate(["/home"]);
            this.snackBar.open("Login Succeded", "OK", { duration: 2000 });
        }
        else {
            this.snackBar.open("Invalid credentials", "OK", { duration: 2000 });
        }
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_user_service_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["C" /* MatSnackBar */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["g" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["F" /* MatStepperModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["l" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["m" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["n" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["o" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["p" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["q" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["r" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["t" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["u" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["v" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["w" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["x" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["y" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["z" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["B" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["A" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["D" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["E" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["H" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["I" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["J" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["K" /* MatTooltipModule */],
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map