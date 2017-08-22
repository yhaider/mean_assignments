import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs';


@Injectable()
export class QuestionService {

  constructor(
      private _http: Http
  ) { }


  getQuestions(){
      return this._http.get('/api/questions')
      .map((response: Response) => response.json())
      .toPromise()
  }
  // This portion actually talks with the backend/express
  // It goes to the routes.js under utils and runs the correct
  // method associated with our GET request


  addQuestion(question){
      return this._http.post(`/api/questions`, question)
       .map((response: Response) => response.json())
       .toPromise();
  }
  // This adds a question to the database and talks to
  // our backend (routes.js, to be specific) to make
  // the API call


  showOne(id) {
      return this._http.get(`/api/questions/${id}`)
      .map((response: Response) => response.json())
      .toPromise()
  }

}
