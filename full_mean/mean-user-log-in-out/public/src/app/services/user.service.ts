import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs'

@Injectable()
export class UserService {

  _loggedin = null
  // This variable keeps track of whether someone is logged in
  // by either being null or equal the user's information/object

  constructor(
      private _http: Http
  ) { }

  isloggedIn(){
      if(this._loggedin){
          return this._loggedin;
      }
      return null
  }
  // This is the function that checks if someone is
  // logged in.
  // If they are, this._loggedin will exist! So we'll return it.
  // Otherwise, we'll return null

  signin(user){
      return new Promise((resolve, reject) => {
          this._http.post('/api/users/login', user)
          .map((response: Response) => response.json())
          .toPromise()
          .then((data) => {
              this._loggedin = data;
              resolve(data);
          })
          .catch(err => {
              reject(err);
          })
      })
  }
  // Our signin function here takes the object from our signin form
  // and runs the API call back to our routes.js to log in a person
  // Once that's done, we get to our ".map" and our response is then
  // returned in a callback (PLEASE ENSURE YOU EITHER HAVE IT ALL ON
  // ONE LINE OR IF IT IS ON MORE THAN ONE LINE THAT YOU WRITE DOWN TO
  // RETURN IT!!!!)
  // Then, if we successfully received data (which is our user info), we'll
  // set our _loggedin variable to that user's info and then send that info
  // along back to our component
  // Otherwise, we'll catch any errors and pass that along to our component
}
