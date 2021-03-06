import {Component} from 'angular2/core'
import {MapComponent} from './map/map.component'
import {NgForm}    from 'angular2/common'

@Component({
	templateUrl: 'app/directions/directions.html',
	directives: [MapComponent]
})
export class DirectionsComponent {
	public model = {};
	public export = {};

	constructor() {
		this.model.homeAddress = '124 7th St, Vinton, VA 24179';
		this.model.workAddress = '2270 Kraft Drive, Blacksburg, VA 24060';
		this.model.workStartTime = '8:30am';
		this.export.homeAddress = '';
		this.export.workAddress = '';
		this.export.workStartTime = '';
	}

	exportValues() {
		this.export.homeAddress = this.model.homeAddress;
		this.export.workAddress = this.model.workAddress;
		this.export.workStartTime = this.model.workStartTime;
	}
}