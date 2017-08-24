import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class PollService {


  constructor(
      private _http: Http
  ) { }


  create(pollinfo){
      return this._http.post('/api/polls', pollinfo)
      .map((response: Response) => response.json())
      .toPromise()
  }
  // This function takes poll info and sends a request to the server
  // at the specified route and passes along this poll info which will
  // be used to create a poll. Then it'll receive a response (either success or error)
  // and then send that along to the component

  displayPolls(){
      return this._http.get('/api/polls')
      .map((response: Response) => response.json())
      .toPromise();
  }
  // This function will make a request to the server at the specified route
  // and then gets a response (either an error or all of the polls) and then
  // passes that along back to the component

  deletePoll(id){
      return this._http.delete(`/api/polls/${id}`)
      .map((response: Response) => response.json())
      .toPromise();
  }
  // This function will make a request to the server at the specified route
  // with the id parameter containing the id passed along into the function
  // Then it will receive a response (either a success delete message or an error)
  // and pass that along back to the component

  getOptions(id){
     return this._http.get(`/api/options/${id}`)
     .map((response: Response) => response.json())
     .toPromise();
  }
  // This function will make a request to the server at the specified route,
  // with the id parameter containing the id passed along into the function
  // Then it will receive a response (either the options associated with that id,
  // or an error message) and pass that response back to the component

  getPoll(id){
      return this._http.get(`/api/polls/${id}`)
      .map((response:Response) => response.json())
      .toPromise();
  }
  // This function will make a request to the server at the specified route,
  // with the id parameter containing the id passed along into the function
  // Then it'll receive a response (either the poll associated with that id
  // or an error) and pass that response back to the component

  vote(id){
      return this._http.put(`/api/options`, id)
      .map((response:Response) => response.json())
      .toPromise();
  }
  // This function will make a request to the server at the specified route
  // with the id parameter containing the id passed along into the function
  // Then it will receive a response (either a success message or an error)
  // and send it back to the component

  getOption(id){
      return this._http.get(`/api/options/one/${id}`)
      .map((response: Response) => response.json())
      .toPromise();
  }
  // This function will make a request to the server at the specified route
  // with the id parameter containing the id passed along into the function
  // Then it will receive a response (either the option associated with that id
  // or an error) and then send that response back to the component
}
