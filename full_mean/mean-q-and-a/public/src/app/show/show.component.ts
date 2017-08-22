import { Component, OnInit, OnDestroy } from '@angular/core';
import { QuestionService } from '../services/question.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit, OnDestroy {

    private questionidget
    private questionid
    private question
    private subscription

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
      .subscribe(question => this.question = question)
  }

  ngOnDestroy() {
      this.subscription.unsubscribe()
  }

}
