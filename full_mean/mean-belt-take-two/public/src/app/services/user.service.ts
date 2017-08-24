import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs';

@Injectable()
export class UserService {

  constructor(
      private _http: Http
  ) { }

  login(user){
      return this._http.post('/api/users', user)
      .map((response: Response) => response.json())
      .toPromise();
  }
  // This takes the user variable it has been passed
  // and sends a request to our server at the specified route
  // It receives a response and sends that back to our component

  getID(){
      return this._http.get('/api/users/one')
      .map((response: Response) => response.json())
      .toPromise();
  }
  // This sends a request to the server at the specified route
  // It receives a response (which is the user's name or "not logged in")
  // and sends that back to our component

  logout(){
      return this._http.get('/api/users/logout')
      .map((response: Response) => response.json())
      .toPromise();
  }
  // This sends a request to the server at the specified route
  // It receives a response (which is "bye bye") and sends that
  // back to our component

}
