import {Component} from 'angular2/core';
import {NgClass} from 'angular2/common';
import {SecondsToMinutesPipe} from '../../time/secondsToMinutes.pipe'
import {MillisecondsToSecondsPipe} from '../../time/millisecondsToSeconds.pipe'
import {AbsPipe} from '../../math/abs.pipe'
/// <reference path="./google.maps.d.ts" />

@Component({
	selector: 'map',
	templateUrl: '/app/directions/map/map.html',
	inputs: ['startAddress', 'endAddress', 'goalArrivalTime'],
	pipes: [SecondsToMinutesPipe, MillisecondsToSecondsPipe, AbsPipe],
	directives: [NgClass]
})
export class MapComponent {
	public startAddress: string;
	public endAddress: string;
	public goalArrivalTime: string;
	public earlyLate: number;
	public earlyLateString: string;
	public initialized: boolean;
	public map: any;
	public directionsDisplay: any;
	public directionsService: any;
	public travelTime: Promise<number>;
	public millisecondsEarly: number;

	constructor() {
		this.initialized = false;
		this.directionsService = new google.maps.DirectionsService;
		this.directionsDisplay = new google.maps.DirectionsRenderer;
		var center: LatLng;
		center = [38.9684926, -97.3197131];
		var options: MapOptions = {
			center: center,
			zoom: 5
		};

		this.map = new google.maps.Map(document.getElementById('map'), options);	

		this.directionsDisplay.setMap(this.map);

	}

	ngOnChanges() {
		if (this.initialized) {
			var that = this;
			this.travelTime = new Promise(function(resolve, reject) {
				that.directionsService.route({
					origin: that.startAddress,
					destination: that.endAddress,
					travelMode: google.maps.TravelMode.DRIVING
				}, function(response, status) {
					if (status === google.maps.DirectionsStatus.OK) {
						var results = {};

						that.directionsDisplay.setDirections(response);
						that.calculateEarlyLate(response.routes[0].legs[0].duration.value, that);
						resolve(response.routes[0].legs[0].duration.value);
					} else {
						window.alert('Directions request failed due to ' + status);
					}
				});
			})

			that.travelTime.then((travelTime: number) => {
				that.millisecondsEarly = that.calculateEarlyLate(travelTime, that);
				if(that.millisecondsEarly > 360000) {
					that.earlyLateString = 'EARLY';	
				}
				else if(that.millisecondsEarly > 0 && that.millisecondsEarly <= 360000) {
					that.earlyLateString = 'ON TIME';
				}
				else if(that.millisecondsEarly < 0) {
					that.earlyLateString = 'LATE';
				}
				
			});

		}		
		this.initialized = true;
	}

	calculateEarlyLate(arrival: number, that: any) {
		var todaysGoal: Date = that.parseTime(that.goalArrivalTime);
		var yesterdaysGoal: Date = new Date(todaysGoal.getTime() - 86400000);
		var tomorrowsGoal: Date = new Date(todaysGoal.getTime() + 86400000);
		var arrivalTime: Date = new Date(new Date().getTime() + arrival * 1000);
		var twelveHours: number = 12 * 60 * 60 * 1000;
		var millisecondsEarly: number;

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
	}

	parseTime(timeString) {
		if (timeString == '') return null;
		var d = new Date();
		var time = timeString.match(/(\d+)(:(\d\d))?\s*(p?)/i);
		d.setHours(parseInt(time[1], 10) + ((parseInt(time[1], 10) < 12 && time[4]) ? 12 : 0));
		d.setMinutes(parseInt(time[3], 10) || 0);
		d.setSeconds(0, 0);
		return d;
	}	

	isNaN = isNaN;
}