(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+bDT":
/*!************************************************************!*\
  !*** ./apps/github-search/src/app/http/http-app.module.ts ***!
  \************************************************************/
/*! exports provided: HttpAppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpAppModule", function() { return HttpAppModule; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _accept_header_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accept-header.interceptor */ "nnwv");
/* harmony import */ var _error_handling_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error-handling.interceptor */ "Gw9n");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");




class HttpAppModule {
}
HttpAppModule.ɵfac = function HttpAppModule_Factory(t) { return new (t || HttpAppModule)(); };
HttpAppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: HttpAppModule });
HttpAppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ providers: [
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"], useClass: _accept_header_interceptor__WEBPACK_IMPORTED_MODULE_1__["AcceptHeaderInterceptor"], multi: true },
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"], useClass: _error_handling_interceptor__WEBPACK_IMPORTED_MODULE_2__["ErrorHandlingInterceptor"], multi: true },
    ] });


/***/ }),

/***/ 0:
/*!**********************************************!*\
  !*** multi ./apps/github-search/src/main.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/runner/work/github-search-api-exercise/github-search-api-exercise/apps/github-search/src/main.ts */"LEnf");


/***/ }),

/***/ "2OKu":
/*!**************************************************!*\
  !*** ./apps/github-search/src/app/app.module.ts ***!
  \**************************************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ "Q9Ex");
/* harmony import */ var ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/i18n */ "Rgb0");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/locales/en */ "tAZD");
/* harmony import */ var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "omvX");
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/layout */ "nHXS");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./header/header.component */ "Acbv");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-routing.module */ "wZcc");
/* harmony import */ var _http_http_app_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./http/http-app.module */ "+bDT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ "8Y7J");














Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["registerLocaleData"])(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_4___default.a);
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ providers: [{ provide: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_2__["NZ_I18N"], useValue: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_2__["en_US"] }], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _http_http_app_module__WEBPACK_IMPORTED_MODULE_11__["HttpAppModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderModule"],
            ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_8__["NzLayoutModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
        _http_http_app_module__WEBPACK_IMPORTED_MODULE_11__["HttpAppModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderModule"],
        ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_8__["NzLayoutModule"]] }); })();


/***/ }),

/***/ "8qld":
/*!****************************************************************************!*\
  !*** ./apps/github-search/src/app/search/search-service/search.service.ts ***!
  \****************************************************************************/
/*! exports provided: SearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchService", function() { return SearchService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "8Y7J");







class SearchService {
    constructor(http, route, router) {
        this.http = http;
        this.route = route;
        this.router = router;
        this.error = '';
        this.queryParams$ = this.route.queryParamMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(paramMap => !!paramMap.get('q')), // Ignore empty query to prevent errors
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(paramMap => this.extractKeys(paramMap)), // Map to plain object
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])((prev, curr) => 
        // Really basic object comparison to prevent repeat emits when params haven't changed.
        JSON.stringify(prev) === JSON.stringify(curr)), // Normally I'd reach for lodash
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(params => this.setSearches(params)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])());
        this._search = {
            'repositories': new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null),
            'users': new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null),
        };
        this.search = {
            'repositories': this._search.repositories.asObservable().pipe(
            // Fall back to previous emission on error.
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["scan"])((prev, next) => next !== null && next !== void 0 ? next : prev)),
            'users': this._search.users.asObservable().pipe(
            // Fall back to previous emission on error.
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["scan"])((prev, next) => next !== null && next !== void 0 ? next : prev)),
        };
    }
    // Map QueryParamMap to plain object for external availability.
    extractKeys(paramMap) {
        let extractedParams = {
            q: '',
            type: 'repositories',
            sort: '',
            order: '',
            page: '',
        };
        for (let key of paramMap.keys) {
            extractedParams[key] = paramMap.get(key);
        }
        return extractedParams;
    }
    // Map HttpClient responses to BehaviorSubjects for reuse since
    // HttpClient methods complete after one emit.
    setSearches(params) {
        const { q, page, sort, order } = params;
        for (let type in this.search) {
            this.http.get(`https://api.github.com/search/${type}`, {
                params: {
                    q, page, sort, order,
                    per_page: '10',
                }
            }).pipe(
            // Return null on error so scan operator on the observables above
            // can fall back to the previous emission.
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(() => null)).subscribe(response => this._search[type].next(response));
        }
    }
    // In lieu of lastValueFrom 😬
    getQueryParams() {
        return this.queryParams$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)).toPromise();
    }
    // Merge queryParams only when `q` doesn't change.
    changeQuery(newParams) {
        const queryParamsHandling = ('q' in newParams) ? '' : 'merge';
        this.router.navigate(['search'], {
            queryParams: Object.assign({}, newParams),
            queryParamsHandling
        });
    }
}
SearchService.ɵfac = function SearchService_Factory(t) { return new (t || SearchService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
SearchService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: SearchService, factory: SearchService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Acbv":
/*!***************************************************************!*\
  !*** ./apps/github-search/src/app/header/header.component.ts ***!
  \***************************************************************/
