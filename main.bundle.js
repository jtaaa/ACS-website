webpackJsonp([1,4],{

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JoinPageComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MemberData; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var JoinPageComponent = (function () {
    function JoinPageComponent() {
    }
    JoinPageComponent.prototype.ngOnInit = function () {
    };
    return JoinPageComponent;
}());
JoinPageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'join-page',
        template: __webpack_require__(340),
        styles: [__webpack_require__(326)]
    }),
    __metadata("design:paramtypes", [])
], JoinPageComponent);

var MemberData = (function () {
    function MemberData(firstName, lastName, email, studentNumber) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.studentNumber = studentNumber;
        this.paid = false;
    }
    return MemberData;
}());

//# sourceMappingURL=join-page.component.js.map

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    firebase: {
        apiKey: "AIzaSyChO-pANcs3NWnIK7fIN1X2RgQbq-x_QoA",
        authDomain: "acs-website-be108.firebaseapp.com",
        databaseURL: "https://acs-website-be108.firebaseio.com",
        projectId: "acs-website-be108",
        storageBucket: "acs-website-be108.appspot.com",
        messagingSenderId: "946942397190"
    }
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 182:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 182;


/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(131);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutPageComponent = (function () {
    function AboutPageComponent() {
    }
    AboutPageComponent.prototype.ngOnInit = function () {
    };
    return AboutPageComponent;
}());
AboutPageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'about-page',
        template: __webpack_require__(335),
        styles: [__webpack_require__(321)]
    }),
    __metadata("design:paramtypes", [])
], AboutPageComponent);

//# sourceMappingURL=about-page.component.js.map

/***/ }),

/***/ 246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminPageComponent = (function () {
    function AdminPageComponent() {
    }
    AdminPageComponent.prototype.ngOnInit = function () {
    };
    return AdminPageComponent;
}());
AdminPageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'admin-page',
        template: __webpack_require__(336),
        styles: [__webpack_require__(322)]
    }),
    __metadata("design:paramtypes", [])
], AdminPageComponent);

//# sourceMappingURL=admin-page.component.js.map

/***/ }),

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(337),
        styles: [__webpack_require__(323)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__environments_environment__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__main_main_component__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__nav_header_nav_header_component__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__social_links_social_links_component__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__slideshow_slideshow_component__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__about_page_about_page_component__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__join_page_join_page_component__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__join_form_join_form_component__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__calendar_page_calendar_page_component__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pipes_reverse_pipe__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__admin_page_admin_page_component__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__vote_page_vote_page_component__ = __webpack_require__(256);
/* unused harmony export MyHammerConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var MyHammerConfig = (function (_super) {
    __extends(MyHammerConfig, _super);
    function MyHammerConfig() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.overrides = {
            'pinch': { enable: false },
            'rotate': { enable: false }
        };
        return _this;
    }
    return MyHammerConfig;
}(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* HammerGestureConfig */]));

















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_11__main_main_component__["a" /* MainComponent */],
            __WEBPACK_IMPORTED_MODULE_12__nav_header_nav_header_component__["a" /* NavHeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_13__social_links_social_links_component__["a" /* SocialLinksComponent */],
            __WEBPACK_IMPORTED_MODULE_14__slideshow_slideshow_component__["a" /* SlideshowComponent */],
            __WEBPACK_IMPORTED_MODULE_15__about_page_about_page_component__["a" /* AboutPageComponent */],
            __WEBPACK_IMPORTED_MODULE_16__join_page_join_page_component__["a" /* JoinPageComponent */],
            __WEBPACK_IMPORTED_MODULE_17__join_form_join_form_component__["a" /* JoinFormComponent */],
            __WEBPACK_IMPORTED_MODULE_18__calendar_page_calendar_page_component__["a" /* CalendarPageComponent */],
            __WEBPACK_IMPORTED_MODULE_19__pipes_reverse_pipe__["a" /* ReversePipe */],
            __WEBPACK_IMPORTED_MODULE_20__admin_page_admin_page_component__["a" /* AdminPageComponent */],
            __WEBPACK_IMPORTED_MODULE_21__vote_page_vote_page_component__["a" /* VotePageComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["b" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_6_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_9__environments_environment__["a" /* environment */].firebase),
            __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__["a" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__["a" /* AngularFireAuthModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot([
                {
                    path: '',
                    component: __WEBPACK_IMPORTED_MODULE_11__main_main_component__["a" /* MainComponent */]
                },
                {
                    path: 'about',
                    component: __WEBPACK_IMPORTED_MODULE_15__about_page_about_page_component__["a" /* AboutPageComponent */]
                },
                {
                    path: 'join',
                    component: __WEBPACK_IMPORTED_MODULE_16__join_page_join_page_component__["a" /* JoinPageComponent */]
                },
                {
                    path: 'calendar',
                    component: __WEBPACK_IMPORTED_MODULE_18__calendar_page_calendar_page_component__["a" /* CalendarPageComponent */]
                },
                {
                    path: 'admin',
                    component: __WEBPACK_IMPORTED_MODULE_20__admin_page_admin_page_component__["a" /* AdminPageComponent */]
                },
                {
                    path: 'vote',
                    component: __WEBPACK_IMPORTED_MODULE_21__vote_page_vote_page_component__["a" /* VotePageComponent */]
                }
            ])
        ],
        providers: [
            {
                provide: __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["c" /* HAMMER_GESTURE_CONFIG */],
                useClass: MyHammerConfig
            }
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(28);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CalendarPageComponent = (function () {
    function CalendarPageComponent(db) {
        this.db = db;
        this.upcomingEventsExist = false;
    }
    CalendarPageComponent.prototype.getEvents = function () {
        var _this = this;
        this.eventsList = this.db.list('events', function (ref) {
            return ref.orderByChild('date')
                .startAt(new Date(Date.now()).toISOString())
                .limitToFirst(2);
        });
        this.eventsList.valueChanges().subscribe(function (snapshots) {
            if (snapshots.length) {
                _this.upcomingEventsExist = true;
            }
        });
        this.pastEventsList = this.db.list('events', function (ref) {
            return ref.orderByChild('date')
                .endAt(new Date(Date.now()).toISOString())
                .limitToLast(10);
        });
        this.events = this.eventsList.valueChanges();
        this.pastEvents = this.pastEventsList.valueChanges();
    };
    CalendarPageComponent.prototype.ngOnInit = function () {
        this.getEvents();
    };
    CalendarPageComponent.prototype.toReadableDate = function (dateString) {
        return new Date(dateString).toDateString();
    };
    CalendarPageComponent.prototype.toFloat = function (s) {
        return parseFloat(s);
    };
    return CalendarPageComponent;
}());
CalendarPageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'calendar-page',
        template: __webpack_require__(338),
        styles: [__webpack_require__(324)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _a || Object])
], CalendarPageComponent);

