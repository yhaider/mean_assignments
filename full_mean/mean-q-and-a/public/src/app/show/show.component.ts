import { Component, OnInit, OnDestroy } from '@angular/core';
import { QuestionService } from '../services/question.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit, OnDestroy {

    private question
    private subscription
    private answers = []

  constructor(
      private _qs: QuestionService,
      private _route: ActivatedRoute,
      private _router: Router
  ) { }

  ngOnInit() {
      this.subscription = this._route.paramMap
      .switchMap(params => {
          return this._qs.showOne(params.get('id'))
      })
      .subscribe(data => this.question = data)

      console.log(this.question._answers)

  }

  ngOnDestroy() {
      this.subscription.unsubscribe()
  }

  generateArray(){
      for(var x = 0; x < this.question._answers.length; x++){
          this.answers.push(this.question._answers[x])
      }
      console.log(this.answers)
  }
  getAnswers(){
      this._qs.getAnswers(this.question)
      .then((data) => this.answers = data)
      .catch((err) => console.log(err))
  }

}
