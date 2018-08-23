(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/add-recipe/add-recipe.component.css":
/*!*****************************************************!*\
  !*** ./src/app/add-recipe/add-recipe.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form {\n    width: 50%;\n    font-size: medium;\n}\n"

/***/ }),

/***/ "./src/app/add-recipe/add-recipe.component.html":
/*!******************************************************!*\
  !*** ./src/app/add-recipe/add-recipe.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Existing Recipes-->\n<div *ngFor=\"let recipe of newRecipe\">\n    <div class=\"row\">\n        <div class=\"col-2\">\n            <header>{{addRecipe.mealName}}</header>\n            <p class=\"mb-0\">{{addRecipe.instructions}}</p>\n        </div>\n        <div class=\"col-8\">\n                <p class=\"mb-0\">{{addRecipe.instructions}}</p>\n                <footer class=\"blockquote-footer\"><cite>{{addRecipe.creator}}</cite></footer>\n        </div>\n        <div class=\"col-2\">\n            <p class=\"mb-0\">{{addRecipe.instructions}}</p>\n        </div>\n    </div>\n</div>\n\n\n<!--Add recipe-->\n<h1 style=\"text-align: center; margin: 10px\"> -- Add a recipe -- </h1>\n<div class=\"row\">\n\t<div class=\"col-2\">\n           <blockquote class=\"blockquote\">\n           <h2><strong>{{newRecipe.mealName}}</strong></h2>\n            <p class=\"mb-0\">{{newRecipe.ingredients}}</p>\n        </blockquote>\n\t</div>\n    <div class=\"col-8\">\n            <blockquote class=\"blockquote\">\n                <p class=\"mb-0\">{{newRecipe.instructions}}</p>\n            </blockquote>\n    </div>\n    <div class=\"col-2\">\n            <footer class=\"blockquote-footer\"><cite>{{newRecipe.creator}}</cite></footer>\n    </div>\n</div>\n\n<form class=\"form\" (ngSubmit)=\"submitClicked(); reviewForm.reset()\" #reviewForm=\"ngForm\">\n\t<div *ngIf=\"reviewForm.invalid && email.touched && instructions.touched && ingredients.touched && mealName.touched\" class=\"alert alert-danger\">\n\t\t<ul>\n            <li *ngIf=\"email.errors && email.errors.required\">\n                Email is required.\n            </li>\n\t\t\t<li *ngIf=\"email.errors && email.errors.pattern\">\n                Email is not formatted correctly.\n            </li>\n            <li *ngIf=\"mealName.errors && mealName.errors.required\">\n                Recipe name is required.\n            </li>\n            <li *ngIf=\"ingredients.errors && ingredients.errors.required\">\n                Ingredients are required.\n            </li>\n\t\t\t<li *ngIf=\"instructions.errors && instructions.errors.required\">\n                Instructions are required.\n            </li>\n        </ul>\n\n\n\t</div>\n    <div class=\"form-group\">\n        <label for=\"email\">Email</label>\n        <input  class=\"form-control\" type=\"email\" placeholder=\"Enter your email\" name=\"email\" [(ngModel)]=\"newRecipe.creator\" required pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$\" #email=\"ngModel\" [class.is-valid]=\"email.valid\" [class.is-invalid]=\"email.invalid && email.touched\" />\n\t\t<div class=\"invalid-feedback\">\n\t\t\tEmail is required and needs to look like an email address.\n\t\t</div>\n\n\t</div>\n    <div class=\"form-group\">\n        <label for=\"mealName\">Recipe Name</label>\n        <textarea class=\"form-control\" placeholder=\"Enter the recipe name\" name=\"mealName\" [(ngModel)]=\"newRecipe.mealName\" required #mealName =\"ngModel\" [class.is-valid]=\"mealName.valid\" [class.is-invalid]=\"mealName.invalid && mealName.touched\"></textarea>\n\t\t<div class=\"invalid-feedback\">\n\t\t\tRecipe name is required.\n\t\t</div>\n    </div>\n     <div class=\"form-group\">\n        <label for=\"ingredients\">Ingredients</label>\n        <textarea class=\"form-control\" placeholder=\"Enter the ingredients\" name=\"ingredients\" [(ngModel)]=\"newRecipe.ingredients\" required #ingredients=\"ngModel\" [class.is-valid]=\"ingredients.valid\" [class.is-invalid]=\"ingredients.invalid && ingredients.touched\"></textarea>\n\t\t<div class=\"invalid-feedback\">\n\t\t\tIngredients are required.\n\t\t</div>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"instructions\">Instructions</label>\n        <textarea class=\"form-control\" placeholder=\"Enter the instructions\" name=\"instructions\" [(ngModel)]=\"newRecipe.instructions\" required #instructions=\"ngModel\" [class.is-valid]=\"instructions.valid\" [class.is-invalid]=\"instructions.invalid && instructions.touched\"></textarea>\n\t\t<div class=\"invalid-feedback\">\n\t\t\tInstructions are required.\n\t\t</div>\n    </div>\n    <input type=\"submit\" class=\"btn btn-default\" value=\"Submit Recipe\" [disabled]=\"reviewForm.invalid\" />\n</form>\n"

/***/ }),

