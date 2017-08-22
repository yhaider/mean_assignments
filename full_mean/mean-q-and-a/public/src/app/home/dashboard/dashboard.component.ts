import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../../services/question.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    private _questions: Array<any> = []

  constructor(
      private _qs: QuestionService
  ) { }

  ngOnInit() {
  }

}
