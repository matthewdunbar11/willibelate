System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
        switch (arguments.length) {
            case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
            case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
            case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
        }
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var SecondsToMinutesPipe;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            SecondsToMinutesPipe = (function () {
                function SecondsToMinutesPipe() {
                }
                SecondsToMinutesPipe.prototype.transform = function (value, args) {
                    return Math.round(value / 60);
                };
                SecondsToMinutesPipe = __decorate([
                    core_1.Pipe({ name: 'secondsToMinutes' }), 
                    __metadata('design:paramtypes', [])
                ], SecondsToMinutesPipe);
                return SecondsToMinutesPipe;
            })();
            exports_1("SecondsToMinutesPipe", SecondsToMinutesPipe);
        }
    }
});
//# sourceMappingURL=secondsToMinutes.pipe.js.map