var _a;
//# sourceMappingURL=calendar-page.component.js.map

/***/ }),

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__join_page_join_page_component__ = __webpack_require__(130);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JoinFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var JoinFormComponent = (function () {
    function JoinFormComponent(db) {
        this.db = db;
        this.model = new __WEBPACK_IMPORTED_MODULE_2__join_page_join_page_component__["b" /* MemberData */]('', '', '', '');
        this.submitted = false;
        this.editting = false;
        this.deleted = false;
        this.prevStudentNumber = '';
        this.memberList = db.list('/members');
    }
    JoinFormComponent.prototype.onSubmit = function (form) {
        this.submitted = true;
        if (this.editting && this.prevStudentNumber &&
            this.prevStudentNumber != this.model.studentNumber) {
            this.remove(this.prevStudentNumber);
            this.editting = false;
        }
        var toSend = this.db.object("/members/" + this.model.studentNumber);
        toSend.set(this.model);
    };
    JoinFormComponent.prototype.onEdit = function (editModel) {
        this.submitted = false;
        this.editting = true;
        this.prevStudentNumber = editModel.studentNumber;
    };
    JoinFormComponent.prototype.remove = function (studentNumber) {
        var toDelete = this.db.object("/members/" + studentNumber);
        toDelete.remove();
    };
    JoinFormComponent.prototype.delete = function (studentNumber) {
        this.remove(studentNumber);
        this.model = new __WEBPACK_IMPORTED_MODULE_2__join_page_join_page_component__["b" /* MemberData */]('', '', '', '');
        this.deleted = true;
        this.editting = false;
        this.submitted = false;
    };
    JoinFormComponent.prototype.ngOnInit = function () {
    };
    return JoinFormComponent;
}());
JoinFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'join-form',
        template: __webpack_require__(339),
        styles: [__webpack_require__(325)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _a || Object])
], JoinFormComponent);

var _a;
//# sourceMappingURL=join-form.component.js.map

/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(28);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MainComponent = (function () {
    function MainComponent(db) {
        this.db = db;
        this.peopleImagesDBPath = 'peopleImages';
        this.upcomingEventsExist = false;
    }
    MainComponent.prototype.getEvents = function () {
        var _this = this;
        this.eventsList = this.db.list('events', function (ref) {
            return ref.orderByChild('date')
                .startAt(new Date(Date.now()).toISOString())
                .limitToFirst(2);
        });
        // {
        //   query: {
        //     orderByChild: 'date',
        //     startAt: new Date(Date.now()).toISOString(),
        //     limitToFirst: 2
        //   }
        // }
        this.eventsList.valueChanges().subscribe(function (snapshots) {
            if (snapshots.length) {
                _this.upcomingEventsExist = true;
            }
        });
        this.pastEventsList = this.db.list('events', function (ref) {
            return ref.orderByChild('date')
                .endAt(new Date(Date.now()).toISOString())
                .limitToLast(3);
        });
        this.events = this.eventsList.valueChanges();
        this.pastEvents = this.pastEventsList.valueChanges();
    };
    MainComponent.prototype.ngOnInit = function () {
        this.getEvents();
    };
    MainComponent.prototype.toFloat = function (s) {
        return parseFloat(s);
    };
    MainComponent.prototype.toReadableDate = function (dateString) {
        return new Date(dateString).toDateString();
    };
    return MainComponent;
}());
MainComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-main',
        template: __webpack_require__(341),
        styles: [__webpack_require__(327)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _a || Object])
], MainComponent);

var _a;
//# sourceMappingURL=main.component.js.map

/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__(46);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavHeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavHeaderComponent = (function () {
    function NavHeaderComponent() {
        this.links = [
            {
                name: 'Home',
                link: '/'
            },
            {
                name: 'Join',
                link: '/join'
            },
            {
                name: 'Calendar',
                link: '/calendar'
            },
            {
                name: 'About',
                link: '/about'
            }
        ];
        this.menuActive = false;
    }
    NavHeaderComponent.prototype.toggleMenu = function () {
        this.menuActive = !this.menuActive;
        console.log(this.menuActive);
    };
    NavHeaderComponent.prototype.ngOnInit = function () {
    };
    return NavHeaderComponent;
}());
NavHeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'nav-header',
        template: __webpack_require__(342),
        styles: [__webpack_require__(328)],
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* trigger */])('fade-in', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* state */])('in', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ opacity: 0.98 })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* transition */])('void => *', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ opacity: 0 }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["l" /* animate */])(150)
                ]),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* transition */])('* => void', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["l" /* animate */])(150, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ opacity: 0 }))
                ])
            ]),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* trigger */])('shrink-in', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* state */])('in', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ transform: 'scale(1, 1)' })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* transition */])('void => *', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ transform: 'scale(1.2, 2)' }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["l" /* animate */])(150)
                ]),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* transition */])('* => void', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["l" /* animate */])(150, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ transform: 'scale(1.2, 2)' }))
                ])
            ])
        ]
    }),
    __metadata("design:paramtypes", [])
], NavHeaderComponent);

//# sourceMappingURL=nav-header.component.js.map

/***/ }),

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReversePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ReversePipe = (function () {
    function ReversePipe() {
    }
    ReversePipe.prototype.transform = function (value) {
        if (value) {
            return value.slice().reverse();
        }
    };
    return ReversePipe;
}());
ReversePipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Pipe */])({
        name: 'reverse'
    })
], ReversePipe);

