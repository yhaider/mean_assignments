import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Bike } from '../../interfaces/bike';

@Component({
  selector: 'app-listings-dashboard',
  templateUrl: './listings-dashboard.component.html',
  styleUrls: ['./listings-dashboard.component.css']
})
export class ListingsDashboardComponent implements OnInit {

    private _listings: Array<Bike>
    // Here we declare a private variable _listings
    // which is an array containing things of type Bike

    @Input() set listings(newListings){
        this._listings = newListings
    }
    // If you look at listings.component.html, you will
    // see we were databinding in our dashboard section
    // Here is where that comes into play
    // We are setting listings which takes the newListings to
    // our variable _listings
    // We use this to for-loop through in our html and print all of
    // the listings

    @Output() bikeUpdated = new EventEmitter()
    // Here is our event emitter

  constructor() { }

  ngOnInit() {
  }

  updateBike(){
      this.bikeUpdated.emit('Updated Bike')
  }
  // When the updateBike() function is called,
  // then it will emit a message

}
