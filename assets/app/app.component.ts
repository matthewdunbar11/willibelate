import {Component} from 'angular2/core';
import {DumpPipe} from './dump';
import {DirectionsComponent} from './directions/directions.component';
import {RegisterComponent} from './user/register/register.component';
import {AlertSignupFormComponent} from './alert-signup-form/alert-signup-form.component';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {User} from './user/User'
import 'rxjs/Rx';
import {Response} from 'angular2/http'

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.html',
    providers: [User],
    directives: [ROUTER_DIRECTIVES],
    pipes: [DumpPipe]
})
@RouteConfig([
	{ path: '/directions', name: 'Directions', component: DirectionsComponent },
	{ path: '/register', name: 'Register', component: RegisterComponent },
	{ path: '/subscribe', name: 'Subscribe', component: AlertSignupFormComponent },
])
export class AppComponent {
  public currentUser;
  constructor(public user: User) {
  var currentUser = user.current();
      currentUser.map((res: Response) => res.json()).subscribe(res => this.currentUser = res)
  }

}