/***/ "./src/app/add-recipe/add-recipe.component.ts":
/*!****************************************************!*\
  !*** ./src/app/add-recipe/add-recipe.component.ts ***!
  \****************************************************/
/*! exports provided: AddRecipeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddRecipeComponent", function() { return AddRecipeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AddRecipeComponent = /** @class */ (function () {
    function AddRecipeComponent() {
    }
    AddRecipeComponent.prototype.ngOnInit = function () {
        this.newRecipe = {
            id: -1,
            creator: '',
            ingredients: '',
            instructions: '',
            category: '',
            mealName: ''
        };
    };
    AddRecipeComponent.prototype.submitClicked = function () {
        if (!this.addRecipe) {
            this.addRecipe = [];
        }
        this.addRecipe.push(this.newRecipe);
        this.ngOnInit();
    };
    AddRecipeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-recipe',
            template: __webpack_require__(/*! ./add-recipe.component.html */ "./src/app/add-recipe/add-recipe.component.html"),
            styles: [__webpack_require__(/*! ./add-recipe.component.css */ "./src/app/add-recipe/add-recipe.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AddRecipeComponent);
    return AddRecipeComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"all\">\n    <app-navbar></app-navbar>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _meal_meal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./meal/meal.component */ "./src/app/meal/meal.component.ts");
/* harmony import */ var _filter_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./filter.pipe */ "./src/app/filter.pipe.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tabs/tabs.component */ "./src/app/tabs/tabs.component.ts");
/* harmony import */ var _add_recipe_add_recipe_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add-recipe/add-recipe.component */ "./src/app/add-recipe/add-recipe.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _favorites_favorites_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./favorites/favorites.component */ "./src/app/favorites/favorites.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.es5.js");
/* harmony import */ var _favstabs_favstabs_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./favstabs/favstabs.component */ "./src/app/favstabs/favstabs.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var appRoutes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home/:id', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'favorites', component: _favorites_favorites_component__WEBPACK_IMPORTED_MODULE_12__["FavoritesComponent"] },
    { path: 'addRecipe', component: _add_recipe_add_recipe_component__WEBPACK_IMPORTED_MODULE_8__["AddRecipeComponent"] },
    { path: '**', component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_13__["NotFoundComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
                _meal_meal_component__WEBPACK_IMPORTED_MODULE_4__["MealComponent"],
                _filter_pipe__WEBPACK_IMPORTED_MODULE_5__["FilterPipe"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"],
                _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_7__["TabsComponent"],
                _add_recipe_add_recipe_component__WEBPACK_IMPORTED_MODULE_8__["AddRecipeComponent"],
                _favorites_favorites_component__WEBPACK_IMPORTED_MODULE_12__["FavoritesComponent"],
                _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_13__["NotFoundComponent"],
                _favstabs_favstabs_component__WEBPACK_IMPORTED_MODULE_15__["FavstabsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                ng2_search_filter__WEBPACK_IMPORTED_MODULE_14__["Ng2SearchPipeModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"].forRoot(appRoutes, { enableTracing: false } // <-- debugging purposes only
                )
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/favorites.service.ts":
/*!**************************************!*\
  !*** ./src/app/favorites.service.ts ***!
  \**************************************/
/*! exports provided: FavoritesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritesService", function() { return FavoritesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FavoritesService = /** @class */ (function () {
    function FavoritesService() {
        this.favorites = {
            totalquantity: 0,
            items: []
        };
    }
    FavoritesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], FavoritesService);
    return FavoritesService;
}());



/***/ }),

/***/ "./src/app/favorites/favorites.component.css":
/*!***************************************************!*\
  !*** ./src/app/favorites/favorites.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-img-top{\n    width: 9vh;\n    height: 9vh;\n}\n"

/***/ }),

/***/ "./src/app/favorites/favorites.component.html":
/*!****************************************************!*\
  !*** ./src/app/favorites/favorites.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 style=\"text-align: center; margin: 10px;\"> -- Favorites -- </h1>\n<h6 style=\"text-align: center\">\n  There are {{favorites.totalquantity}} recipes that you favorited!\n</h6>\n\n<table class=\"table table-striped\" style=\"font-size: medium\">\n  <thead>\n    <tr>\n      <th scope=\"col\">Item</th>\n        <th scope=\"col\"></th>\n         <th scope=\"col\"></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let favoritesitem of favorites.items\">\n        <th scope=\"row\"><img class=\"card-img-top mx-auto\" src=\"{{favoritesitem.picture}}\" alt=\"favorites\"></th>\n        <th scope=\"row\">{{favoritesitem.name}}</th>\n          <td></td>\n    </tr>\n  </tbody>\n</table>"

/***/ }),

