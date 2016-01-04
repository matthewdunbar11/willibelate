System.register(['angular2/core', 'angular2/common', '../../time/secondsToMinutes.pipe', '../../time/millisecondsToSeconds.pipe', '../../math/abs.pipe'], function(exports_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, secondsToMinutes_pipe_1, millisecondsToSeconds_pipe_1, abs_pipe_1;
    var MapComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (secondsToMinutes_pipe_1_1) {
                secondsToMinutes_pipe_1 = secondsToMinutes_pipe_1_1;
            },
            function (millisecondsToSeconds_pipe_1_1) {
                millisecondsToSeconds_pipe_1 = millisecondsToSeconds_pipe_1_1;
            },
            function (abs_pipe_1_1) {
                abs_pipe_1 = abs_pipe_1_1;
            }],
        execute: function() {
            /// <reference path="./google.maps.d.ts" />
            /// <reference path="./datejs.d.ts" />
            MapComponent = (function () {
                function MapComponent() {
                    this.isNaN = isNaN;
                    this.initialized = false;
                    this.directionsService = new google.maps.DirectionsService;
                    this.directionsDisplay = new google.maps.DirectionsRenderer;
                    var center = new google.maps.LatLng(38.9684926, -97.3197131);
                    var options = {
                        center: center,
                        zoom: 5
                    };
                    this.map = new google.maps.Map(document.getElementById('map'), options);
                    this.directionsDisplay.setMap(this.map);
                }
                MapComponent.prototype.ngOnChanges = function () {
                    if (this.initialized) {
                        var that = this;
                        this.travelTime = new Promise(function (resolve, reject) {
                            that.directionsService.route({
                                origin: that.startAddress,
                                destination: that.endAddress,
                                travelMode: google.maps.TravelMode.DRIVING
                            }, function (response, status) {
                                if (status === google.maps.DirectionsStatus.OK) {
                                    var results = {};
                                    that.directionsDisplay.setDirections(response);
                                    that.calculateEarlyLate(response.routes[0].legs[0].duration.value, that);
                                    resolve(response.routes[0].legs[0].duration.value);
                                }
                                else {
                                    window.alert('Directions request failed due to ' + status);
                                }
                            });
                        });
                        that.travelTime.then(function (travelTime) {
                            that.millisecondsEarly = that.calculateEarlyLate(travelTime, that);
                            if (that.millisecondsEarly > 360000) {
                                that.earlyLateString = 'EARLY';
                            }
                            else if (that.millisecondsEarly > 0 && that.millisecondsEarly <= 360000) {
                                that.earlyLateString = 'ON TIME';
                            }
                            else if (that.millisecondsEarly < 0) {
                                that.earlyLateString = 'LATE';
                            }
                        });
                    }
                    this.initialized = true;
                };
                MapComponent.prototype.calculateEarlyLate = function (arrival, that) {
                    var todaysGoal = Date.parse(that.goalArrivalTime);
                    var yesterdaysGoal = todaysGoal.clone().add(-1).days();
                    var tomorrowsGoal = todaysGoal.clone().add(1).days();
                    var arrivalTime = Date.parse('n').add(arrival).seconds();
                    var twelveHours = 12 * 60 * 60 * 1000;
                    var millisecondsEarly;
                    // This compares each goal arrival time (for yesterday, today, and tomorrow)
                    // to find which one is less than twelve hours from right now (i.e., which
                    // one is closest to right now)
                    if (Math.abs(arrivalTime.getTime() - tomorrowsGoal.getTime()) < twelveHours) {
                        millisecondsEarly = tomorrowsGoal.getTime() - arrivalTime.getTime();
                    }
                    else if (Math.abs(arrivalTime.getTime() - todaysGoal.getTime()) < twelveHours) {
                        millisecondsEarly = todaysGoal.getTime() - arrivalTime.getTime();
                    }
                    else if (Math.abs(arrivalTime.getTime() - yesterdaysGoal.getTime()) < twelveHours) {
                        millisecondsEarly = yesterdaysGoal.getTime() - arrivalTime.getTime();
                    }
                    return millisecondsEarly;
                };
                MapComponent.prototype.parseTime = function (timeString) {
                    if (timeString == '')
                        return null;
                    var d = new Date();
                    var time = timeString.match(/(\d+)(:(\d\d))?\s*(p?)/i);
                    console.log(time);
                    if (time.input.toLowerCase().indexOf('pm') >= 0) {
                        time[4] = 'pm';
                        d.setHours(parseInt(time[1]) + 12);
                    }
                    else {
                        time[4] = 'am';
                        d.setHours(parseInt(time[1]));
                    }
                    //d.setHours(parseInt(time[1], 10) - ((parseInt(time[1], 10) < 12 && time[4] == 'pm') ? 12 : 0));
                    d.setMinutes(parseInt(time[3], 10) || 0);
                    d.setSeconds(0, 0);
                    return d;
                };
                MapComponent = __decorate([
                    core_1.Component({
                        selector: 'map',
                        templateUrl: '/app/directions/map/map.html',
                        inputs: ['startAddress', 'endAddress', 'goalArrivalTime'],
                        pipes: [secondsToMinutes_pipe_1.SecondsToMinutesPipe, millisecondsToSeconds_pipe_1.MillisecondsToSecondsPipe, abs_pipe_1.AbsPipe],
                        directives: [common_1.NgClass]
                    }), 
                    __metadata('design:paramtypes', [])
                ], MapComponent);
                return MapComponent;
            }());
            exports_1("MapComponent", MapComponent);
        }
    }
});
//# sourceMappingURL=map.component.js.map