System.register(['angular2/core', './map/map.component', '../alert-signup-form/alert-signup-form.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, map_component_1, alert_signup_form_component_1;
    var DirectionsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (map_component_1_1) {
                map_component_1 = map_component_1_1;
            },
            function (alert_signup_form_component_1_1) {
                alert_signup_form_component_1 = alert_signup_form_component_1_1;
            }],
        execute: function() {
            DirectionsComponent = (function () {
                function DirectionsComponent() {
                    this.model = {
                        homeAddress: '',
                        workAddress: '',
                        workStartTime: ''
                    };
                    this.export = {
                        homeAddress: '',
                        workAddress: '',
                        workStartTime: ''
                    };
                    this.model.homeAddress = '124 7th St, Vinton, VA 24179';
                    this.model.workAddress = '2270 Kraft Drive, Blacksburg, VA 24060';
                    this.model.workStartTime = '12:30am';
                    this.export.homeAddress = '';
                    this.export.workAddress = '';
                    this.export.workStartTime = '';
                }
                DirectionsComponent.prototype.exportValues = function () {
                    this.export.homeAddress = this.model.homeAddress;
                    this.export.workAddress = this.model.workAddress;
                    this.export.workStartTime = this.model.workStartTime;
                };
                DirectionsComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/directions/directions.html',
                        directives: [map_component_1.MapComponent, alert_signup_form_component_1.AlertSignupFormComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], DirectionsComponent);
                return DirectionsComponent;
            })();
            exports_1("DirectionsComponent", DirectionsComponent);
        }
    }
});
//# sourceMappingURL=directions.component.js.map