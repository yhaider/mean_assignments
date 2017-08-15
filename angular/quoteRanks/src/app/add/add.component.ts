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
    // This is the basic structure of a new quote

    @Output() addQuote = new EventEmitter();
    // This outputs the addQuote up to the parent component
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
    // When the form is submitted this runs
    // It adds into newquote, emits it up to the parent,
    // and then it refreshes newquote to its empty, original
    // state.
}