//# sourceMappingURL=reverse.pipe.js.map

/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_animations__ = __webpack_require__(46);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlideshowComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SlideshowComponent = (function () {
    function SlideshowComponent(db) {
        this.db = db;
        this.images = [];
        this.heightPercent = 56.25;
        this.curPos = 1;
    }
    SlideshowComponent.prototype.ngOnInit = function () {
        var _this = this;
        var dbPeopleImageCount = this.db.object(this.dbPath + '/count').snapshotChanges();
        dbPeopleImageCount.subscribe(function (snapshot) {
            _this.imageCount = snapshot.payload.val();
        });
        this.imagesRaw = this.db.list(this.dbPath + '/images');
        this.imagesRaw.snapshotChanges().subscribe(function (snapshots) {
            var curImageNum = 1;
            var mid = Math.floor(_this.imageCount / 2);
            snapshots.forEach(function (snapshot) {
                var curImageState;
                if (curImageNum < _this.curPos) {
                    curImageState = 'left';
                }
                else if (curImageNum > _this.curPos) {
                    curImageState = 'right';
                }
                else {
                    curImageState = 'center';
                }
                _this.images.push({
                    src: snapshot.payload.val(),
                    pos: curImageNum++,
                    state: curImageState
                });
            });
        });
        console.log(this.images);
    };
    SlideshowComponent.prototype.scrollLeft = function () {
        if (this.curPos > 1) {
            this.curPos -= 1;
            this.updateCenter();
        }
        else {
            console.log('No where to go left!');
        }
    };
    SlideshowComponent.prototype.scrollRight = function () {
        if (this.curPos < this.imageCount) {
            this.curPos += 1;
            this.updateCenter();
        }
        else {
            console.log('No where to go right!');
        }
    };
    SlideshowComponent.prototype.gotoPos = function (pos) {
        this.curPos = pos;
        this.updateCenter();
    };
    SlideshowComponent.prototype.updateCenter = function () {
        for (var _i = 0, _a = this.images; _i < _a.length; _i++) {
            var image = _a[_i];
            if (image.pos > this.curPos) {
                image.state = 'right';
            }
            else if (image.pos < this.curPos) {
                image.state = 'left';
            }
            else {
                image.state = 'center';
            }
        }
    };
    return SlideshowComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Number)
], SlideshowComponent.prototype, "heightPercent", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Number)
], SlideshowComponent.prototype, "curPos", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", String)
], SlideshowComponent.prototype, "dbPath", void 0);
SlideshowComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'slideshow',
        template: __webpack_require__(343),
        styles: [__webpack_require__(329)],
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* trigger */])('scroll-slideshow', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* state */])('left', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({ transform: 'translateX(-100%)', display: 'none' })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* state */])('right', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({ transform: 'translateX(100%)', display: 'none' })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* state */])('center', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({ transform: 'translateX(0)' })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["k" /* transition */])('left => center', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["l" /* animate */])('0.2s 50ms ease-out')
                ]),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["k" /* transition */])('center => left', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["l" /* animate */])('0.2s 50ms ease-out')
                ]),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["k" /* transition */])('center => right', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["l" /* animate */])('0.2s 50ms ease-out')
                ]),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["k" /* transition */])('right => center', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["l" /* animate */])('0.2s 50ms ease-out')
                ])
            ])
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _a || Object])
], SlideshowComponent);

var _a;
//# sourceMappingURL=slideshow.component.js.map

/***/ }),

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocialLinksComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IMG_PATH = './assets/images/social/';
var SocialLinksComponent = (function () {
    function SocialLinksComponent() {
        this.socialLinks = [
            {
                name: 'Facebook',
                link: 'https://www.facebook.com/uWaterlooACS/',
                src: IMG_PATH + 'facebook-black.svg'
            },
            {
                name: 'Instagram',
                link: 'https://www.instagram.com/uwaterlooacs/',
                src: IMG_PATH + 'instagram-black.svg'
            },
            {
                name: 'Snapchat',
                link: IMG_PATH + 'snapcode.png',
                src: IMG_PATH + 'snapchat-black.svg'
            }
        ];
    }
    SocialLinksComponent.prototype.ngOnInit = function () {
    };
    return SocialLinksComponent;
}());
SocialLinksComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'social-links',
        template: __webpack_require__(344),
        styles: [__webpack_require__(330)]
    }),
    __metadata("design:paramtypes", [])
], SocialLinksComponent);

//# sourceMappingURL=social-links.component.js.map

/***/ }),

/***/ 256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(28);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VotePageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VotePageComponent = (function () {
    function VotePageComponent(db) {
        var _this = this;
        this.db = db;
        this.vote = {};
        this.positions =
            db.list('voting/positions')
                .valueChanges();
        db.list('voting/positions')
            .snapshotChanges()
            .map(function (arr) {
            return arr.map(function (snap) {
                return snap.payload.val();
            });
        })
            .subscribe(function (response) {
            _this.positionsVals = response;
        });
    }
    VotePageComponent.prototype.ngOnInit = function () {
    };
    VotePageComponent.prototype.submit = function () {
        var _this = this;
        console.log(this.vote);
        this.positionsVals.forEach(function (position) {
            if (_this.vote[position.name]) {
                console.log("voting/positions/" + position.id + "/candidates/" + _this.vote[position.name]);
                var itemRef = _this.db.object("voting/positions/" + position.id + "/candidates/" + _this.vote[position.name] + "/votes");
                itemRef.query.ref.transaction(function (votes) {
                    if (votes === null) {
                        return votes = 1;
                    }
                    else {
                        return votes + 1;
                    }
                });
            }
        });
    };
    VotePageComponent.prototype.selectCandidate = function (positionName, candidateId) {
        this.vote[positionName] = candidateId;
    };
    return VotePageComponent;
}());
VotePageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-vote-page',
        template: __webpack_require__(345),
        styles: [__webpack_require__(331)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _a || Object])
], VotePageComponent);

var _a;
//# sourceMappingURL=vote-page.component.js.map

/***/ }),

/***/ 321:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)(false);
// imports


