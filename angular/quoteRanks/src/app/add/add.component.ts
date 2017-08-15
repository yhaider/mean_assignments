import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
    newquote = {
        quote: "",
        author: "",
        rating: 0,
    }
    @Output() addQuote = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  onSubmit() {
        console.log(this.newquote);
        this.addQuote.emit(this.newquote);
        this.newquote = {
            quote: '',
            author: '',
            rating: 0,
        }
    }
}