/***/ "./src/app/favorites/favorites.component.ts":
/*!**************************************************!*\
  !*** ./src/app/favorites/favorites.component.ts ***!
  \**************************************************/
/*! exports provided: FavoritesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritesComponent", function() { return FavoritesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _favorites_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../favorites.service */ "./src/app/favorites.service.ts");
/* harmony import */ var _meal_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../meal-model */ "./src/app/meal-model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FavoritesComponent = /** @class */ (function () {
    function FavoritesComponent(favoritesService) {
        this.favoritesService = favoritesService;
        this.show = false;
    }
    FavoritesComponent.prototype.ngOnInit = function () {
        this.favorites = this.favoritesService.favorites;
    };
    FavoritesComponent.prototype.setTab = function (selectedTab) {
        this.tab = selectedTab;
        this.show = !this.show;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _meal_model__WEBPACK_IMPORTED_MODULE_2__["MealModel"])
    ], FavoritesComponent.prototype, "meal", void 0);
    FavoritesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-favorites',
            template: __webpack_require__(/*! ./favorites.component.html */ "./src/app/favorites/favorites.component.html"),
            styles: [__webpack_require__(/*! ./favorites.component.css */ "./src/app/favorites/favorites.component.css")]
        }),
        __metadata("design:paramtypes", [_favorites_service__WEBPACK_IMPORTED_MODULE_1__["FavoritesService"]])
    ], FavoritesComponent);
    return FavoritesComponent;
}());



/***/ }),

