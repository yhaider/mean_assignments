import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import "rxjs";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

// Importing Http allows us to make http requests


@Injectable()
export class TaskService {
  private api = "https://api.github.com/users/"
  constructor(private _http: Http) { }
  // The above is how we can instantiate Http in this
  getUser(username: string){
      return this._http.get(this.api + username)
      .map(data => data.json())
      .toPromise();
  }
  // The above makes an http request to grab the data
  // associated with the username submitted
}
