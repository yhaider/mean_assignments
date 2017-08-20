import { Component, OnInit } from '@angular/core';
import { BikeService } from '../services/bike.service';
import { Bike } from '../interfaces/bike';
// Here we import our bikeservice and our bike interface

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {

    private bikes: Array<Bike>
    // Declaring a private variable bikes that
    // is an array containing things of type Bike

  constructor(
      private _bs: BikeService
  ) { }
    // We instantiate our bikeservice because we will use it

  ngOnInit() {
      this.getBikes()
  }
  // On page load, we should run the getBikes() function outlined
  // in this file

  getBikes(){
      this._bs.getBikes()
      .then(bikes => this.bikes = bikes)
      .catch(err => console.warn(err))
  }
  // This will run on page load, as described above
  // We'll go to our bikeservice and run the getBikes()
  // function in there, take the data and set our bikes variable
  // in this file to the data we received
  // We'll also catch our errors
}