/***/ "./src/app/favstabs/favstabs.component.css":
/*!*************************************************!*\
  !*** ./src/app/favstabs/favstabs.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/favstabs/favstabs.component.html":
/*!**************************************************!*\
  !*** ./src/app/favstabs/favstabs.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav justify-content-center\">\n\t<li class=\"nav-item\">\n\t\t<button class=\"btn btn-outline-secondary btn-sm\" (click)=\"setTab(1)\" [class.active]=\"tab === 1\" >Category</button>\n\t</li>\n\t<li class=\"nav-item\">\n\t\t<button  class=\"btn btn-outline-secondary btn-sm\" (click)=\"setTab(2)\"  [class.active]=\"tab === 2\" >Ingredients</button>\n\t</li>\n    <li class=\"nav-item\">\n\t\t<button  class=\"btn btn-outline-secondary btn-sm\" (click)=\"setTab(3)\"  [class.active]=\"tab === 3\" >Instructions</button>\n\t</li>\n</ul>\n<div *ngIf=\"tab === 1\">\n    <div *ngIf=\"show\">\n\t   <p class=\"card-text\">{{favoritesitem.name}}</p>\n    </div>\n</div>\n<div *ngIf=\"tab === 3\">\n    <div *ngIf=\"show\">\n\t   <p class=\"card-text\">{{favoritesitem.instructions}}</p>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/favstabs/favstabs.component.ts":
/*!************************************************!*\
  !*** ./src/app/favstabs/favstabs.component.ts ***!
  \************************************************/
/*! exports provided: FavstabsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavstabsComponent", function() { return FavstabsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _meal_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../meal-model */ "./src/app/meal-model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FavstabsComponent = /** @class */ (function () {
    function FavstabsComponent() {
        this.show = false;
    }
    FavstabsComponent.prototype.ngOnInit = function () {
        //setTab(selectedTab: number){
        //this.tab = selectedTab;
        //this.show = !this.show;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _meal_model__WEBPACK_IMPORTED_MODULE_1__["MealModel"])
    ], FavstabsComponent.prototype, "meal", void 0);
    FavstabsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-favstabs',
            template: __webpack_require__(/*! ./favstabs.component.html */ "./src/app/favstabs/favstabs.component.html"),
            styles: [__webpack_require__(/*! ./favstabs.component.css */ "./src/app/favstabs/favstabs.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FavstabsComponent);
    return FavstabsComponent;
}());



/***/ }),

/***/ "./src/app/filter.pipe.ts":
/*!********************************!*\
  !*** ./src/app/filter.pipe.ts ***!
  \********************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (value, input) {
        if (input) {
            input = input.toLowerCase();
            return value.filter(function (el) {
                return el.toLowerCase().indexOf(input) > -1;
            });
        }
        return value;
    };
    FilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'filter'
        })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".carousel-inner img {\n  margin: auto;\n    width: 40%;\n    border-radius: 20px;\n}\n\n.carousel{\n  interval: 1000;\n}\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <ul class=\"nav nav-pills\" style=\"justify-content:center; margin: 10px;\">\n      <li class=\"nav-item\" style=\" padding-left: 2px; padding-right: 2px;\" *ngFor=\"let category of categories\">\n        <button type=\"button\" class=\"btn btn-outline-dark\" routerLink=\"/home/{{category.strCategory}}\" (click)=\"reloadMeals()\">{{category.strCategory}}</button>\n      </li>\n    </ul>\n<div *ngIf=\"show\" id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\">\n  <ol class=\"carousel-indicators\">\n    <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\"></li>\n    <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li>\n    <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"2\"></li>\n  </ol>\n  <div class=\"carousel-inner\" style=\"text-align: center; align-content: center\">\n    <div class=\"carousel-item active\">\n        <h5>Crock Pot Chicken Baked Tacos</h5>\n      <img class=\"d-block\" src=\"https:\\/\\/www.themealdb.com\\/images\\/media\\/meals\\/ypxvwv1505333929.jpg\" alt=\"First slide\">\n    </div>\n    <div class=\"carousel-item\">\n         <h5>Carrot Cake</h5>\n      <img class=\"d-block\" src=\"https:\\/\\/www.themealdb.com\\/images\\/media\\/meals\\/vrspxv1511722107.jpg\" alt=\"Second slide\">\n    </div>\n    <div class=\"carousel-item\">\n             <h5>Prawn & Fennel Bisque</h5>\n      <img class=\"d-block\" src=\"https:\\/\\/www.themealdb.com\\/images\\/media\\/meals\\/rtwwvv1511799504.jpg\" alt=\"Third slide\">\n    </div>\n  </div>\n  <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">\n    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Previous</span>\n  </a>\n  <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">\n    <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Next</span>\n  </a>\n</div>\n\n<div class=\"card-deck\">\n    <app-meal [meal]=\"g\" *ngFor=\"let g of homeMeal\"></app-meal>\n</div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = /** @class */ (function () {
    function HomeComponent(httpClient, route, location) {
        this.httpClient = httpClient;
        this.route = route;
        this.location = location;
        this.show = false;
    }
    HomeComponent.prototype.reloadMeals = function () {
        var _this = this;
        var id = this.route.snapshot.paramMap.get('id');
        if (id) {
            this.httpClient.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=' + id).subscribe(function (results) { _this.homeMeal = results.meals; });
        }
        this.show = !this.show;
    };
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.httpClient.get('https://www.themealdb.com/api/json/v1/1/categories.php').subscribe(function (results) {
            _this.categories = results.categories;
        });
        this.reloadMeals();
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/meal-model.ts":
/*!*******************************!*\
  !*** ./src/app/meal-model.ts ***!
  \*******************************/
/*! exports provided: MealModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MealModel", function() { return MealModel; });
var MealModel = /** @class */ (function () {
    function MealModel() {
    }
    return MealModel;
}());



/***/ }),

