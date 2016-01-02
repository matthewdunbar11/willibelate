import {Component, Inject} from 'angular2/core'
import {NgForm}    from 'angular2/common'
import {Http, HTTP_PROVIDERS} from 'angular2/http';

@Component({
	templateUrl: 'app/user/register/register.html'
})
export class RegisterComponent {
	public model = {};

	constructor(@Inject(Http) private http: Http) {

	}

	register() {
		this.model.username = this.model.email;
		this.http.post('http://localhost:1337/auth/local/register', JSON.stringify(this.model))
			.subscribe();
	}
}