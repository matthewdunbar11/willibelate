import {Component, Inject} from 'angular2/core'
import {NgForm}    from 'angular2/common'
import {Http} from 'angular2/http';

@Component({
  selector: 'alert-signup-form',
	templateUrl: 'app/alert-signup-form/alert-signup-form.html',
	inputs: ['homeAddress', 'workAddress', 'workStartTime'],
})
export class AlertSignupFormComponent {
  public homeAddress: string;
  public workAddress: string;
  public workStartTime: string;
  public email: string;
  public result: any;
  public cellularProvider: string;
  public phone: string;

  public cellularProviders: Object[] = [
      {domain: 'vtext.com', label: 'Verizon Wireless'},
      {domain: 'attmobile.net', label: 'AT&T'},
      {domain: 'tmobilecustomer.net', label: 'T-Mobile'},
      {domain: 'sprint.net', label: 'Sprint'}
  ];

	constructor(@Inject(Http) private http: Http) {

	}

  alertSignupSubmit() {
    var postData = {
      homeAddress: this.homeAddress,
      workAddress: this.workAddress,
      workStartTime: this.workStartTime,
      email: this.email,
      cellularProvider: this.cellularProvider,
      phone: this.phone
    };

    this.http.post('http://localhost:1337/api/trafficalertsubscription', JSON.stringify(postData))
      .subscribe(res => {
        this.result = res.json();
      });
  }
}
