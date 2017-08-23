import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../services/user.service';
import { QuestionService } from '../services/question.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit, OnDestroy {

    private user
    private subscription: any
    private question
    private answer_answer
    private answer_extra
    private questionanswer = {
        answer: "",
        extra: "",
        user: {},
        likes: 0,
        _question: ""
    }

  constructor(
      private _us: UserService,
      private _qs: QuestionService,
      private _route: ActivatedRoute,
      private _router: Router
  ) { }

  ngOnInit() {
      this._us.getID()
      .then(data => this.user = data)
      .catch(err => console.log(err))


      this.subscription = this._route.paramMap
      .switchMap(params => {
          return this._qs.showOne(params.get('id'))
      })
      .subscribe(question => this.question = question)


  }

  ngOnDestroy(){
      this.subscription.unsubscribe()
  }



  answerQuestion(){
      this.questionanswer.user = this.user;
      this.questionanswer._question = this.question._id
      this._qs.answer(this.questionanswer)
      .then((data) => this._router.navigateByUrl(`/home`))
      .catch(err => console.log(err))

  }

}
