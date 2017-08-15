import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes = [];
  pullData(eventData){
    this.quotes.push(eventData);
}
// This adds the data from the form that has been
// transferred up into the quotes array here
}