/*! exports provided: HeaderComponent, HeaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderModule", function() { return HeaderModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/layout */ "nHXS");
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/menu */ "/L1H");
/* harmony import */ var ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/affix */ "v1Dh");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/input */ "px0D");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/icon */ "66zS");
/* harmony import */ var _search_search_service_search_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../search/search-service/search.service */ "8qld");
/* harmony import */ var ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/alert */ "5Izy");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "8Y7J");




















const _c0 = ["searchField"];
function HeaderComponent_nz_alert_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "nz-alert", 8);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("nzDescription", _r2);
} }
const _c1 = function () { return ["search", ""]; };
function HeaderComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function HeaderComponent_ng_template_10_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r4.searchService.error = ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "Refresh");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r3.searchService.error);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](2, _c1));
} }
const _c2 = function () { return { updateOn: "blur" }; };
class HeaderComponent {
    constructor(searchService) {
        this.searchService = searchService;
        this.searchQ = '';
        this.changeQuery = this.searchService.changeQuery.bind(this.searchService);
    }
    ngOnInit() {
        this.searchService.queryParams$.subscribe(params => this.searchQ = params['q']);
    }
    focusSearchKeyboardShortcut(event) {
        if (document.activeElement != this.searchField.nativeElement) {
            this.searchField.nativeElement.focus();
            event.preventDefault();
        }
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_search_search_service_search_service__WEBPACK_IMPORTED_MODULE_7__["SearchService"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["demo-header"]], viewQuery: function HeaderComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.searchField = _t.first);
    } }, hostBindings: function HeaderComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("keydown./", function HeaderComponent_keydown___HostBindingHandler($event) { return ctx.focusSearchKeyboardShortcut($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresolveDocument"]);
    } }, decls: 12, vars: 4, consts: [["src", "assets/github-dark.png", "alt", "GitHub icon logo", 1, "logo"], ["nz-menu", "", "nzTheme", "dark", "nzMode", "horizontal"], ["nzSuffixIcon", "search", 2, "max-width", "300px"], ["nz-input", "", "placeholder", "Search", 3, "ngModel", "ngModelOptions", "ngModelChange", "keyup.enter"], ["searchField", ""], ["nz-menu-item", ""], ["nzBanner", "", "nzMessage", "Something went wrong!", 3, "nzDescription", 4, "ngIf"], ["alert", ""], ["nzBanner", "", "nzMessage", "Something went wrong!", 3, "nzDescription"], [2, "margin-left", "1rem", 3, "routerLink", "click"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "nz-affix");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "nz-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "nz-input-group", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "input", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function HeaderComponent_Template_input_ngModelChange_5_listener($event) { return ctx.changeQuery({ q: $event }); })("keyup.enter", function HeaderComponent_Template_input_keyup_enter_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r6); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](6); return ctx.changeQuery({ q: _r0.value }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8, "Pull requests");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](9, HeaderComponent_nz_alert_9_Template, 1, 1, "nz-alert", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](10, HeaderComponent_ng_template_10_Template, 4, 3, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx.searchQ)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](3, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.searchService.error);
    } }, directives: [ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_4__["NzAffixComponent"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_2__["NzHeaderComponent"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_3__["NzMenuDirective"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_5__["NzInputGroupComponent"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_5__["NzInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_3__["NzMenuItemDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgIf"], ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_8__["NzAlertComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLinkWithHref"]], styles: [".logo[_ngcontent-%COMP%] {\n  float: left;\n  max-height: 100%;\n  padding: 15px;\n}\n\nnz-header[_ngcontent-%COMP%] {\n  padding: 0 calc((100% - 1000px) / 2);\n}\n\nli[_ngcontent-%COMP%] {\n  margin: 0 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUFDRjs7QUFFQTtFQUNFLG9DQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0FBQ0YiLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ28ge1xuICBmbG9hdDogbGVmdDtcbiAgbWF4LWhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMTVweDtcbn1cblxubnotaGVhZGVyIHtcbiAgcGFkZGluZzogMCBjYWxjKCgxMDAlIC0gMTAwMHB4KSAvIDIpO1xufVxuXG5saSB7XG4gIG1hcmdpbjogMCAxMHB4O1xufVxuIl19 */"] });
class HeaderModule {
}
HeaderModule.ɵfac = function HeaderModule_Factory(t) { return new (t || HeaderModule)(); };
HeaderModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: HeaderModule });
HeaderModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_2__["NzLayoutModule"],
            ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_3__["NzMenuModule"],
            ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_4__["NzAffixModule"],
            ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_5__["NzInputModule"],
            ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__["NzIconModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_8__["NzAlertModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](HeaderModule, { declarations: [HeaderComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_2__["NzLayoutModule"],
        ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_3__["NzMenuModule"],
        ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_4__["NzAffixModule"],
        ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_5__["NzInputModule"],
        ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__["NzIconModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_8__["NzAlertModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"]], exports: [HeaderComponent] }); })();


/***/ }),

/***/ "Gw9n":
/*!***********************************************************************!*\
  !*** ./apps/github-search/src/app/http/error-handling.interceptor.ts ***!
  \***********************************************************************/
/*! exports provided: ErrorHandlingInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorHandlingInterceptor", function() { return ErrorHandlingInterceptor; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _search_search_service_search_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../search/search-service/search.service */ "8qld");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "8Y7J");






class ErrorHandlingInterceptor {
    constructor(searchService) {
        this.searchService = searchService;
    }
    intercept(request, next) {
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(error => {
            if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpErrorResponse"] && error.status === 403) {
                this.searchService.error = 'GitHub API rate limit reached. Try again in a minute.';
            }
            else {
                this.searchService.error = 'Try again later. You can still see your previous search if available.';
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(error);
        }));
    }
}
ErrorHandlingInterceptor.ɵfac = function ErrorHandlingInterceptor_Factory(t) { return new (t || ErrorHandlingInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_search_search_service_search_service__WEBPACK_IMPORTED_MODULE_3__["SearchService"])); };
ErrorHandlingInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: ErrorHandlingInterceptor, factory: ErrorHandlingInterceptor.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "LEnf":
/*!****************************************!*\
  !*** ./apps/github-search/src/main.ts ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "2OKu");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "o4HE");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch((err) => console.error(err));


/***/ }),

/***/ "Q9Ex":
/*!*****************************************************!*\
  !*** ./apps/github-search/src/app/app.component.ts ***!
  \*****************************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/layout */ "nHXS");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/header.component */ "Acbv");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");