// module
exports.push([module.i, "/* Media Breakpoints */\n.app-header {\n  background-image: url(" + __webpack_require__(45) + ");\n  background-attachment: scroll;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  min-height: 200px;\n  color: white; }\n  @media (min-width: 768px) {\n    .app-header {\n      /* Create the parallax scrolling effect */\n      background-attachment: fixed; } }\n\n@media (min-width: 768px) {\n  .spacer {\n    height: 100px; } }\n\n.hide-mobile {\n  display: none; }\n  @media (min-width: 768px) {\n    .hide-mobile {\n      display: block; } }\n\n.main-body {\n  box-shadow: 0px -3px 5px -2px rgba(0, 0, 0, 0.5); }\n  @media (min-width: 768px) {\n    .main-body {\n      padding-top: 15px; } }\n  .main-body h1 {\n    text-align: center; }\n\n.links-container {\n  text-align: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 322:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 323:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 324:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)(false);
// imports


// module
exports.push([module.i, "/* Media Breakpoints */\n.app-header {\n  background-image: url(" + __webpack_require__(45) + ");\n  background-attachment: scroll;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  min-height: 100px;\n  color: white; }\n  @media (min-width: 768px) {\n    .app-header {\n      /* Create the parallax scrolling effect */\n      background-attachment: fixed;\n      min-height: 200px; } }\n\n.hide-mobile {\n  display: none; }\n  @media (min-width: 768px) {\n    .hide-mobile {\n      display: block; } }\n\n.main-body {\n  box-shadow: 0px -3px 5px -2px rgba(0, 0, 0, 0.5); }\n  .main-body h1 {\n    text-align: center;\n    font-size: 32px;\n    margin-top: 1em;\n    text-decoration: underline; }\n    @media (min-width: 768px) {\n      .main-body h1 {\n        text-align: left;\n        font-size: 48px; } }\n  .main-body h2 {\n    font-size: 24px;\n    font-weight: thick;\n    text-decoration: underline;\n    margin-top: 2em;\n    margin-left: 20px; }\n    @media (min-width: 768px) {\n      .main-body h2 {\n        font-size: 32px; } }\n  .main-body p {\n    text-align: center;\n    margin-top: 1em; }\n\n.events h1 {\n  text-align: center;\n  font-size: 24px;\n  text-decoration: none; }\n  @media (min-width: 768px) {\n    .events h1 {\n      font-size: 32px; } }\n\n.events p {\n  font-size: 12px; }\n  @media (min-width: 768px) {\n    .events p {\n      font-size: 18px; } }\n\n.events .button {\n  margin-top: 0; }\n  @media (min-width: 768px) {\n    .events .button {\n      margin-top: 2em; } }\n\n@media (min-width: 768px) {\n  .flexy {\n    display: -ms-flexbox;\n    display: flex; } }\n\n@media (min-width: 768px) {\n  .event-images {\n    -ms-flex-positive: 3;\n        flex-grow: 3; } }\n\n.event-description {\n  text-align: center;\n  margin-bottom: 2em; }\n  @media (min-width: 768px) {\n    .event-description {\n      padding-left: 15px;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n      max-width: 335px; } }\n\n.event-description-wide {\n  max-width: none; }\n  @media (min-width: 768px) {\n    .event-description-wide {\n      padding-left: 100px;\n      padding-right: 100px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 325:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)(false);
// imports


// module
exports.push([module.i, "/* Media Breakpoints */\nh1 {\n  text-align: center;\n  margin-bottom: 20px; }\n\nh2 {\n  text-align: center; }\n\nh3 {\n  text-align: center;\n  font-size: 18px; }\n  @media (min-width: 768px) {\n    h3 {\n      font-size: 24px; } }\n\nform {\n  width: 90%;\n  max-width: 500px;\n  margin: 10px auto;\n  text-align: center; }\n\n.form-group {\n  padding: 5px 10px; }\n\n.form-group * {\n  width: 100%; }\n\nlabel {\n  text-align: left; }\n  label h3 {\n    margin: 10px 0;\n    color: grey; }\n    @media (min-width: 768px) {\n      label h3 {\n        font-size: 18px; } }\n\ninput {\n  padding: 10px 15px;\n  box-sizing: border-box;\n  font-size: 14px;\n  border-radius: 6px;\n  border: 1px solid #DDD;\n  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.3);\n  /* Safari */\n  transition: all 300ms; }\n  @media (min-width: 768px) {\n    input {\n      font-size: 20px; } }\n\ninput::-webkit-input-placeholder {\n  color: #DDD; }\n\ninput:-ms-input-placeholder {\n  color: #DDD; }\n\ninput::placeholder {\n  color: #DDD; }\n\ninput:focus {\n  outline: none;\n  border: 1px solid #ADD8E6;\n  box-shadow: 0px 0px 10px 1px lightblue; }\n\nbutton {\n  padding: 7px 15px;\n  margin: 10px;\n  margin-top: 25px;\n  border-radius: 5px;\n  background-color: #42A948;\n  border: none;\n  color: white;\n  font-size: 20px; }\n\nbutton:focus {\n  outline: none;\n  border: 1px solid #ADD8E6;\n  box-shadow: 0px 0px 10px 1px lightblue; }\n\nbutton:disabled {\n  background-color: #DDD; }\n\n.deleted {\n  text-align: center; }\n\nbutton.delete {\n  background-color: #a94442; }\n\n.alert-danger {\n  color: #a94442; }\n\n.ng-invalid:not(form) {\n  border-left: 5px solid #a94442;\n  /* red */ }\n\n.ng-untouched:not(form) {\n  border-left: 5px solid #ADD8E6;\n  /* blue */ }\n\n.ng-valid:not(form) {\n  border-left: 5px solid #42A948;\n  /* green */ }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 326:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)(false);
// imports


// module
exports.push([module.i, "/* Media Breakpoints */\n.app-header {\n  background-image: url(" + __webpack_require__(45) + ");\n  background-attachment: scroll;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  min-height: 100px;\n  color: white; }\n  @media (min-width: 768px) {\n    .app-header {\n      /* Create the parallax scrolling effect */\n      background-attachment: fixed;\n      min-height: 200px; } }\n\n.hide-mobile {\n  display: none; }\n  @media (min-width: 768px) {\n    .hide-mobile {\n      display: block; } }\n\n.main-body {\n  box-shadow: 0px -3px 5px -2px rgba(0, 0, 0, 0.5); }\n  @media (min-width: 768px) {\n    .main-body {\n      padding-top: 15px; } }\n  .main-body h1 {\n    text-align: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 327:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)(false);
// imports


// module
exports.push([module.i, "/* Media Breakpoints */\n.app-header {\n  background-image: url(" + __webpack_require__(45) + ");\n  background-attachment: scroll;\n  background-position: top;\n  background-size: cover;\n  background-repeat: no-repeat;\n  color: white; }\n  @media (min-width: 768px) {\n    .app-header {\n      /* Create the parallax scrolling effect */\n      background-attachment: fixed; } }\n\n.back-image {\n  height: 0;\n  padding-top: 37.5%;\n  text-align: center;\n  position: relative;\n  background-size: 100% auto;\n  background-attachment: scroll;\n  background-position: bottom;\n  background-repeat: no-repeat; }\n\n@media (min-width: 768px) {\n  .spacer {\n    height: 100px; } }\n\n.social-container {\n  background: white;\n  padding: 4px; }\n\n.main-body {\n  box-shadow: 0px -3px 5px -2px rgba(0, 0, 0, 0.5); }\n  .main-body h1 {\n    text-align: center;\n    font-size: 32px;\n    margin-top: 1em; }\n    @media (min-width: 768px) {\n      .main-body h1 {\n        font-size: 48px; } }\n  .main-body h2 {\n    font-size: 24px;\n    font-weight: thick;\n    text-decoration: underline;\n    margin-top: 2em;\n    margin-left: 20px; }\n    @media (min-width: 768px) {\n      .main-body h2 {\n        font-size: 32px; } }\n  .main-body p {\n    text-align: center;\n    margin-top: 1em; }\n\n.back-image-content {\n  display: table;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 100%;\n  width: 100%;\n  text-align: center; }\n  .back-image-content h1 {\n    color: white;\n    text-shadow: 2px 3px 8px #666;\n    font-size: 28px;\n    font-weight: 2000;\n    margin: 0 auto;\n    display: table-cell;\n    vertical-align: middle; }\n    @media (min-width: 768px) {\n      .back-image-content h1 {\n        font-size: 76px; } }\n\n.button {\n  text-align: center;\n  margin-top: 2em;\n  margin-bottom: 4em; }\n  .button a {\n    padding: 10px 20px;\n    border-radius: 5px;\n    background: red;\n    color: white;\n    font-size: 14px;\n    display: inline-block;\n    cursor: pointer; }\n    @media (min-width: 768px) {\n      .button a {\n        font-size: 18px; } }\n\n.events {\n  background-color: #F3F3F3; }\n  .events h1 {\n    font-size: 24px; }\n    @media (min-width: 768px) {\n      .events h1 {\n        font-size: 32px; } }\n  .events h4 {\n    text-align: center; }\n  .events p {\n    font-size: 12px; }\n    @media (min-width: 768px) {\n      .events p {\n        font-size: 18px; } }\n  .events .button {\n    margin-top: 0; }\n    @media (min-width: 768px) {\n      .events .button {\n        margin-top: 2em; } }\n\n@media (min-width: 768px) {\n  .flexy {\n    display: -ms-flexbox;\n    display: flex; } }\n\n@media (min-width: 768px) {\n  .event-images {\n    -ms-flex-positive: 3;\n        flex-grow: 3; } }\n\n.event-description {\n  margin-bottom: 2em; }\n  @media (min-width: 768px) {\n    .event-description {\n      padding-left: 15px;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n      max-width: 335px; } }\n\n.event-description-wide {\n  max-width: none; }\n  @media (min-width: 768px) {\n    .event-description-wide {\n      padding-left: 100px;\n      padding-right: 100px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 328:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)(false);
// imports


// module
exports.push([module.i, "/* Media Breakpoints */\nh2 {\n  font-size: 14px;\n  letter-spacing: 2px; }\n\n.navbar {\n  min-height: 50px; }\n\n.navigation-bar {\n  text-align: right;\n  margin: 0;\n  padding: 0; }\n  @media (min-width: 768px) {\n    .navigation-bar {\n      padding-left: 40px; } }\n\n.navigation-bar > li {\n  list-style: none;\n  line-height: 26px; }\n\n.logo-li {\n  display: none; }\n  @media (min-width: 768px) {\n    .logo-li {\n      display: block;\n      float: left; } }\n\n.link-li {\n  display: none; }\n  @media (min-width: 768px) {\n    .link-li {\n      display: block;\n      float: right; } }\n\n.logo-img-container {\n  display: inline-block; }\n\n.logo-img {\n  width: 45px;\n  height: 45px;\n  display: block; }\n\n.logo-text-container {\n  padding-right: 12px;\n  padding-left: 12px;\n  display: inline-block; }\n  .logo-text-container h1 {\n    margin-top: 14px;\n    font-size: 18px; }\n\n.link-container {\n  padding-right: 12px;\n  padding-left: 12px; }\n  @media (min-width: 768px) {\n    .link-container {\n      display: inline-block; } }\n\n#menu-icon {\n  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);\n  width: 32px;\n  height: 45px;\n  position: absolute;\n  top: 1em;\n  right: 1em;\n  cursor: pointer;\n  overflow: hidden;\n  z-index: 101; }\n  @media (min-width: 768px) {\n    #menu-icon {\n      display: none; } }\n  #menu-icon span {\n    display: block;\n    position: absolute;\n    height: 3px;\n    width: 100%;\n    background: white;\n    border-radius: 9px;\n    opacity: 1;\n    left: 0;\n    transform: rotate(0deg);\n    transition: .15s ease-in-out; }\n  #menu-icon span:nth-child(1) {\n    top: 0px; }\n  #menu-icon span:nth-child(2), #menu-icon span:nth-child(3) {\n    top: 10px; }\n  #menu-icon span:nth-child(4) {\n    top: 20px; }\n\n#menu-icon.open span:nth-child(1) {\n  top: 10px;\n  width: 0%;\n  left: 50%; }\n\n#menu-icon.open span:nth-child(2) {\n  transform: rotate(45deg); }\n\n#menu-icon.open span:nth-child(3) {\n  transform: rotate(-45deg); }\n\n#menu-icon.open span:nth-child(4) {\n  top: 10px;\n  width: 0%;\n  left: 50%; }\n\n.menu {\n  position: absolute;\n  padding-top: 45%;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background-color: gray;\n  cursor: default;\n  text-align: center;\n  z-index: 100;\n  transition: .2s ease-in-out; }\n  @media (min-width: 768px) {\n    .menu {\n      display: none; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 329:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)(false);
// imports


// module
exports.push([module.i, "/* Media Breakpoints */\n.slideshow-container {\n  position: relative;\n  height: 0;\n  background-color: grey; }\n\n.img-container {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  overflow: hidden; }\n  .img-container img {\n    width: 100%;\n    height: 100%;\n    vertical-align: top;\n    position: absolute; }\n\n.ss-button {\n  text-align: center;\n  height: 100%;\n  display: table;\n  background: rgba(0, 0, 0, 0.1);\n  cursor: pointer;\n  z-index: 10; }\n  .ss-button p {\n    margin: 0 auto;\n    display: table-cell;\n    vertical-align: middle;\n    color: white; }\n\n.ss-button:active {\n  background: rgba(0, 0, 0, 0.5); }\n\n.left {\n  position: absolute;\n  left: 0; }\n\n.right {\n  position: absolute;\n  right: 0; }\n\nul {\n  text-align: center;\n  padding-left: 0;\n  margin-bottom: 0; }\n  @media (min-width: 768px) {\n    ul {\n      margin-top: 10px;\n      margin-bottom: 16px; } }\n\n.dot {\n  display: inline-block;\n  height: 5px;\n  width: 5px;\n  background-color: grey;\n  border-radius: 50%;\n  margin-left: 3px;\n  margin-right: 3px;\n  cursor: pointer; }\n  @media (min-width: 768px) {\n    .dot {\n      height: 8px;\n      width: 8px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 330:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)(false);
// imports


// module
exports.push([module.i, "/* Media Breakpoints */\n.social-container {\n  display: inline-block; }\n\n.social-link {\n  display: inline-block;\n  margin: 5px; }\n  .social-link img {\n    width: 24px;\n    height: 24px;\n    display: inline-block;\n    vertical-align: top; }\n    @media (min-width: 768px) {\n      .social-link img {\n        width: 32px;\n        height: 32px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 331:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)(false);
// imports


// module
exports.push([module.i, "/* Media Breakpoints */\n.app-header {\n  background-image: url(" + __webpack_require__(45) + ");\n  background-attachment: scroll;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  min-height: 80px;\n  color: white; }\n  @media (min-width: 768px) {\n    .app-header {\n      /* Create the parallax scrolling effect */\n      background-attachment: fixed; } }\n\n@media (min-width: 768px) {\n  .spacer {\n    height: 100px; } }\n\n.hide-mobile {\n  display: none; }\n  @media (min-width: 768px) {\n    .hide-mobile {\n      display: block; } }\n\n.main-body {\n  box-shadow: 0px -3px 5px -2px rgba(0, 0, 0, 0.5); }\n  @media (min-width: 768px) {\n    .main-body {\n      padding-top: 15px; } }\n  .main-body h1 {\n    text-align: center; }\n\n.links-container {\n  text-align: center; }\n\np {\n  font-size: 14px; }\n  @media (min-width: 768px) {\n    p {\n      font-size: 16px; } }\n\n.button {\n  display: inline-block;\n  text-align: center;\n  margin-top: 1em;\n  margin-bottom: 1em;\n  margin-right: 1em; }\n  .button a {\n    padding: 10px 20px;\n    border-radius: 5px;\n    background: red;\n    color: white;\n    font-size: 14px;\n    display: inline-block;\n    cursor: pointer; }\n    @media (min-width: 768px) {\n      .button a {\n        font-size: 18px; } }\n\n@media (min-width: 768px) {\n  h2 {\n    font-size: 22px; } }\n\n.submit {\n  margin: 0;\n  margin-top: 4em;\n  padding-top: 2em;\n  padding-bottom: 2em;\n  display: block;\n  background-color: grey; }\n\nul {\n  margin-bottom: 2em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 335:
/***/ (function(module, exports) {

module.exports = "<header class=\"app-header\">\n  <nav-header></nav-header>\n  <div class=\"container hide-mobile\">\n    <h1>Association of Caribbean Students</h1>\n  </div>\n</header>\n\n<div class=\"main-body\">\n  <div class=\"container\">\n    <h1>About Us</h1>\n    <p>\n      In the Association of Caribbean Students we’re all about keeping the \n      Caribbean community at U-Waterloo strong and sharing the love by hosting\n      events and educating the wider university population about the diversity\n      and beauty of our culture.\n    </p>\n    <!-- <p>\n      Within ACS, students born in the Caribbean will be able to experience and\n      enjoy an atmosphere in which they can relax and feel at home.\n    </p>\n    <p>\n      Students not born in the Caribbean, but with Caribbean background will find a place\n      where they can find out more about their ancestry, homeland and culture.\n    </p>\n    <p>\n      Students with no Caribbean background will have the opportunity to\n      discover more about a unique culture and participate in activities and\n      events that they might not have otherwise been able to experience.\n    </p>\n    <p>\n      The ACS provides entertainment and educational value to students of all backgrounds\n    </p> -->\n    <div class=\"links-container\">\n      <social-links></social-links>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 336:
/***/ (function(module, exports) {

module.exports = "<p>\n  admin-page works!\n</p>\n"

/***/ }),

/***/ 337:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ 338:
/***/ (function(module, exports) {

module.exports = "<header class=\"app-header\">\n  <nav-header></nav-header>\n  <div class=\"container hide-mobile\">\n    <h1>Association of Caribbean Students</h1>\n  </div>\n</header>\n\n<div class=\"main-body\">\n  <div class=\"container-lg\">\n\n    <ng-container *ngIf=\"upcomingEventsExist\">\n    <h1>Upcoming Events</h1>\n    <div class=\"events\">\n      <ng-container *ngFor=\"let event of events | async | reverse\">\n      <h3>{{ toReadableDate(event.date) }}</h3>\n      <div class=\"flexy\">\n        <div *ngIf=\"event.dbImagesPath\" class=\"event-images\">\n          <slideshow [dbPath]=\"event.dbImagesPath\" [heightPercent]=\"toFloat('37.62')\"></slideshow>\n        </div>\n        <div class=\"event-description\" [class.event-description-wide]=\"!event.dbImagesPath\">\n          <h1>{{ event.name }}</h1>\n          <p>{{ event.description }}</p>\n        </div>\n      </div>\n      </ng-container>\n    </div>\n  </ng-container>\n\n    <h1>Past Events</h1>\n    <div class=\"events\">\n      <ng-container *ngFor=\"let event of pastEvents | async | reverse\">\n      <h3>{{ toReadableDate(event.date) }}</h3>\n      <div class=\"flexy\">\n        <div class=\"event-images\">\n          <slideshow [dbPath]=\"event.dbImagesPath\" [heightPercent]=\"toFloat('37.62')\"></slideshow>\n        </div>\n        <div class=\"event-description\">\n          <h1>{{ event.name }}</h1>\n          <p>{{ event.description }}</p>\n        </div>\n      </div>\n      </ng-container>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ 339:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" [hidden]=\"submitted || deleted\">\n    <h1>One of Us!</h1>\n    <form (ngSubmit)=\"onSubmit(joinForm)\" #joinForm=\"ngForm\">\n\n      <div class=\"form-group\">\n        <label for=\"firstName\"><h3>First Name</h3></label>\n        <input\n        type=\"text\" class=\"form-control\" id=\"firstName\"\n        required\n        [(ngModel)]=\"model.firstName\" name=\"firstName\"\n        placeholder=\"John\"\n        #firstName=\"ngModel\">\n        <div [hidden]=\"firstName.valid || firstName.untouched\"\n             class=\"alert alert-danger\">\n        First Name is required\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"lastName\"><h3>Last Name</h3></label>\n        <input\n         type=\"text\" class=\"form-control\" id=\"lastName\"\n        required\n        [(ngModel)]=\"model.lastName\" name=\"lastName\"\n        placeholder=\"Doe\"\n        #lastName=\"ngModel\">\n        <div [hidden]=\"lastName.valid || lastName.untouched\"\n             class=\"alert alert-danger\">\n        Last Name is required\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"email\"><h3>Email Address</h3></label>\n        <input\n        type=\"email\" class=\"form-control\" id=\"email\"\n        required\n        [(ngModel)]=\"model.email\" name=\"email\"\n        placeholder=\"johndoe@gmail.com\"\n        #email=\"ngModel\">\n        <div [hidden]=\"email.valid || email.untouched\"\n             class=\"alert alert-danger\">\n        Email is required\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"studentNumber\"><h3>Student Number</h3></label>\n        <input\n        type=\"number\" min=\"1\" max=\"100000000\" class=\"form-control\" id=\"studentNumber\"\n        required\n        [(ngModel)]=\"model.studentNumber\" name=\"studentNumber\"\n        placeholder=\"20639709\"\n        #studentNumber=\"ngModel\">\n        <div [hidden]=\"studentNumber.valid || studentNumber.untouched\"\n             class=\"alert alert-danger\">\n        Student number is required\n        </div>\n      </div>\n\n      <button type=\"submit\" class=\"btn btn-default\" [disabled]=\"!joinForm.form.valid\">Join!</button>\n\n    </form>\n</div>\n\n<div class=\"container\" [hidden]=\"!submitted || deleted\">\n  <h1>Thanks for Joining!</h1>\n  <h2>You are now a member and you've been added to our email list.</h2>\n  <h3>Pay any executive member $3 to become a Paid member!</h3>\n  <p>First Name: {{ model.firstName }}</p>\n  <p>Last Name: {{ model.lastName }}</p>\n  <p>Email Address: {{ model.email }}</p>\n  <p>Student Number: {{ model.studentNumber }}</p>\n  <button class=\"btn edit\" (click)=\"onEdit(model)\">Edit</button>\n  <button class=\"btn delete\" (click)=\"delete(model.studentNumber)\">Delete</button>\n</div>\n\n<div class=\"container deleted\" [hidden]=\"!deleted\">\n  <h1>Your info has been deleted!</h1>\n  <h2>Feel free to rejoin at any time.</h2>\n  <button class=\"btn edit\" (click)=\"deleted = false;\">Join</button>\n</div>\n"

/***/ }),

/***/ 340:
/***/ (function(module, exports) {

module.exports = "<header class=\"app-header\">\n  <nav-header></nav-header>\n  <div class=\"container hide-mobile\">\n    <h1>Association of Caribbean Students</h1>\n  </div>\n</header>\n\n<div class=\"main-body\">\n  <join-form></join-form>\n</div>\n"

/***/ }),

/***/ 341:
/***/ (function(module, exports) {

module.exports = "<header class=\"app-header\">\n  <nav-header></nav-header>\n  <div class=\"container\">\n    <div class=\"spacer\"></div>\n    <h1>Association of Caribbean Students</h1>\n    <h2>Welcome to the Caribbean</h2>\n    <div class=\"spacer\"></div>\n    <div style=\"float: right\">\n      <social-links></social-links>\n    </div>\n  </div>\n</header>\n\n<div class=\"main-body\">\n\n  <div class=\"container\">\n    <h2>The Mission</h2>\n    <h1>\"To promote Caribbean culture and cultural unity in general within the University community.\"</h1>\n    <p>The ACS provides entertainment and educational value to students of all backgrounds.</p>\n    <div class=\"button\">\n      <a [routerLink]=\"['about']\">Learn More About Us</a>\n    </div>\n  </div>\n\n  <div class=\"back-image\" style=\"background-image: url('./assets/images/caribbean-flags.jpg');\">\n    <div class=\"back-image-content\">\n      <h1>One love, many islands</h1>\n    </div>\n  </div>\n\n  <div class=\"container\">\n    <h2>The People</h2>\n    <slideshow [curPos]=\"toFloat('4')\" [dbPath]=\"peopleImagesDBPath\"></slideshow>\n    <p>The ACS is a group of fun-loving people with similar backgrounds that come together to share their rich cultures.</p>\n    <div class=\"button\">\n      <a [routerLink]=\"['join']\">Become a member</a>\n    </div>\n  </div>\n\n  <div class=\"events\">\n    <div class=\"container\">\n      <h2>The Events</h2>\n    </div>\n    <div class=\"container-lg\">\n\n      <ng-container *ngIf=\"upcomingEventsExist\">\n      <h3>Upcoming Events</h3>\n      <div *ngFor=\"let event of events | async | reverse\" class=\"flexy\">\n        <div *ngIf=\"event.dbImagesPath\" class=\"event-images\">\n          <slideshow [dbPath]=\"event.dbImagesPath\" [heightPercent]=\"toFloat('37.62')\"></slideshow>\n        </div>\n        <div class=\"event-description\" [class.event-description-wide]=\"!event.dbImagesPath\">\n          <h1>{{ event.name }}</h1>\n          <h4>{{ toReadableDate(event.date) }}</h4>\n          <p>{{ event.description }}</p>\n        </div>\n      </div>\n      </ng-container>\n\n      <h3>Past Events</h3>\n      <div *ngFor=\"let event of pastEvents | async | reverse\" class=\"flexy\">\n        <div class=\"event-images\">\n          <slideshow [dbPath]=\"event.dbImagesPath\" [heightPercent]=\"toFloat('37.62')\"></slideshow>\n        </div>\n        <div class=\"event-description\">\n          <h1>{{ event.name }}</h1>\n          <p>{{ event.description }}</p>\n        </div>\n      </div>\n\n    </div>\n\n    <div class=\"button\">\n      <a [routerLink]=\"['calendar']\">Event Calendar</a>\n    </div>\n  </div>\n\n  <div class=\"container\">\n    <p>Follow us on all our social media!</p>\n    <div style=\"text-align: center;\">\n      <social-links></social-links>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ 342:
/***/ (function(module, exports) {

module.exports = "<div class=\"container navbar\">\n  <ul class=\"navigation-bar\">\n    <li class=\"logo-li\">\n      <div class=\"logo-img-container\">\n        <img class=\"circle-img logo-img\" src=\"./assets/images/UW-ACS-logo-white.png\" alt=\"ACS Logo\">\n      </div>\n      <div class=\"logo-text-container\">\n        <h1>UW-ACS</h1>\n      </div>\n    </li>\n\n    <li class=\"link-li\">\n      <div *ngFor=\"let link of links\" class=\"link-container\">\n        <a [routerLink]=\"[link.link]\">\n          <h2>{{ link.name }}</h2>\n        </a>\n      </div>\n    </li>\n  </ul>\n\n  <div id=\"menu-icon\" (click)=\"toggleMenu()\" [class.open]=\"menuActive\">\n    <span></span>\n    <span></span>\n    <span></span>\n    <span></span>\n  </div>\n\n  <div class=\"menu\" *ngIf=\"menuActive\" [@fade-in]=\"'in'\">\n    <div *ngFor=\"let link of links\" class=\"menu-item\" [@shrink-in]=\"'in'\">\n      <a [routerLink]=\"[link.link]\">\n        <h2>{{ link.name }}</h2>\n      </a>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ 343:
/***/ (function(module, exports) {

module.exports = "<div class=\"slideshow-container noselect\"\n[style.padding-top.%]=\"heightPercent\">\n  <div class=\"img-container\"\n  (swipeleft)='scrollRight()' (swipeRight)='scrollLeft()'>\n    <div class=\"ss-button left\"  (click)='scrollLeft()' ><p><</p></div>\n    <div class=\"ss-button right\" (click)='scrollRight()'><p>></p></div>\n    <ng-container *ngFor=\"let image of images\">\n      <img src=\"{{ image.src }}\"\n      [@scroll-slideshow]=\"image.state\"\n      alt=\"Pic {{ image.pos }}\">\n    </ng-container>\n  </div>\n</div>\n<div>\n  <ul>\n    <ng-container *ngFor=\"let image of images\">\n      <li class=\"dot\"\n      [style.background-color]=\"image.pos == curPos ? 'red' : 'black'\"\n      (click)=\"gotoPos(image.pos)\">\n    </ng-container>\n  </ul>\n</div>\n"

/***/ }),

/***/ 344:
/***/ (function(module, exports) {

module.exports = "<div class=\"social-container\">\n  <a *ngFor=\"let link of socialLinks\" class=\"social-link\" href=\"{{ link.link }}\" target=\"_blank\">\n    <img src=\"{{ link.src }}\" alt=\"ACS {{ link.name }}\">\n  </a>\n</div>\n"

/***/ }),

/***/ 345:
/***/ (function(module, exports) {

module.exports = "<header class=\"app-header\">\n  <nav-header></nav-header>\n  <div class=\"container hide-mobile\">\n    <h1>Association of Caribbean Students</h1>\n  </div>\n</header>\n<div class=\"container\">\n  <h2>Positions to be voted for: </h2>\n  <ul>\n    <li *ngFor=\"let position of positions | async\">\n        <p>{{ position.name }}</p>\n    </li>\n  </ul>\n  <div *ngFor=\"let position of positions | async\">\n      <h2>Who would you like to vote for position of {{ position.name }}?</h2>\n      <div class=\"selectionContainer\">\n        <div *ngFor=\"let candidate of position.candidates | reverse\"\n            class=\"selection button\">\n          <a (click)=\"selectCandidate(position.name, candidate.id)\"\n              [style.background]=\"vote[position.name] === candidate.id ? 'red' : 'pink'\">\n            {{ candidate.name }}\n          </a>\n        </div>\n      </div>\n  </div>\n</div>\n<div class=\"button submit\">\n  <a (click)=\"submit()\">Submit!</a>\n</div>\n\n"

/***/ }),

/***/ 408:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(183);


/***/ }),

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "sunset.e3ba02454d5fd6f5ea20.jpg";

/***/ })

},[408]);
//# sourceMappingURL=main.bundle.js.map