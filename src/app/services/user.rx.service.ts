import {
  Injectable
} from '@angular/core';
import {
  Http,
  Response,
  Headers
} from '@angular/http';
import {
  Observable
} from 'rxjs/Observable';
import {
  Subject
} from 'rxjs/Subject';
import {
  User
} from '../models/user';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/throw';


@Injectable()
export class UserRxService {

  private usersUrl: string = 'https://randomuser.me/api/?nat=us&results=100';

  constructor(private http: Http) {}

  /**
   * Get all users
   */
  getUsers(): Observable < User[] > {
  //  debugger
    return this.http.get(this.usersUrl)
      .map(res => res.json().results)
      .map(users => users.map(this.toUser))
     // .do(data => console.log(data))
      .catch(this.handleError);
  }

  /**
   * Convert user info from the API to our standard/format
   *   id: string;
   */
  private toUser(user): User {
    //debugger
    return {
      id: user.id.value,
      gender: user.gender,
      title: user.name.title,
      first: user.name.first,
      last: user.name.last,
      email: user.email,
      address1: `${user.location.street} `,
      address2: `${user.location.city} ${user.location.state} ${user.location.postcode}`,
      dob: user.dob,
      registered: user.registered,
      phone: user.phone,
      picture: user.picture.large,
      country: user.nat
    };
  }

  /**
   * Handle any errors from the API
   */
  private handleError(err) {
    let errMessage: string;

    if (err instanceof Response) {
      let body = err.json() || '';
      let error = body.error || JSON.stringify(body);
      errMessage = `${err.status} - ${err.statusText || ''} ${error}`;
    } else {
      errMessage = err.message ? err.message : err.toString();
    }

    return Observable.throw(errMessage);
  }

}
