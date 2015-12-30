import {Component} from 'angular2/core';
import {DirectionsComponent} from './directions/directions.component';
import {RegisterComponent} from './user/register/register.component';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: 'my-app',
    template: `
		<!--<a [routerLink]="['Directions']">Directions</a>-->
	    <div class="container-fluid"><router-outlet></router-outlet></div>
    `,
	directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
	{ path: '/directions', name: 'Directions', component: DirectionsComponent },
	{ path: '/register', name: 'Register', component: RegisterComponent },
])
export class AppComponent { }