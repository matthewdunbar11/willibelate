System.register(['angular2/core', './dump', './directions/directions.component', './user/register/register.component', './alert-signup-form/alert-signup-form.component', 'angular2/router', './user/User', 'rxjs/Rx'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, dump_1, directions_component_1, register_component_1, alert_signup_form_component_1, router_1, User_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (dump_1_1) {
                dump_1 = dump_1_1;
            },
            function (directions_component_1_1) {
                directions_component_1 = directions_component_1_1;
            },
            function (register_component_1_1) {
                register_component_1 = register_component_1_1;
            },
            function (alert_signup_form_component_1_1) {
                alert_signup_form_component_1 = alert_signup_form_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (User_1_1) {
                User_1 = User_1_1;
            },
            function (_1) {}],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(user) {
                    var _this = this;
                    this.user = user;
                    var currentUser = user.current();
                    currentUser.map(function (res) { return res.json(); }).subscribe(function (res) { return _this.currentUser = res; });
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'app/app.html',
                        providers: [User_1.User],
                        directives: [router_1.ROUTER_DIRECTIVES],
                        pipes: [dump_1.DumpPipe]
                    }),
                    router_1.RouteConfig([
                        { path: '/directions', name: 'Directions', component: directions_component_1.DirectionsComponent },
                        { path: '/register', name: 'Register', component: register_component_1.RegisterComponent },
                        { path: '/subscribe', name: 'Subscribe', component: alert_signup_form_component_1.AlertSignupFormComponent },
                    ]), 
                    __metadata('design:paramtypes', [User_1.User])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map