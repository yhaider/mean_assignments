import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../services/question.service';
import { UserService } from '../services/user.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-ask',
  templateUrl: './ask.component.html',
  styleUrls: ['./ask.component.css']
})
export class AskComponent implements OnInit {

    private name: String
    private newq = {
        question: "",
        description: "",
        answers: [],
        user: this.name,
    }


  constructor(
      private _qs: QuestionService,
      private _us: UserService,
      private _router: Router,
      private _route: ActivatedRoute
  ) { }

  ngOnInit() {

  }

  addQuestion(){
      this._qs.addQuestion(this.newq)
      .then(data => {
        console.log(data);
        this._router.navigateByUrl(`/home`)
    })
    .catch(err => {
        console.log(err)
    })
  }

  getID(){
      this._us.getID()
      .then(data => this.name = data.name)
      .catch(err => console.log(err))
  }
}
