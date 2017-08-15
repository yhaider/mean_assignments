import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
    all_quotes: Array<any>;
    @Input() set quotes(val){
        this.all_quotes = val;
    };
  constructor() { }

  ngOnInit() {
  }

  delete(ind){
      this.all_quotes.splice(ind, 1)
  }

  increment(ind){
      this.all_quotes[ind].rating += 1;
  }

  decrease(ind){
      this.all_quotes[ind].rating -= 1;
  }

}
