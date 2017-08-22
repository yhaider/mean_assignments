import { Component, OnInit, Input } from '@angular/core';
import { QuestionService } from '../../services/question.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    private _questions: Array<any> = []
    @Input() set questions(newquestions){
        this._questions = newquestions
    }
    
  constructor(
      private _qs: QuestionService
  ) { }

  ngOnInit() {
  }

}