class AppComponent {
    constructor() {
        this.title = 'github-search';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["demo-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "demo-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_1__["NzLayoutComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: ["[_nghost-%COMP%] {\n  display: contents;\n}\n\nnz-layout[_ngcontent-%COMP%] {\n  min-height: 100vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtBQUNGIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogY29udGVudHM7XG59XG5cbm56LWxheW91dCB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xufVxuIl19 */"] });


/***/ }),

/***/ "nnwv":
/*!**********************************************************************!*\
  !*** ./apps/github-search/src/app/http/accept-header.interceptor.ts ***!
  \**********************************************************************/
/*! exports provided: AcceptHeaderInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcceptHeaderInterceptor", function() { return AcceptHeaderInterceptor; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");


class AcceptHeaderInterceptor {
    intercept(request, next) {
        request = request.clone({
            setHeaders: { 'Accept': 'application/vnd.github.v3+json' }
        });
        return next.handle(request);
    }
}
AcceptHeaderInterceptor.ɵfac = function AcceptHeaderInterceptor_Factory(t) { return new (t || AcceptHeaderInterceptor)(); };
AcceptHeaderInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AcceptHeaderInterceptor, factory: AcceptHeaderInterceptor.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "o4HE":
/*!************************************************************!*\
  !*** ./apps/github-search/src/environments/environment.ts ***!
  \************************************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "wZcc":
/*!**********************************************************!*\
  !*** ./apps/github-search/src/app/app-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");



const routes = [
    {
        path: '**',
        redirectTo: 'search'
    },
    { path: 'search',
        loadChildren: () => __webpack_require__.e(/*! import() | search-search-module */ "search-search-module").then(__webpack_require__.bind(null, /*! ./search/search.module */ "3ps3"))
            .then(m => m.SearchModule),
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map