import {Component} from 'angular2/core';
import {SecondsToMinutesPipe} from '../../time/secondsToMinutes.pipe'

@Component({
	selector: 'map',
	templateUrl: '/app/directions/map/map.html',
	inputs: ['startAddress', 'endAddress', 'goalArrivalTime'],
	pipes: [SecondsToMinutesPipe]
})
export class MapComponent {
	public startAddress: string;
	public endAddress: string;
	public goalArrivalTime: string;
	public initialized: boolean;
	public map: any;
	public directionsDisplay: any;
	public directionsService: any;
	public travelTime: Promise;

	constructor() {
		this.initialized = false;
		this.directionsService = new google.maps.DirectionsService;
		this.directionsDisplay = new google.maps.DirectionsRenderer;		
		this.map = new google.maps.Map(document.getElementById('map'), {
			center: { lat: 38.9684926, lng: -97.3197131 },
			zoom: 5
		});	

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
						that.directionsDisplay.setDirections(response);
						resolve(response.routes[0].legs[0].duration.value);
					} else {
						window.alert('Directions request failed due to ' + status);
					}
				});
			}
		}		
		this.initialized = true;
	}
}