/***/ "./src/app/meal/meal.component.css":
/*!*****************************************!*\
  !*** ./src/app/meal/meal.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn {\n    background: 0;\n}\n.card-img-top {\n    border-radius: 20px;\n}\n.container {\n  width: 22rem;\n    border: 0;\n}\n/* Style the button and place it in the middle of the container/image */\n.container .btn {\n  position: absolute;\n    top: 7%;\n  left: 15%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%);\n    background: 0;\n  color: white;\n  font-size: 20px;\n  padding: 12px 12px;\n  border: none;\n  cursor: pointer;\n  border-radius: 10px;\n}\n/* Make the image responsive */\n.container img {\n  width: 100%;\n  height: auto;\n}\n.container .btn:hover {\n  background-color: black;\n}\n"

/***/ }),

/***/ "./src/app/meal/meal.component.html":
/*!******************************************!*\
  !*** ./src/app/meal/meal.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card container\">\n  <img class=\"card-img-top mx-auto\" src=\"{{meal.strMealThumb}}\" alt=\"{{meal.strMeal}}\">\n  <button class=\"fas fa-heart btn\" *ngIf=\"!pushed\" (click)=\"addToCart()\"> </button>\n  <div class=\"card-body\">\n      <h5 class =\"card-title\" style=\"text-align: center\">{{meal.strMeal}}</h5>\n       <app-tabs [meal]=\"meal\"></app-tabs>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/meal/meal.component.ts":
/*!****************************************!*\
  !*** ./src/app/meal/meal.component.ts ***!
  \****************************************/
