import { Component, OnInit, Input } from '@angular/core';
// Importing input

@Component({
  selector: 'app-bike-dashboard',
  templateUrl: './bike-dashboard.component.html',
  styleUrls: ['./bike-dashboard.component.css']
})
export class BikeDashboardComponent implements OnInit {

    private _bikes = []
    private display_bikes = []
    private search = {
        input: ""
    }
    // Declaring three private variables

    @Input() set bikes(newBikes){
        this._bikes = newBikes
        this.display_bikes = this._bikes
    }
    // Take the input and set our _bikes and display_bikes
    // to this input
  constructor() { }

  ngOnInit() {
  }

  searchForBike(){
      this.display_bikes = this._bikes.filter(bike => {
          return bike.title.toLowerCase().includes(this.search.input.toLowerCase())
      })
  }
  // When searchForBike() is run, we should filter _bikes
  // so we can show the bikes that are relevant
  // We need to compare them both at lowercase
}
