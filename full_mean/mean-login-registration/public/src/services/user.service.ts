import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs';

@Injectable()
export class UserService {

  constructor(private _http: Http) { }

  register(user){
      return this._http.post('/api/users', user)
       .map((response: Response) => response.json())
       .toPromise();
  }

  login(user){
      return this._http.get('/api/users', user)
      .map((response: Response) => response.json())
      .toPromise();
  }

}