/*! exports provided: MealComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MealComponent", function() { return MealComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _meal_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../meal-model */ "./src/app/meal-model.ts");
/* harmony import */ var _favorites_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../favorites.service */ "./src/app/favorites.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MealComponent = /** @class */ (function () {
    function MealComponent(httpClient, favoritesService) {
        this.httpClient = httpClient;
        this.favoritesService = favoritesService;
        this.pushed = false;
    }
    MealComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.favorites = this.favoritesService.favorites;
        console.log(this.meal.idMeal);
        this.httpClient.get('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + this.meal.idMeal).subscribe(function (results) {
            _this.meal = results.meals[0];
        });
    };
    MealComponent.prototype.addToCart = function () {
        var _this = this;
        var existingItem;
        existingItem = this.favorites.items.find(function (x) { return x.mealid == _this.meal.idMeal; });
        if (!existingItem) {
            this.favorites.items.push({ mealid: this.meal.idMeal, name: this.meal.strMeal, category: this.meal.strCategory, picture: this.meal.strMealThumb, instructions: this.meal.strInstructions, quantity: 1 });
            this.favorites.totalquantity = this.favorites.totalquantity + 1;
        }
        else {
            existingItem.quantity = existingItem.quantity;
        }
        this.pushed = true;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _meal_model__WEBPACK_IMPORTED_MODULE_1__["MealModel"])
    ], MealComponent.prototype, "meal", void 0);
    MealComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-meal',
            template: __webpack_require__(/*! ./meal.component.html */ "./src/app/meal/meal.component.html"),
            styles: [__webpack_require__(/*! ./meal.component.css */ "./src/app/meal/meal.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _favorites_service__WEBPACK_IMPORTED_MODULE_2__["FavoritesService"]])
    ], MealComponent);
    return MealComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.sidenav {\n    height: 100%;\n    width: 200px;\n    position: fixed;\n    z-index: 1;\n    top: 0;\n    left: 0;\n    background-color: #403D43;\n    overflow-x: hidden;\n    padding-top: 10px;\n     font-family: 'Quattrocento Sans', 'sans-serif';\n}\n\n.sidenav a {\n    padding: 6px 8px 6px 8px;\n    text-decoration: none;\n    font-size: 20px;\n    color: whitesmoke;\n    display: block;\n}\n\n.sidenav a:hover {\n    color: #f1f1f1;\n}\n\n.main {\n    margin-left: 200px; /* Same as the width of the sidenav */\n    font-size: 2vh; /* Increased text to enable scrolling */\n    font-family: 'Quattrocento Sans', 'sans-serif';\n}\n\n@media screen and (max-height: 450px) {\n    .sidenav {padding-top: 15px;}\n    .sidenav a {font-size: 18px;}\n}\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <div class=\"all\">\n     <div class=\"sidenav\">\n         <div>\n            <a class=\"nav-link\" routerLink=\"/home\" routerLinkActive=\"active\" style=\"text-align: left\"><i class=\"fas fa-home\"></i> Home<span class=\"sr-only\" >(current)</span></a>\n            <a class=\"nav-link\" routerLink=\"/favorites\" routerLinkActive=\"active\"><i class=\"far fa-heart\"></i> Favorites<span></span></a>\n            <a class=\"nav-link\" routerLink=\"/addRecipe\" routerLinkActive=\"active\"><i class=\"far fa-plus-square\"></i> Add a recipe <span></span></a>\n         </div>\n         <div class=\"\">\n             <a class=\"navbar-brand fixed-bottom\" href=\"https://www.themealdb.com/\" style=\"width:50px;\">MealDB</a>\n             <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n             <span class=\"navbar-toggler-icon\"></span>\n            </button>\n        </div>\n    </div>\n        <main class=\"main\">\n            <router-outlet></router-outlet>\n        </main>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _favorites_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../favorites.service */ "./src/app/favorites.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(favoritesService) {
        this.favoritesService = favoritesService;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.favorites = this.favoritesService.favorites;
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_favorites_service__WEBPACK_IMPORTED_MODULE_1__["FavoritesService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/not-found/not-found.component.css":
/*!***************************************************!*\
  !*** ./src/app/not-found/not-found.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/not-found/not-found.component.html":
/*!****************************************************!*\
  !*** ./src/app/not-found/not-found.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  not-found works!\n</p>\n"

/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.css */ "./src/app/not-found/not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/tabs/tabs.component.css":
/*!*****************************************!*\
  !*** ./src/app/tabs/tabs.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/tabs/tabs.component.html":
/*!******************************************!*\
  !*** ./src/app/tabs/tabs.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav justify-content-center\">\n\t<li class=\"nav-item\">\n\t\t<button class=\"btn btn-outline-secondary btn-sm\" (click)=\"setTab(1)\" [class.active]=\"tab === 1\" >Category</button>\n\t</li>\n\t<li class=\"nav-item\">\n\t\t<button  class=\"btn btn-outline-secondary btn-sm\" (click)=\"setTab(2)\"  [class.active]=\"tab === 2\" >Ingredients</button>\n\t</li>\n    <li class=\"nav-item\">\n\t\t<button  class=\"btn btn-outline-secondary btn-sm\" (click)=\"setTab(3)\"  [class.active]=\"tab === 3\" >Instructions</button>\n\t</li>\n</ul>\n<div *ngIf=\"tab === 1\">\n    <div *ngIf=\"show\">\n\t   <p class=\"card-text\">{{meal.strCategory}}</p>\n    </div>\n</div>\n<div *ngIf=\"tab === 2\">\n    <div *ngIf=\"show\">\n         <p class=\"card-text\">{{meal.strIngredient1}}   {{meal.strMeasure1}}<br>{{meal.strIngredient2}}   {{meal.strMeasure2}}<br>{{meal.strIngredient3}}   {{meal.strMeasure3}}<br>{{meal.strIngredient4}}   {{meal.strMeasure4}}<br>{{meal.strIngredient5}}  {{meal.strMeasure5}}<br>{{meal.strIngredient6}}   {{meal.strMeasure6}}<br>{{meal.strIngredient7}}   {{meal.strMeasure7}}<br>{{meal.strIngredient8}}   {{meal.strMeasure8}}<br>{{meal.strIngredient9}}   {{meal.strMeasure9}}<br>{{meal.strIngredient10}}  {{meal.strMeasure10}}<br>{{meal.strIngredient11}}   {{meal.strMeasure11}}<br>{{meal.strIngredient12}}   {{meal.strMeasure12}}<br>{{meal.strIngredient13}}   {{meal.strMeasure13}}<br>{{meal.strIngredient14}}   {{meal.strMeasure14}}<br>{{meal.strIngredient15}}  {{meal.strMeasure15}}<br>{{meal.strIngredient16}}   {{meal.strMeasure16}}<br>{{meal.strIngredient17}}   {{meal.strMeasure17}}<br>{{meal.strIngredient18}}   {{meal.strMeasure18}}<br>{{meal.strIngredient19}}   {{meal.strMeasure19}}<br>{{meal.strIngredient20}}  {{meal.strMeasure20}}<br></p>\n     </div>\n</div>\n<div *ngIf=\"tab === 3\">\n    <div *ngIf=\"show\">\n\t   <p class=\"card-text\">{{meal.strInstructions}}</p>\n    </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/tabs/tabs.component.ts":
/*!****************************************!*\
  !*** ./src/app/tabs/tabs.component.ts ***!
  \****************************************/
/*! exports provided: TabsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsComponent", function() { return TabsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _meal_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../meal-model */ "./src/app/meal-model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TabsComponent = /** @class */ (function () {
    function TabsComponent() {
        this.show = false;
    }
    TabsComponent.prototype.ngOnInit = function () {
    };
    TabsComponent.prototype.setTab = function (selectedTab) {
        this.tab = selectedTab;
        this.show = !this.show;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _meal_model__WEBPACK_IMPORTED_MODULE_1__["MealModel"])
    ], TabsComponent.prototype, "meal", void 0);
    TabsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tabs',
            template: __webpack_require__(/*! ./tabs.component.html */ "./src/app/tabs/tabs.component.html"),
            styles: [__webpack_require__(/*! ./tabs.component.css */ "./src/app/tabs/tabs.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TabsComponent);
    return TabsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\jorda\Documents\GitHub\FoodApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map