import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
// We need Http and Response to talk to our backend/Express stuff
// We also need rxjs to use .map and .toPromise
// Also: we can import all three of those rxjs parts or just
// import rxjs (which is all of it)

@Injectable()
export class BikeService {

  constructor(
      private _http: Http
  ) { }
    // Defining Http so we can use it to send requests to
    // our backend

  createListing(bike){
       return this._http.post(`/api/bikes`, bike)
       .map((response: Response) => response.json())
       .toPromise();
  }
  // This is called in our listings-new component.
  // It sends a post request to our backend (in routes.js)
  // In our express side, from there you can see
  // how it communicates with our mongodb

  getBikes(){
      return this._http.get(`/api/bikes`)
      .map((response: Response) => response.json())
      .toPromise();
  }
  // This is called in our listings component.
  // It sends a get request to our backend (in routes.js)
  // In our express side, from there you can see how it
  // communicates with our mongodb

  updateListing(bike){
      return this._http.put(`/api/bikes/${bike._id}`, bike)
      .map((response: Response) => response.json())
      .toPromise();
  }
  // This is called in our listings-dashboard component.
  // It sends a put request to that route (which can be found
  // in our routes.js) and from there, you can follow the comments
  // to see how it communicates with our mongodb

  deleteListing(id){
      return this._http.delete(`/api/bikes/${id}`)
      .map((response: Response) => response.json())
      .toPromise();
  }
  // This is called in our listings-dashboard component.
  // It sends a put request to that route (which can be found in
  // in our routes.js) and if you want to see how it communicates
  // with our database, go to that file and follow the comments from there
}
