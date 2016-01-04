import {Inject, Injectable} from 'angular2/core'
import {Http} from 'angular2/http';

@Injectable()
export class User {
	constructor(@Inject(Http) private http: Http) {
			this.http = http;
	}

	current() {
		return this.http.get('http://localhost:1337/api/user/current');
	}

}
