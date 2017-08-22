import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'
import 'rxjs'

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

  getID(){
      return this._http.get('/api/users')
      .map((response: Response) => response.json())
      .toPromise();
  }

  logout(){
      return this._http.get('/api/logout')
      .map((response: Response) => response.json())
      .toPromise();
  }
}
