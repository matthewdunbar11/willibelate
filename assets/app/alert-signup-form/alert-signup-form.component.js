System.register(['angular2/core', 'angular2/http'], function(exports_1) {
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
    var core_1, http_1;
    var AlertSignupFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            AlertSignupFormComponent = (function () {
                function AlertSignupFormComponent(http) {
                    this.http = http;
                    this.cellularProviders = [
                        { domain: 'vtext.com', label: 'Verizon Wireless' },
                        { domain: 'attmobile.net', label: 'AT&T' },
                        { domain: 'tmobilecustomer.net', label: 'T-Mobile' },
                        { domain: 'sprint.net', label: 'Sprint' }
                    ];
                }
                AlertSignupFormComponent.prototype.alertSignupSubmit = function () {
                    var _this = this;
                    var postData = {
                        homeAddress: this.homeAddress,
                        workAddress: this.workAddress,
                        workStartTime: this.workStartTime,
                        email: this.email,
                        cellularProvider: this.cellularProvider,
                        phone: this.phone
                    };
                    this.http.post('http://localhost:1337/api/trafficalertsubscription', JSON.stringify(postData))
                        .subscribe(function (res) {
                        _this.result = res.json();
                    });
                };
                AlertSignupFormComponent = __decorate([
                    core_1.Component({
                        selector: 'alert-signup-form',
                        templateUrl: 'app/alert-signup-form/alert-signup-form.html',
                        inputs: ['homeAddress', 'workAddress', 'workStartTime'],
                    }),
                    __param(0, core_1.Inject(http_1.Http)), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], AlertSignupFormComponent);
                return AlertSignupFormComponent;
            })();
            exports_1("AlertSignupFormComponent", AlertSignupFormComponent);
        }
    }
});
//# sourceMappingURL=alert-signup-form.component.js.map